import React, { useState, useEffect } from 'react'
import { useRouter } from 'expo-router';
import styles from './HomeScreen.style'
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { extractAddressName } from '../../../utils/addressFormatter';
import { formatDate } from '../../../utils/dateFormatter';
import { fetchMyTrips, updateMyTrip } from './api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUser } from '../../../utils/userObject';
import { useUser } from '../../../contexts/UserContext';


const HomeScreen = () => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [myTrips, setMyTrips] = useState([]);
    const [isLoadingThePage, setIsLoading] = useState(false);
    const { profileData, isLoading } = useUser();
    const userLoggedIn = getUser(profileData);

    useEffect(() => {
        getMyTrips(profileData.id);
    }, []);

    const getMyTrips = async (userId) => {
        try {
            setIsLoading(true);
            const data = await fetchMyTrips(userId);
            setMyTrips(data);
        } catch (error) {
            console.log(error);
            alert("Oops! Something went wrong. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    const approveRejectRequest = async (item, status) => {

        var requestState = status == "approved" ? 1 : 2;

        try {
            setIsLoading(true);
            const data = await updateMyTrip(item.approvalId, requestState, userLoggedIn.userId);
            await getMyTrips(profileData.id);
            alert("Request " + status + " successfully");

        } catch (error) {
            console.log(error);
            alert("Oops! Something went wrong. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    }

    const getIconName = (item) => {
        if (item.requestState === 1) {
            return "checkmark-circle"
        }
        else if (item.requestState === 2) {
            return "close-circle";
        }
        else if (item.requestState === 3) {
            return "ellipsis-horizontal-circle";
        } else {
            return "infinite-outline";
        }
    };

    const renderRider = ({ item }) => {
        return (
            <View style={styles.ridersContainer}>
                <View style={styles.riderNameContainer}>
                    <Text style={styles.riderName}>{item.firstName + " " + item.lastName}</Text>
                </View>
                <View style={styles.riderStatusContainer}>
                    {
                        (item.memberType === 0 && item.requestState === 0) ? <Ionicons name="checkmark-circle" size={20} color="grey" /> : (

                            (userLoggedIn.userId === item.approverUserId && item.requestState === 3)
                                ? (
                                    <View style={{ flexDirection: "row" }}>
                                        <TouchableOpacity
                                            onPress={() => approveRejectRequest(item, "approved")}>
                                            <Ionicons name="checkmark-circle" size={20} color="#06002B07" />
                                        </TouchableOpacity>

                                        <TouchableOpacity style={{ marginLeft: "10%" }}
                                            onPress={() => approveRejectRequest(item, "rejected")}>
                                            <Ionicons name="close-circle" size={20} color="#06002B07" />
                                        </TouchableOpacity>
                                    </View>
                                )
                                :
                                (
                                    <Ionicons name={getIconName(item)} size={20} color="grey" />

                                ))
                    }
                </View>
            </View>
        );
    };

    const renderTrip = ({ item }) => (

        <View style={styles.tripCardContainer}>

            <TouchableOpacity
                onPress={() => router.push(`/MyRideDetails/${item.trip.tripId}`)}>

                <View style={styles.adrressDateContainer}>
                    <View style={styles.addressContainer}>
                        <Text style={styles.addressTextFormat}>{extractAddressName(item.trip.source.locationName)}</Text>
                    </View>
                    <View style={styles.dateContainerAndLogoContainer}>
                        <View style={styles.logoContainer}>
                            <Text style={styles.date}>{"---------------    "}</Text>
                            <Ionicons name="car-sport" size={20} color="white" />
                            <Text style={styles.date}>{"   ---------------"}</Text>
                        </View>
                        <View style={styles.dateContainer}>
                            <Text style={styles.date}>{formatDate(new Date(item.trip.tripDate))}</Text>
                        </View>
                    </View>
                    <View style={styles.addressContainer}>
                        <Text style={styles.addressTextFormat}>{extractAddressName(item.trip.destination.locationName)}</Text>
                    </View>
                </View>

                <FlatList
                    data={item.tripUsers}
                    renderItem={renderRider}
                    keyExtractor={(user, index) => user.userId + index.toString()}
                />
            </TouchableOpacity>

        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.welcomeMessageContainer}>

                <Text style={styles.welcomeMessage}>Welcome {profileData.givenName}!</Text>
            </View>

            {isLoadingThePage ? (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>) :
                <>
                    <View style={styles.flatlistContainer}>
                        <FlatList
                            data={myTrips}
                            renderItem={renderTrip}
                            keyExtractor={(item, index) => item.trip.tripId}
                            refreshing={isLoading}
                            onRefresh={() => getMyTrips(profileData.id)}
                        />
                    </View>
                </>
            }

        </View>
    )
}

export default HomeScreen