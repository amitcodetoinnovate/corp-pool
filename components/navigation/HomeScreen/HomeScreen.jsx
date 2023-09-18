import React, { useState, useEffect } from 'react'
import { useRouter } from 'expo-router';
import styles from './HomeScreen.style'
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { extractAddressName } from '../../../utils/addressFormatter';
import { formatDate } from '../../../utils/dateFormatter';
import { fetchMyTrips, updateMyTrip } from './api'
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {

    const router = useRouter();
    const [user, setUser] = useState(null);
    const [myTrips, setMyTrips] = useState([]);
    const [isLoadingThePage, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            const userInfo = JSON.parse(await AsyncStorage.getItem('user'));
            setUser(userInfo);
            getMyTrips(userInfo.userId);
        })();
    }, []);

    const getMyTrips = async (userId) => {
        try {
            setIsLoading(true);
            const data = await fetchMyTrips(userId);
            setMyTrips(data);
            setIsLoading(false);

        } catch (error) {
            console.log(error);
            alert("Oops! Something went wrong. Please try again later.");
        }
    };

    // const trips = [{ "trip": { "tripId": "02adef27-713d-4ddc-ada0-3853e0462376", "source": { "longitude": 78.3408623, "latitude": 17.4295962, "locationName": "Microsoft Campus Building 3, Microsoft Campus Building 3, Gachibowli, Hyderabad, Telangana 500032, India" }, "destination": { "longitude": 78.3374702, "latitude": 17.4640199, "locationName": "Aparna Serene Park, SY.NO 146 SBI OFFICERS QUARTERS, MASJID BANDA, KONDAPUR, SERLINGAM PALLY, Aparna Serene Park, APARNA SERENE PARK, Masjid Banda Main Rd, SBI Officers Quarters, Gachibowli, Kondapur, Hyderabad, Telangana 500084, India" }, "tripDate": "2023-09-18T10:39:00", "rideType": 0, "user": null, "travellerCount": 1, "isActive": false, "createdDate": "0001-01-01T00:00:00" }, "tripUsers": [{ "userId": "3876d113-b5ea-4a29-ad8e-f369112848b5", "firstName": "Kapil", "lastName": "Dalal", "email": null, "isActive": false, "createdDate": "0001-01-01T00:00:00", "memberType": 0, "requestState": 0, "approvalId": "00000000-0000-0000-0000-000000000000" }, { "userId": "a751f9bc-31be-455f-a107-0562df9f19b7", "firstName": "Amit", "lastName": "Verma", "email": null, "isActive": false, "createdDate": "0001-01-01T00:00:00", "memberType": 0, "requestState": 0, "approvalId": "00000000-0000-0000-0000-000000000001" }] }]

    const approveRejectRequest = (item, status) => {

        var requestState = status == "approved" ? 1 : 2;
        updateMyTrip(item.approvalId, requestState)
    }

    const renderRider = ({ item }) => {
        return (
            <View style={styles.ridersContainer}>
                <View style={styles.riderNameContainer}>
                    <Text style={styles.riderName}>{item.firstName + " " + item.lastName}</Text>
                </View>
                <View style={styles.riderStatusContainer}>
                    {
                        item.requestState === 1
                            ? <Ionicons name="checkmark-circle" size={20} color="green" />
                            :
                            (
                                item.requestState == 2
                                    ? <Ionicons name="close-circle" size={20} color="red" />
                                    :
                                    (
                                        <View style={{ flexDirection: "row" }}>
                                            <TouchableOpacity
                                                onPress={() => approveRejectRequest(item, "approved")}>
                                                <Ionicons name="checkmark-circle-outline" size={20} color="green" />
                                            </TouchableOpacity>

                                            <TouchableOpacity style={{ marginLeft: "10%" }}
                                                onPress={() => approveRejectRequest(item, "rejected")}>
                                                <Ionicons name="close-circle-outline" size={20} color="red" />
                                            </TouchableOpacity>
                                        </View>
                                    )
                            )
                    }
                </View>
            </View>
        );
    };

    renderTrip = ({ item }) => (

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

                <Text style={styles.welcomeMessage}>Welcome {user.firstName}!</Text>
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
                        />
                    </View>
                </>
            }

        </View>
    )
}

export default HomeScreen