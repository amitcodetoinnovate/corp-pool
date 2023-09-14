import React, { useState } from 'react';
import styles from './carpoollist.style';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { extractAddressName, extractRestOfAddress } from '../../../../utils/addressFormatter';
import { formatDate } from '../../../../utils/dateFormatter';

const CarPoolList = ({ data, onTripSelected }) => {
    const renderItem = ({ item }) => {
        const riders = [item.user];
        return (
            <TouchableOpacity
                onPress={() => {
                    onTripSelected(item.tripId)
                    console.log(item.tripDate);
                }}
                style={styles.itemContainer}
            >
                <View style={styles.adrressDateContainer}>
                    <View style={styles.addressContainer}>
                        <Text style={styles.title}>{extractAddressName(item.source.locationName)}</Text>
                    </View>
                    <View style={styles.dateContainer}>
                        <Text style={styles.date}>{formatDate(new Date(item.tripDate))}</Text>
                    </View>
                </View>
                <View style={styles.ridersContainer}>

                    <FlatList
                        data={riders}
                        renderItem={(user) => { <Text>{user.firstName}</Text> }}
                        keyExtractor={item => item.userId}
                    //style={styles.container}
                    />
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

export default CarPoolList;
