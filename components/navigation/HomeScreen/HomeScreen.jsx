import React, { useState } from 'react'
import { useEffect } from 'react';
import styles from './HomeScreen.style'
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    Modal,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ListItem } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';


const HomeScreen = () => {

    const [user, setUser] = useState();
    const [myTrips, setMyTrips] = useState([]);

    useEffect(() => {

        //var name = async () => await AsyncStorage.getItem('givenName')
        setUser('Vishwas')

    }, []);

    const trips = [
        {
            from: 'Microsoft',
            to: 'Airport',
            travelDate: new Date(),
            notifications: [
                {
                    name: 'Amy Farha',
                    status: 'Pending',
                    type: 'car'

                },
                {
                    name: 'Amy Farha',
                    status: 'Pending',
                    type: 'car'

                }
            ]
        },
        {
            from: 'Apple',
            to: 'Airport',
            travelDate: new Date(),
            notifications: [
                {
                    name: 'Amy Farha',
                    status: 'Pending',
                    type: 'car'
                },
                {
                    name: 'Amy Farha',
                    status: 'Pending',
                    type: 'car'

                }
            ]
        }
    ];

    notificationRender = ({ item }) => (
        <View style={styles.tripRowStyle}>
            {
            item.type == 'car' 
                  ? <Ionicons name={'car'} size={20} width='10%' marginleft='3%' marginTop='1%' />   
                  : null
            }
            <Text style={styles.tripColumnStyle}>{item.name}</Text>
            <Text style={styles.tripColumnStyle}>{item.status}</Text>
            <Ionicons name={'thumbs-up-outline'} size={20} width='10%' marginleft='1%' marginTop='1%' />
        </View>
    );

    tripRender = ({ item }) => (
        <View style={styles.tripCardContainer}>
            <Text style={styles.tripHeader}>{item.from} to {item.to}</Text>

            <FlatList
                keyExtractor={this.keyExtractor}
                data={item.notifications}
                renderItem={this.notificationRender}
            />
            
        </View>
    );

    keyExtractor = (item, index) => index.toString()

    return (

        <View style={styles.container}>

            <View style={styles.welcomeMessageContainer}>
                <Text style={styles.welcomeMessage}>Welcome {user}!</Text>
            </View>

            <View style={styles.flatlistContainer} >
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={trips}
                    renderItem={this.tripRender}
                />
            </View>

        </View>
    )
}

export default HomeScreen