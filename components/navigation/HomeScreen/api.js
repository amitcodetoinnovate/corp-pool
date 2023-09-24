import axios from 'axios';
const BASE_URL = 'https://corppoolservice.azurewebsites.net/api/v1';

export const fetchMyTrips = async (userId) => {
    const endpoint = `${BASE_URL}/GetMyTrip?userId=${userId}`;

    try {
        const response = await axios.get(endpoint);
        return response.data;
    } catch (error) {
        console.error("There was an error sending the request", error);
        throw error;
    }
};

export const updateMyTrip = async (approvalId, state, userId) => {
    const endpoint = `${BASE_URL}/ApproveRejectTrip`;
    const body = {
        "ApprovalId": approvalId,
        "RequestState": state,
        "UserId": userId
    };
    try {
        const response = await axios.post(endpoint, body);
        return response.data;
    } catch (error) {
        console.error("There was an error sending the request", error);
        throw error;
    }
};