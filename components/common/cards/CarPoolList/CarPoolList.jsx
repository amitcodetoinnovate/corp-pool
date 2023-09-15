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
                    <Text style={styles.riderName}>{item.name}</Text>
                </View>
                <View style={styles.riderStatusContainer}>
                    {item.requestStatus === 'accepted' ? <Ionicons name="checkmark-circle" size={20} color="green" /> : <Ionicons name="ellipsis-horizontal-circle-outline" size={20} color="red" />}
                </View>
            </View>
        );
    };

    const renderItem = ({ item }) => {
        const riders = [
            {
                userId: '1',
                name: 'Amit Kumar Verma',
                requestStatus: 'accepted',
            },
            {
                userId: '2',
                name: 'Amit Kumar Verma',
                requestStatus: 'pending',
            },
            {
                userId: '3',
                name: 'Amit Kumar Verma',
                requestStatus: 'pending',
            },
        ];

        return (
            <TouchableOpacity
                onPress={() => {
                    if (item.tripId === selectedTripId) {
                        setSelectedTripId(null);
                        onTripSelected(null);

                    } else {
                        onTripSelected(item.tripId);
                        setSelectedTripId(item.tripId);
                    }
                }}
                style={[
                    styles.itemContainer,
                    { backgroundColor: item.tripId === selectedTripId ? '#0066FFE5' : '#4F4F54' }
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
                <FlatList
                    data={riders}
                    renderItem={renderRider}
                    keyExtractor={item => item.userId}
                />
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

export default CarPoolList;
