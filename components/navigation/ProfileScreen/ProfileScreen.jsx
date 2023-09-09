import React from 'react'
import { View, Text } from 'react-native'


const ProfileScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Profile')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Profile</Text>
        </View>
    )
}

export default ProfileScreen