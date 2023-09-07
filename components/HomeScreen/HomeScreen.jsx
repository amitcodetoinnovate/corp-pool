import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES, icons, images } from "../../constants";
import { ScreenHeaderBtn, Welcome } from "../../components";
import LocationSearchComponent from "../../components/common/locationsearch/LocationSearch";

const HomeScreen = () => {
    const router = useRouter();
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
                        <ScreenHeaderBtn iconUrl={images.myimage} dimensions="100%" />
                    ),
                    headerTitle: " Welcome to CorpPool"
                }}
            />
            <View style={{ padding: 15 }}>
                <Welcome userName={"Amit"} />
                <LocationSearchComponent locationText={"Start Location"} />
                <LocationSearchComponent locationText={"End Location"} />
            </View>
        </SafeAreaView>

    );
};

export default HomeScreen;