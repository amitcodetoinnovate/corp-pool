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

export const searchTrips = async (startAddressDetails, destinationAddressDetails, tripDate, rideType, user) => {
    const endpoint = `${BASE_URL}/GetAllTrip`;
    const body = {
        "TripId": emptyGUID,
        "Source": {
            "Longitude": startAddressDetails.longitude,
            "Latitude": startAddressDetails.latitude,
            "LocationName": startAddressDetails.address,
        },
        "Destination": {
            "Longitude": destinationAddressDetails.longitude,
            "Latitude": destinationAddressDetails.latitude,
            "LocationName": destinationAddressDetails.address,
        },
        "TripDate": tripDate,
        "RideType": rideType == 'offer' ? 0 : 1,
        "User": user,
        "TravellerCount": 1
    };
    try {
        //console.log(JSON.stringify(body));
        const response = await axios.post(endpoint, body);
        //console.log(JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        console.error("There was an error sending the request", error);
        throw error;
    }
};
export const joinTheRide = async (requestedTripId, user, rideType) => {
    const endpoint = `${BASE_URL}/JoinTrip`;
    const body = {
        "DestinationTripId": requestedTripId,
        "TripUser": user,
        "RideType": rideType == 'offer' ? 0 : 1,
    };
    try {
        console.log(JSON.stringify(body));
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
            "Longitude": startAddressDetails.longitude,
            "Latitude": startAddressDetails.latitude,
            "LocationName": startAddressDetails.address,
        },
        "Destination": {
            "Longitude": destinationAddressDetails.longitude,
            "Latitude": destinationAddressDetails.latitude,
            "LocationName": destinationAddressDetails.address,
        },
        "TripDate": tripDate,
        "RideType": rideType,
        "User": User,
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