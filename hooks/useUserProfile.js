import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useUserProfile = () => {
    const [profileData, setProfileData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            setIsLoading(true);
            const token = await AsyncStorage.getItem('userToken');

            const response = await fetch('https://graph.microsoft.com/v1.0/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            let profileData = await response.json();

            const pictureResponse = await fetch('https://graph.microsoft.com/v1.0/me/photo/$value', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (pictureResponse.ok) {
                const blob = await pictureResponse.blob();
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                    const base64data = reader.result;
                    profileData = { ...profileData, profilePicContent: base64data };
                    setProfileData(profileData);
                };
            } else {
                setProfileData(profileData);
            }
            setIsLoading(false);
        };

        fetchProfile();
    }, []);

    return { profileData, isLoading };
};

export default useUserProfile;
