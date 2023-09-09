import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native'
import LocationSearchComponent from '../../common/locationsearch/LocationSearch'
import styles from './TripsScreen.style'
import DateTimePickerModal from '../../common/datetimepicker/dateTimePickerModal'
import CarSwitchSelector from '../../common/carswitchselector/CarSwitchSelector'

const TripsScreen = ({ navigation }) => {
    const [selection, setSelection] = useState('offer');
    return (
        <View style={styles.container}>
            <View style={styles.queryContainer}>

                <View style={styles.carAndDatePickerContainer}>
                    <DateTimePickerModal />
                    <CarSwitchSelector selected={selection} onSelect={setSelection} />
                </View>
                <LocationSearchComponent iconName={"location-outline"} />
                <LocationSearchComponent iconName={"location"} />
            </View>
            <View style={styles.dataContainer}>
                <Text style={styles.welcomeMessage}>Trips Screen</Text>
            </View>

        </View>
    )
}

export default TripsScreen