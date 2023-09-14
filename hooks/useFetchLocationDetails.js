import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchLocationDetails = (place_id) => {
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLocationDetails = async () => {
            if (!place_id) return;

            setIsLoading(true);
            const apiKey = 'AIzaSyDKpTEQ9_RQU9L08gYNsWkvtcrW7m7PV5Q'; // replace with your Google API key
            const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${place_id}&key=${apiKey}`;

            try {
                const response = await axios.get(url);
                const result = response.data.result;
                const location = {
                    latitude: result.geometry.location.lat,
                    longitude: result.geometry.location.lng,
                    description: result.name + ', ' + result.formatted_address,
                };
                setLocation(location);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchLocationDetails();
    }, [place_id]);

    return { location, isLoading, error };
};

export default useFetchLocationDetails;
