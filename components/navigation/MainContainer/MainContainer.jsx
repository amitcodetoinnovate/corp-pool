import * as React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../HomeScreen/HomeScreen';
import TripsScreen from '../TripsScreen/TripsScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import styles from './MainContainer.style';
import { COLORS, FONT, SIZES } from "../../../constants";
import useUserProfile from '../../../hooks/useUserProfile';

const homeName = "Home";
const tripsName = "Trip";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
    const { userName, profilePicContent, isLoading } = useUserProfile();  // Use the custom hook here

    return (
        <View style={styles.container}>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: '#100c07',
                    tabBarInactiveTintColor: '#100c07',
                    tabBarStyle: {
                        backgroundColor: "white",
                        borderTopWidth: 0,
                        elevation: 0,
                        shadowOpacity: 0,
                        shadowRadius: 1,
                        height: 50,
                        paddingBottom: 0
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;
                        if (rn === homeName) {
                            iconName = focused
                                ? 'home'
                                : 'home-outline';
                        } else if (rn === tripsName) {
                            iconName = focused ? 'car-sport'
                                : 'car-sport-outline';
                        } else if (rn === profileName) {
                            iconName = focused ? 'person-sharp'
                                : 'person-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}>
                <Tab.Screen options={{ headerShown: false }} name={homeName} component={HomeScreen} />
                <Tab.Screen options={{ headerShown: false }} name={tripsName} component={TripsScreen} />
                <Tab.Screen options={{ headerShown: false }} name={profileName} component={ProfileScreen} />
            </Tab.Navigator>
        </View>
    );
};

export default MainContainer;
