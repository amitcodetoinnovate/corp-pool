// api.js
import axios from 'axios';
import { formatDateToUTC } from '../../../utils/dateFormatter';
const BASE_URL = 'https://corppoolservice.azurewebsites.net/api/v1';
const emptyGUID = '00000000-0000-0000-0000-000000000000';

export const getMyTrips = async (startAddressDetails, destinationAddressDetails, tripDate, rideType) => {
    const endpoint = `${BASE_URL}/SearchTrip`;
    const body = {
        "TripId": emptyGUID,
        "Source": {
            "Longitude": "0",// startAddressDetails.latitude,
            "Latitude": "0",// startAddressDetails.latitude,
            "LocationName": "0",// startAddressDetails.latitude,
        },
        "Destination": {
            "Longitude": "0",// startAddressDetails.latitude,
            "Latitude": "0",// startAddressDetails.latitude,
            "LocationName": "0",// startAddressDetails.latitude,
        },
        "TripDate": tripDate,
        "RideType": rideType,
        "User": null,
        "TravellerCount": 1
    };
    try {
        const response = await axios.post(endpoint, body);
        return response.data;
    } catch (error) {
        console.error("There was an error sending the request", error);
        throw error;
    }
};

export const searchTrips = async (startAddressDetails, destinationAddressDetails, tripDate, rideType) => {
    const endpoint = `${BASE_URL}/SearchTrip`;
    const body = {
        "TripId": emptyGUID,
        "Source": {
            "Longitude": "0",// startAddressDetails.latitude,
            "Latitude": "0",// startAddressDetails.latitude,
            "LocationName": "0",// startAddressDetails.latitude,
        },
        "Destination": {
            "Longitude": "0",// startAddressDetails.latitude,
            "Latitude": "0",// startAddressDetails.latitude,
            "LocationName": "0",// startAddressDetails.latitude,
        },
        "TripDate": tripDate,
        "RideType": rideType,
        "User": null,
        "TravellerCount": 1
    };
    try {
        const response = await axios.post(endpoint, body);
        return response.data;
    } catch (error) {
        console.error("There was an error sending the request", error);
        throw error;
    }
};
export const createTrips = async (startAddressDetails, destinationAddressDetails, tripDate, rideType, User) => {
    const endpoint = `${BASE_URL}/CreateTrip`;
    const body = {
        "TripId": emptyGUID,
        "Source": {
            "Longitude": startAddressDetails.latitude,
            "Latitude": startAddressDetails.latitude,
            "LocationName": startAddressDetails.address,
        },
        "Destination": {
            "Longitude": destinationAddressDetails.latitude,
            "Latitude": destinationAddressDetails.latitude,
            "LocationName": destinationAddressDetails.address,
        },
        //"TripDate": formatDateToUTC(tripDate),
        "TripDate": tripDate,
        "RideType": rideType,
        "User": User,
        "TravellerCount": 1
    };
    try {
        console.log(body);
        const response = await axios.post(endpoint, body);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("There was an error sending the request", error);
        throw error;
    }
};