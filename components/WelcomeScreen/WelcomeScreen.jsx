import React from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import { COLORS, SIZES, icons, images } from "../../constants";
import { Stack } from "expo-router";
import styles from './welcomescreen.style';


const WelcomeScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    // headerLeft: () => (
                    //     <ScreenHeaderBtn iconUrl={icons.menu} dimensions="60%" />
                    // ),
                    // headerRight: () => (
                    //     <ScreenHeaderBtn iconUrl={images.myimage} dimensions="100%" />
                    // ),
                    headerTitle: ""
                }}
            />
            <View style={styles.container}>
                <Image source={images.corpPool} style={styles.logo} />
            </View>
        </SafeAreaView>
    );
};

export default WelcomeScreen;
