import axios from 'axios';
const BASE_URL = 'https://corppoolservice.azurewebsites.net/api/v1';

export const getMyTrips = async (tripId) => {
    if (tripId == null || tripId == undefined || tripId == '') tripId = '41fbd424-530b-4611-accb-fb7c269e7fa1';
    const endpoint = `${BASE_URL}/GetTripDetail?tripId=${tripId}`;
    try {
        const response = await axios.get(endpoint);
        return response.data;

    } catch (error) {
        console.error("There was an error sending the request", error);
        throw error;
    }
};