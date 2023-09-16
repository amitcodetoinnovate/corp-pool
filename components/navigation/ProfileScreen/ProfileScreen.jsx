import React from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import useUserProfile from '../../../hooks/useUserProfile';
import styles from './ProfileScreen.style';

const ProfileScreen = () => {
    const { userName, profilePicContent, profileData, isLoading } = useUserProfile();  // Use the custom hook here

    return (
        <View style={styles.container}>
            {isLoading ? (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>) : (

                <>
                    <View style={styles.profileImageContainer}>
                        <View style={styles.avatarContainer}>
                            <Image
                                source={{ uri: profilePicContent ? profilePicContent : 'https://bootdey.com/img/Content/avatar/avatar6.png' }}
                                style={styles.avatar}
                            />
                            <Text style={[styles.name, styles.textWithShadow]}>{profileData.givenName}</Text>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoLabel}>Email:</Text>
                            <Text style={styles.infoValue}>{profileData.mail}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoLabel}>Location:</Text>
                            <Text style={styles.infoValue}>{profileData.officeLocation}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoLabel}>Job Title:</Text>
                            <Text style={styles.infoValue}>{profileData.jobTitle}</Text>
                        </View>
                    </View>
                </>)}
        </View>
    );
};

export default ProfileScreen