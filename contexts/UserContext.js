import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useUserProfile from '../hooks/useUserProfile'; // Adjust the import path as needed

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(null);
    const userProfile = useUserProfile();

    useEffect(() => {
        const getToken = async () => {
            const token = await AsyncStorage.getItem('userToken');
            setUserToken(token);
        };

        getToken();
    }, []);

    return (
        <UserContext.Provider value={{ userToken, setUserToken, ...userProfile }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
