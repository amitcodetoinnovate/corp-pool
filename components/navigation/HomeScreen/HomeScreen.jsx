import React, { useState } from 'react'
import { useEffect } from 'react';
import styles from './HomeScreen.style'
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { extractAddressName } from '../../../utils/addressFormatter';
import { formatDate } from '../../../utils/dateFormatter';
import { fetchMyTrips } from './api'

const HomeScreen = () => {

    const [user, setUser] = useState();
    const [myTrips, setMyTrips] = useState([]);
    const [selectedTripId, setSelectedTripId] = useState();

    useEffect(() => {
        getMyTrips()
        setUser('Vishwas')

    }, []);

    const getMyTrips = async () => {
        try {
            const data = await fetchMyTrips('e07b05d9-7745-430c-a77e-5455aa6a3301');
            console.log(data)

            setMyTrips(data);

        } catch (error) {
            console.log(error);
            alert("Oops! Something went wrong. Please try again later.");
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

    renderTrip = ({ item }) => (

        <View style={styles.tripCardContainer}>

            <TouchableOpacity
                onPress={() => {
                    if (item.trip.tripId === selectedTripId) {
                        setSelectedTripId(null);

                    } else {
                        setSelectedTripId(item.trip.tripId);
                    }
                }}
                style={[
                    styles.itemContainer,
                    { backgroundColor: item.trip.tripId === selectedTripId ? '#0066FFE5' : '#4F4F54' }
                ]}
            >

                <View style={styles.adrressDateContainer}>
                    <View style={styles.addressContainer}>
                        <Text style={styles.title}>
                            {
                                extractAddressName(item.trip.source.locationName) + ' to ' + extractAddressName(item.trip.destination.locationName)
                            }
                        </Text>
                    </View>

                    <View style={styles.dateContainer}>
                        <Text style={styles.date}>{formatDate(new Date(item.trip.tripDate))}</Text>
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
                <Text style={styles.welcomeMessage}>Welcome {user}!</Text>
            </View>

            <View style={styles.flatlistContainer}>
                <FlatList
                    data={myTrips}
                    renderItem={renderTrip}
                    keyExtractor={(item, index) => item.trip.tripId}
                />
            </View>

        </View>
    )
}

export default HomeScreen