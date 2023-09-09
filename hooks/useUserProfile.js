import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useUserProfile = () => {
    const [userName, setUserName] = useState('');
    const [profilePicContent, setProfilePicContent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            setIsLoading(true);
            const token = await AsyncStorage.getItem('userToken');
            console.log(token);

            // Fetch user's basic profile information
            const response = await fetch('https://graph.microsoft.com/v1.0/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const profileData = await response.json();
            console.log(profileData);
            setUserName(profileData.givenName || 'Anonymous');

            // Fetch user's profile picture
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
                    setProfilePicContent(base64data);
                };
            }
            setIsLoading(false);
        };

        fetchProfile();
    }, []);

    return { userName, profilePicContent, isLoading };
};

export default useUserProfile;
