import React, { useState } from 'react';
import styles from './triplist.style';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { extractAddressName, extractRestOfAddress } from '../../../../utils/addressFormatter';
import { formatDate } from '../../../../utils/dateFormatter';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TripList = ({ data, onTripSelected }) => {
    const [selectedTripId, setSelectedTripId] = useState(null);

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    onTripSelected(item.tripId);
                    setSelectedTripId(item.tripId);
                    console.log(item.tripDate);
                }}
                style={[
                    styles.itemContainer,
                    { backgroundColor: item.tripId === selectedTripId ? '#000AFF' : '#467aff' }
                ]}
            >
                <View style={styles.adrressDateContainer}>
                    <View style={styles.addressContainer}>
                        <Text style={styles.title}>{extractAddressName(item.destination.locationName)}</Text>
                    </View>
                    <View style={styles.dateContainer}>
                        <Text style={styles.date}>{formatDate(new Date(item.tripDate))}</Text>
                    </View>
                </View>
                <View style={styles.ridersContainer}>
                    <View style={styles.riderNameContainer}>
                        <Text style={styles.riderName}>{item.user.firstName + " " + item.user.lastName}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.tripId}
            style={styles.container}
        />
    );
};

export default TripList;
