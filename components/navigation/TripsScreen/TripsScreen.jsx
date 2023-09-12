import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import LocationSearchComponent from '../../common/locationsearch/LocationSearch'
import styles from './TripsScreen.style'
import DateTimePickerModal from '../../common/datetimepicker/dateTimePickerModal'
import CarSwitchSelector from '../../common/carswitchselector/CarSwitchSelector'
import Ionicons from 'react-native-vector-icons/Ionicons';

const TripsScreen = ({ navigation }) => {
    const [selection, setSelection] = useState('offer');
    return (
        <View style={styles.container}>
            <View style={styles.queryContainer}>

                <View style={styles.carAndDatePickerContainer}>
                    <DateTimePickerModal />
                    <CarSwitchSelector selected={selection} onSelect={setSelection} />
                </View>
                <View style={styles.locationAndSearchContainer}>
                    <View style={styles.locationsContainer}>
                        <LocationSearchComponent iconName={"location-outline"} />
                        <LocationSearchComponent iconName={"location"} />
                    </View>

                    <View style={styles.searchButtonContainer}>
                        <TouchableOpacity onPress={() => alert("you clicked search")}>
                            <Ionicons name={'search'} size={40} color={'#004cee'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.dataContainer}>
                <View style={styles.dateCardScreen}>
                    <Text >Trips Screen</Text>
                </View>
            </View>

        </View>
    )
}

export default TripsScreen