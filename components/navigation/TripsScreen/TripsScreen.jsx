import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import LocationSearchComponent from '../../common/locationsearch/LocationSearch'
import styles from './TripsScreen.style'
import { searchTrips, createTrips } from './api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerWithModal from '../../common/datetimepicker/dateTimePickerModal'
import CarSwitchSelector from '../../common/carswitchselector/CarSwitchSelector'
import Ionicons from 'react-native-vector-icons/Ionicons';
import useFetchLocationDetails from '../../../hooks/useFetchLocationDetails';
import { checkPropertiesNotEmpty } from '../../../utils/validations';
import Toggle from "react-native-toggle-element";
import CarPoolList from '../../common/cards/CarPoolList/CarPoolList';

const TripsScreen = ({ navigation }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selection, setSelection] = useState('offer');
    const [startPlaceId, setStartPlaceId] = useState(null);
    const [destinationPlaceId, setDestinationPlaceId] = useState(null);
    const [carTripData, setCarTripData] = useState([]);
    const [isPoolSelected, setIsPoolSelected] = useState(false);
    const { location: startLocation, isLoading: isLoadingStart } = useFetchLocationDetails(startPlaceId);
    const { location: destinationLocation, isLoading: isLoadingDestination } = useFetchLocationDetails(destinationPlaceId);

    const [startAddressDetails, setStartAddressDetails] = useState({ address: '', latitude: null, longitude: null, });

    const [destinationAddressDetails, setDestinationAddressDetails] = useState({ address: '', latitude: null, longitude: null, });


    useEffect(() => {
        if (startLocation) {
            setStartAddressDetails({ address: startLocation.description, latitude: startLocation.latitude, longitude: startLocation.longitude, });
        }
    }, [startLocation]);

    useEffect(() => {
        if (destinationLocation) {
            setDestinationAddressDetails({ address: destinationLocation.description, latitude: destinationLocation.latitude, longitude: destinationLocation.longitude, });
        }
    }, [destinationLocation]);
    useEffect(() => { console.log(isPoolSelected) }, [isPoolSelected]);
    const onStartLocationSelected = (prediction) => {
        setStartPlaceId(prediction.place_id);
    };

    const onDestinationLocationSelected = (prediction) => {
        setDestinationPlaceId(prediction.place_id);
    };
    const triggerSearch = async () => {
        if (!checkPropertiesNotEmpty(startAddressDetails) || !checkPropertiesNotEmpty(startAddressDetails)) {
            alert("Please check your addresses");
            return;
        }
        try {
            const data = await searchTrips(startAddressDetails, destinationAddressDetails);
            setCarTripData(data);

        } catch (error) {
            console.log(error);

            alert("Oops! Something went wrong. Please try again later.");
        }
    };
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const createANewRide = async () => {
        if (!checkPropertiesNotEmpty(startAddressDetails) || !checkPropertiesNotEmpty(startAddressDetails)) {
            alert("Please check your addresses");
            return;
        }
        try {
            const data = await createTrips(startAddressDetails, destinationAddressDetails, selectedDate, 1, JSON.parse(await AsyncStorage.getItem('user')));
            alert("Your ride has been created successfully");
        } catch (error) {
            console.log(error);
            alert("Oops! Something went wrong. Please try again later.");
        }
    };
    const handleTripSelected = (tripId) => {
        console.log(tripId);
    };
    return (
        <View style={styles.container}>
            <View style={styles.queryContainer}>

                <View style={styles.carAndDatePickerContainer}>
                    <DateTimePickerWithModal onDateChange={handleDateChange} />
                    <CarSwitchSelector selected={selection} onSelect={setSelection} />
                </View>
                <View style={styles.locationAndSearchContainer}>
                    <View style={styles.locationsContainer}>
                        <LocationSearchComponent onLocationSelected={onStartLocationSelected} iconName={"location-outline"} />
                        <LocationSearchComponent onLocationSelected={onDestinationLocationSelected} iconName={"location"} />
                    </View>

                    <View style={styles.searchButtonContainer}>
                        <TouchableOpacity onPress={triggerSearch}>
                            <Ionicons name={'search'} size={40} color={'#004cee'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.dataContainer}>
                <View style={styles.dataContainerActionScreen}>

                    <TouchableOpacity onPress={createANewRide} style={styles.dataContainerActionScreenButtonConatiner}>
                        <View style={styles.dataContainerActionScreenButtonWrapper}>
                            <Text style={styles.dataContainerActionButtonText}>Book Me A New Ride</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('I am the one')} style={styles.dataContainerActionScreenButtonConatiner}>
                        <View style={styles.dataContainerActionScreenButtonWrapper}>
                            <Text style={styles.dataContainerActionButtonText}>Join the ride</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={styles.dataSearchResultScreen}>
                    <View style={styles.dataSearchResultSwitchContainer}>
                        <Toggle
                            value={isPoolSelected}
                            onPress={(newState) => setIsPoolSelected(isPoolSelected => !isPoolSelected)}
                            leftComponent={<Text style={{ color: 'white', fontFamily: 'DMBold' }}>Trips</Text>}
                            rightComponent={<Text style={{ color: 'white', fontFamily: 'DMBold' }}>Pools</Text>}
                            trackBar={styles.trackBar}
                            thumbButton={styles.thumbButtonStyle}
                            containerStyle={styles.dataSearchResultSwitchContainerStyle}
                        />
                    </View>
                    <View style={styles.dataSearchResultContainer}>
                        <View style={styles.tripsFlatListContainer}>
                            <CarPoolList
                                data={carTripData}
                                onTripSelected={handleTripSelected}
                            />
                        </View>

                    </View>
                </View>
            </View>

        </View>
    )
}

export default TripsScreen