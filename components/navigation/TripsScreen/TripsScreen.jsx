import React, { useState, useEffect } from 'react';
import { View, Text, Switch, TouchableOpacity, ActivityIndicator } from 'react-native'
import LocationSearchComponent from '../../common/locationsearch/LocationSearch'
import styles from './TripsScreen.style'
import { searchTrips, createTrips, joinTheRide } from './api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerWithModal from '../../common/datetimepicker/dateTimePickerModal'
import CarSwitchSelector from '../../common/carswitchselector/CarSwitchSelector'
import Ionicons from 'react-native-vector-icons/Ionicons';
import useFetchLocationDetails from '../../../hooks/useFetchLocationDetails';
import { checkPropertiesNotEmpty } from '../../../utils/validations';
import Toggle from "react-native-toggle-element";
import CarPoolList from '../../common/cards/CarPoolList/CarPoolList';
import TripList from '../../common/cards/TripList/TripList';

const TripsScreen = ({ navigation }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [rideType, setRideType] = useState('offer');
    const [isLoading, setIsLoading] = useState(false);
    const [startPlaceId, setStartPlaceId] = useState(null);
    const [destinationPlaceId, setDestinationPlaceId] = useState(null);
    const [selectedTripId, setSelectedTripId] = useState(null);
    const [carTripData, setCarTripData] = useState([]);
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

    const onStartLocationSelected = (prediction) => {
        setStartPlaceId(prediction.place_id);
    };

    const onDestinationLocationSelected = (prediction) => {
        setDestinationPlaceId(prediction.place_id);
    };
    const triggerSearch = async () => {
        await searchTrip();
    };

    const searchTrip = async () => {
        if (!checkPropertiesNotEmpty(startAddressDetails) || !checkPropertiesNotEmpty(destinationAddressDetails)) {
            alert("Please check your addresses");
            return;
        }
        try {
            setIsLoading(true);
            setSelectedTripId(null);
            const data = await searchTrips(startAddressDetails, destinationAddressDetails, selectedDate, rideType, JSON.parse(await AsyncStorage.getItem('user')));
            console.log(JSON.stringify(data));
            setCarTripData(data);
            setIsLoading(false);

        } catch (error) {
            console.log(error);
            setIsLoading(false);
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
            setIsLoading(true);

            const data = await createTrips(startAddressDetails, destinationAddressDetails, selectedDate, 1, JSON.parse(await AsyncStorage.getItem('user')));
            setIsLoading(false);
            alert("Your ride has been created successfully");
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            alert("Oops! Something went wrong. Please try again later.");
        }
    };
    const joinTheRideHandle = async () => {
        try {
            setIsLoading(true);
            setSelectedTripId(null);
            const data = await joinTheRide(selectedTripId, JSON.parse(await AsyncStorage.getItem('user')));
            setCarTripData(data);
            setIsLoading(false);

        } catch (error) {
            console.log(error);
            setIsLoading(false);
            alert("Oops! Something went wrong. Please try again later.");
        }
    };
    const handleTripSelected = (tripId) => {
        setSelectedTripId(tripId);
    };
    return (
        <View style={styles.container}>
            <View style={styles.queryContainer}>

                <View style={styles.carAndDatePickerContainer}>
                    <DateTimePickerWithModal onDateChange={handleDateChange} />
                    <CarSwitchSelector selected={rideType} onSelect={setRideType} />
                </View>
                <View style={styles.locationAndSearchContainer}>
                    <View style={styles.locationsContainer}>
                        <LocationSearchComponent onLocationSelected={onStartLocationSelected} iconName={"location-outline"} locationTextInput={startAddressDetails.address} />
                        <LocationSearchComponent onLocationSelected={onDestinationLocationSelected} iconName={"location"} locationTextInput={destinationAddressDetails.address} />
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
                            <Text style={styles.dataContainerActionButtonText}>Create A New Ride</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={joinTheRideHandle}
                        style={styles.dataContainerActionScreenButtonConatiner}
                        disabled={!selectedTripId}
                    >
                        <View style={[styles.dataContainerActionScreenButtonWrapper, !selectedTripId ? styles.disabledButton : {}]}>
                            <Text style={styles.dataContainerActionButtonText}>Join the ride</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={styles.dataSearchResultScreen}>
                    <View style={styles.dataSearchResultContainer}>
                        {isLoading ? (
                            <View style={styles.loaderContainer}>
                                <ActivityIndicator size="large" color="#0000ff" />
                            </View>) :
                            (<View style={styles.tripsFlatListContainer}>
                                <CarPoolList
                                    data={carTripData}
                                    onTripSelected={handleTripSelected}
                                />
                            </View>)}

                    </View>
                </View>
            </View>
        </View>
    )
}

export default TripsScreen