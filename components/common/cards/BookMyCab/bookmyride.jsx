import React, { useState, useEffect } from 'react';
import { View, Text, AsyncStorage, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import styles from './bookmyride.style';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest, ResponseType } from 'expo-auth-session';
import { icons } from '../../../../constants';

WebBrowser.maybeCompleteAuthSession();

// Endpoint Configurations
const discovery = {
    authorizationEndpoint: 'https://login.uber.com/oauth/v2/authorize',
    tokenEndpoint: 'https://login.uber.com/oauth/v2/token',
};

const BookMyRide = ({ tripId, source, destination }) => {
    const [uberFare, setUberFare] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId: 'AhAAS448NCyeE6JHHe5HdhHmAWcfefvq',
            scopes: ['profile'],
            responseType: ResponseType.Token,
            redirectUri: makeRedirectUri({
                native: 'http://localhost:8081', // Replace with your redirect URI
            }),
        },
        discovery
    );

    useEffect(() => {
        console.log(response);
        if (response?.type === 'success') {
            const { access_token } = response.params;
            console.log(access_token);
            setAccessToken(access_token);

            (async () => {
                await AsyncStorage.setItem('userToken', access_token);
            })();
        }
    }, [response]);

    const getFairFromUber = async () => {
        try {
            const response = await axios.get('https://api.uber.com/v1.2/estimates/price?', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                params: {
                    start_latitude: source.latitude,
                    start_longitude: source.longitude,
                    end_latitude: destination.latitude,
                    end_longitude: destination.longitude,
                },
            });
            setUberFare(response.data.price);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (accessToken) {
            getFairFromUber();
        }
    }, [accessToken, source, destination]);

    return (
        <View style={styles.container}>
            <View style={styles.BookingTypeContainer}>
                <View style={styles.imageContainer}>
                    <Image source={icons.uber} style={styles.logo} />
                </View>
                <TouchableOpacity onPress={() => promptAsync()}>
                    <View style={styles.rideFairContainer}>
                        <Text style={styles.rideFair}>Get Uber Fare</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.rideFairContainer}>
                    <Text style={styles.rideText}>{uberFare ? `${uberFare} Rs` : 'Fetching...'}</Text>
                </View>
            </View>
            <View style={styles.BookingTypeContainer}>
                <View style={styles.imageContainer}>
                    <Image source={icons.ola} style={styles.logo} />
                </View>
                <View style={styles.rideFairContainer}>
                    <Text style={styles.rideText}>20 Rs</Text>
                </View>
            </View>
            <View style={styles.BookingTypeContainer}>
                <View style={styles.imageContainer}>

                    <Image source={icons.meru} style={styles.logo} />
                </View>
                <View style={styles.rideFairContainer}>
                    <Text style={styles.rideText}>23 Rs</Text>
                </View>
            </View>
        </View>
    );
};

export default BookMyRide;
