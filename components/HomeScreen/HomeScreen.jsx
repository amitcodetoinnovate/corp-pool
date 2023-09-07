import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES, icons, images } from "../../constants";
import { ScreenHeaderBtn, Welcome } from "../../components";
import LocationSearchComponent from "../../components/common/locationsearch/LocationSearch";
import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
    const router = useRouter();
    const [userName, setUserName] = useState('');
    const [profilePicContent, setProfilePicContent] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const token = await AsyncStorage.getItem('userToken');

            // Fetch user's basic profile information
            const response = await fetch('https://graph.microsoft.com/v1.0/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const profileData = await response.json();
            setUserName(profileData.givenName || 'Anonymous');

            // Fetch user's profile picture
            const pictureResponse = await fetch('https://graph.microsoft.com/v1.0/me/photo/$value', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (pictureResponse.ok) {
                const blob = await pictureResponse.blob();
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                    const base64data = reader.result;
                    setProfilePicContent(base64data);
                };
            }
        };

        fetchProfile();
    }, []);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimensions="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={{ uri: profilePicContent }} dimensions="100%" />
                    ),
                    headerTitle: " Welcome to CorpPool"
                }}
            />
            <View style={{ padding: 15 }}>
                <Welcome userName={userName} />
                <LocationSearchComponent locationText={"Start Location"} />
                <LocationSearchComponent locationText={"End Location"} />
            </View>
        </SafeAreaView>

    );
};

export default HomeScreen;