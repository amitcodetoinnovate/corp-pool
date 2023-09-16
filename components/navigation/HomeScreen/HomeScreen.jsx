import React, { useState } from 'react'
import { useEffect } from 'react';
import styles from './HomeScreen.style'
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { extractAddressName } from '../../../utils/addressFormatter';
import { formatDate } from '../../../utils/dateFormatter';
import { getMyTrips } from './api'

const HomeScreen = () => {

    const [user, setUser] = useState();
    const [myTrips, setMyTrips] = useState([]);

    useEffect(() => {
        //fetchMyTrips()
        setUser('Vishwas')

    }, []);

    const fetchMyTrips = async () => {
        try {
            const data = await getMyTrips('e07b05d9-7745-430c-a77e-5455aa6a3301');
            console.log(data)
            setMyTrips(data);

        } catch (error) {
            console.log(error);

            alert("Oops! Something went wrong. Please try again later.");
        }
    };

    const trips = [
        {
            "trip": {
                "tripId": "41fbd424-530b-4611-accb-fb7c269e7fa1",
                "source": {
                    "longitude": 0,
                    "latitude": 0,
                    "locationName": "Aparna Serene Park, Masjidbanda Road, Kondapur, Telangana 500084, India"
                },
                "destination": {
                    "longitude": 0,
                    "latitude": 0,
                    "locationName": "Hyderabad Airport, Telangana 500019, India"
                },
                "tripDate": "2023-09-13T17:01:00+00:00",
                "rideType": 0,
                "user": null,
                "travellerCount": 1,
                "isActive": false,
                "createdDate": "0001-01-01T00:00:00"
            },
            "tripUsers": [
                {
                    "userId": "a751f9bc-31be-455f-a107-0562df9f19b7",
                    "firstName": "Vishwas",
                    "lastName": "Srivastava",
                    "email": null,
                    "isActive": false,
                    "createdDate": "0001-01-01T00:00:00",
                    "memberType": 0,
                    "requestState": 1
                },
                {
                    "userId": "a751f9bc-31be-455f-a107-0562df9f19b7",
                    "firstName": "Anand",
                    "lastName": "Tiwary",
                    "email": null,
                    "isActive": false,
                    "createdDate": "0001-01-01T00:00:00",
                    "memberType": 2,
                    "requestState": 1
                },
                {
                    "userId": "a751f9bc-31be-455f-a107-0562df9f19b7",
                    "firstName": "Amit",
                    "lastName": "Verma",
                    "email": null,
                    "isActive": false,
                    "createdDate": "0001-01-01T00:00:00",
                    "memberType": 0,
                    "requestState": 3
                }
            ]
        },
        {
            "trip": {
                "tripId": "41fbd424-530b-4611-accb-fb7c269e7fa1",
                "source": {
                    "longitude": 0,
                    "latitude": 0,
                    "locationName": "Aparna Sarovar, Nallagandla Road Kanchagachibowli, Post, HUDA Layout, Gopanpally, Gopanpalle, Telangana 500046, India"
                },
                "destination": {
                    "longitude": 0,
                    "latitude": 0,
                    "locationName": "Manjeera Diamond Towers, Manjeera Diamond Towers, Tellapur, Nalagandla, Telangana 500019, India"
                },
                "tripDate": "2023-09-15T11:05:00+00:00",
                "rideType": 0,
                "user": null,
                "travellerCount": 1,
                "isActive": false,
                "createdDate": "0001-01-01T00:00:00"
            },
            "tripUsers": [
                {
                    "userId": "a751f9bc-31be-455f-a107-0562df9f19b7",
                    "firstName": "Amit",
                    "lastName": "Verma",
                    "email": null,
                    "isActive": false,
                    "createdDate": "0001-01-01T00:00:00",
                    "memberType": 0,
                    "requestState": 3
                },
                {
                    "userId": "a751f9bc-31be-455f-a107-0562df9f19b7",
                    "firstName": "Rajiv",
                    "lastName": "Verma",
                    "email": null,
                    "isActive": false,
                    "createdDate": "0001-01-01T00:00:00",
                    "memberType": 2,
                    "requestState": 1
                }
            ]
        }
    ]

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

            <TouchableOpacity>

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
                    data={trips}
                    renderItem={renderTrip}
                    keyExtractor={item => item.trip.tripId}
                />
            </View>

        </View>
    )
}

export default HomeScreen