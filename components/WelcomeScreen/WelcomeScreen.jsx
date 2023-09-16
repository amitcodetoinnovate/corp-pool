import React, { useEffect, useRef, useState } from 'react';
import { View, Image, Text, SafeAreaView, StyleSheet } from 'react-native';
import { COLORS, SIZES, icons, images } from "../../constants";
import { Stack } from "expo-router";
import styles from './welcomescreen.style';

const WelcomeScreen = () => {
    const [displayText, setDisplayText] = useState('');
    const fullText = "Trust, Save, Connect—All Platforms, One Commute!";
    let index = 0;

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (index < fullText.length) {
                setDisplayText(prevText => prevText + fullText[index]);
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, 70); // Adjust speed here: 50ms between each character

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    return (
        <View style={styles.safeAreaContainer}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: '#FFFFFF' },
                    headerShadowVisible: false,
                    headerTitle: ""
                }}
            />
            <View style={styles.logoContainer}>
                <Image source={images.corpPool} style={styles.logo} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.animatedText}>
                    {displayText}
                </Text>
            </View>
        </View>
    );
};

export default WelcomeScreen;
