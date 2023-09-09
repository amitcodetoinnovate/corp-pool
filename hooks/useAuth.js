import { useState, useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest, ResponseType } from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
    authorizationEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
    tokenEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
    revocationEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/logout',
};

export const useAuth = () => {
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
        if (response?.type === 'success') {
            const { access_token } = response.params;
            setIsAuthenticated(true);
            (async () => {
                await AsyncStorage.setItem('userToken', access_token);
            })();
        }
    }, [response]);

    return { isAuthenticated, handleLogin: promptAsync, request };
};
