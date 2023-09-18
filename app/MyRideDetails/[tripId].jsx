import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { Stack, useRouter, useGlobalSearchParams } from 'expo-router';
import styles from './[tripId].style';
import { getMyTrips } from './api';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { extractAddressName, extractRestOfAddress } from '../../utils/addressFormatter';
import { formatDate } from '../../utils/dateFormatter';
import BookMyRide from '../../components/common/cards/BookMyCab/bookmyride';

const MyRideDetails = () => {
    const params = useGlobalSearchParams();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const router = useRouter();
    useEffect(() => { getTripDetails(); }, []);
    const getTripDetails = async () => {
        try {
            const response = await getMyTrips(params.tripId);
            response.trip.source.latitude = 17.464305;
            response.trip.source.longitude = 78.3094338;
            response.trip.destination.latitude = 17.2402633;
            response.trip.destination.longitude = 78.4293851;
            setData(response);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const renderRider = ({ item }) => {
        return (
            <View style={styles.ridersContainer}>
                <View style={styles.riderNameContainer}>
                    <Text style={styles.riderName}>{item.firstName + " " + item.lastName}</Text>
                </View>
                <View style={styles.riderStatusContainer}>
                    {item.requestState === 1 ? <Ionicons name="checkmark-circle" size={20} color="green" /> : <Ionicons name="ellipsis-horizontal-circle-outline" size={20} color="red" />}
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: '#FFFFFF' },
                    headerShadowVisible: false,
                    headerTitle: "Booking Details"
                }}
            />
            {isLoading ? (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>) :
                <>
                    <View style={styles.tripDetailsContainer}>
                        <View style={styles.adrressDateContainer}>
                            <View style={styles.addressContainer}>
                                <Text style={styles.addressTextFormat}>{extractAddressName(data.trip.source.locationName)}</Text>
                            </View>
                            <View style={styles.dateContainerAndLogoContainer}>
                                <View style={styles.logoContainer}>
                                    <Text style={styles.date}>{"---------------    "}</Text>
                                    <Ionicons name="car-sport" size={20} color="white" />
                                    <Text style={styles.date}>{"   ---------------"}</Text>
                                </View>
                                <View style={styles.dateContainer}>
                                    <Text style={styles.date}>{formatDate(new Date(data.trip.tripDate))}</Text>
                                </View>
                            </View>
                            <View style={styles.addressContainer}>
                                <Text style={styles.addressTextFormat}>{extractAddressName(data.trip.destination.locationName)}</Text>
                            </View>
                        </View>
                        <View style={styles.flatListContainer}>
                            <FlatList
                                data={data.tripUsers}
                                renderItem={renderRider}
                                keyExtractor={(user, index) => user.userId + index.toString()}
                            />
                        </View>

                    </View>
                    <View style={styles.tripBookingContainer}>
                        <BookMyRide tripId={data.trip.tripId} source={data.trip.source} destination={data.trip.destination} />
                    </View>
                </>
            }
        </View>
    )
}

export default MyRideDetails