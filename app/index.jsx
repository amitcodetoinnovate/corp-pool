import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { Button as RNButton, Icon } from 'react-native-elements';
import { Stack, useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest, ResponseType } from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen';
import MainContainer from '../components/navigation/MainContainer/MainContainer';
import styles from './index.style';
import { icons } from '../constants';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
    authorizationEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
    tokenEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
    revocationEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/logout',
};

const Home = () => {
    const router = useRouter();
    const [showSplash, setShowSplash] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId: 'e806ef08-3a6f-41c6-a269-099936d61b2e',
            scopes: ['openid', 'profile', 'email', 'User.Read'],
            responseType: ResponseType.Token,
            usePKCE: false,
            redirectUri: makeRedirectUri({
                native: 'http://localhost:8081',
                useProxy: true,
            }),
        },
        discovery
    );

    useEffect(() => {
        setTimeout(() => {
            setShowSplash(false);
        }, 7000);
    }, []);

    useEffect(() => {
        if (response?.type === 'success') {
            const { access_token } = response.params;
            setIsAuthenticated(true);
            // Store the access token using AsyncStorage
            (async () => {
                await AsyncStorage.setItem('userToken', access_token);
            })();
        }
    }, [response]);

    const handleLogin = () => {
        promptAsync();
    };

    if (showSplash) {
        return <WelcomeScreen />;
    }

    if (!isAuthenticated) {
        return (
            <SafeAreaView style={styles.container}>
                <Stack.Screen
                    options={{
                        headerStyle: { backgroundColor: '#FFFFFF' },
                        headerShadowVisible: false,
                        headerTitle: ""
                    }}
                />
                <View style={styles.header}>
                    <Text style={styles.headerText}>Welcome to Corp Pool</Text>
                </View>

                <View style={styles.body}>
                    <RNButton
                        icon={
                            <Image source={icons.microsoft} style={styles.logo} />
                        }
                        title=" Login with Microsoft Account"
                        onPress={handleLogin}
                        disabled={!request}
                        buttonStyle={styles.azureButton}
                    />
                </View>
            </SafeAreaView>);
    }
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: '#FFFFFF' },
                    headerShadowVisible: false,
                    headerTitle: ""
                }}
            />
            <MainContainer />
        </SafeAreaView>);
};

export default Home;
