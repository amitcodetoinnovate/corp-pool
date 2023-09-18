// CarPoolList.js
import React, { useState } from 'react';
import styles from './carpoollist.style';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { extractAddressName, extractRestOfAddress } from '../../../../utils/addressFormatter';
import { formatDate } from '../../../../utils/dateFormatter';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CarPoolList = ({ data, onTripSelected }) => {
    const [selectedTripId, setSelectedTripId] = useState(null);

    const renderRider = ({ item }) => {
        return (
            <View style={styles.ridersContainer}>
                <View style={styles.riderNameContainer}>
                    <Text style={styles.riderName}>{item.firstName + " " + item.lastName}</Text>
                </View>
                <View style={styles.riderStatusContainer}>
                    {item.requestState === 1 ? <Ionicons name="checkmark-circle" size={20} color="green" /> : <Ionicons name="ellipsis-horizontal-circle-outline" size={20} color="red" />}
                </View>
            </View>
        );
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    if (item.trip.tripId === selectedTripId) {
                        setSelectedTripId(null);
                        onTripSelected(null);

                    } else {
                        onTripSelected(item.trip.tripId);
                        setSelectedTripId(item.trip.tripId);
                    }
                }}
                style={[
                    styles.itemContainer,
                    { backgroundColor: item.trip.tripId === selectedTripId ? '#0066FFE5' : '#4F4F54' }
                ]}
            >
                <View style={styles.adrressDateContainer}>
                    <View style={styles.addressContainer}>
                        <Text style={styles.title}>{extractAddressName(item.trip.destination.locationName)}</Text>
                    </View>
                    <View style={styles.dateContainer}>
                        <Text style={styles.date}>{formatDate(new Date(item.trip.tripDate))}</Text>
                    </View>
                </View>
                <FlatList
                    data={item.tripUsers}
                    renderItem={renderRider}
                    keyExtractor={(user, index) => user.userId + index.toString()}
                />
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.trip.tripId}
            style={styles.container}
        />
    );
};

export default CarPoolList;
