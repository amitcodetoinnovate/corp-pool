import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import LocationSearchComponent from '../../common/locationsearch/LocationSearch'
import styles from './TripsScreen.style'
const TripsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <LocationSearchComponent iconName={"location-outline"} />
            <LocationSearchComponent iconName={"location"} />
            <View style={styles.dataContainer}>
                <Text style={styles.welcomeMessage}>Trips Screen</Text>
            </View>

        </View>
    )
}

export default TripsScreen