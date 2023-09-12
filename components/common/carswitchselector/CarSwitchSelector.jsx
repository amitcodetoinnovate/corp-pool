import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './CarSwitchSelector.style';

const CarSwitchSelector = ({ onSelect, selected }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.iconContainer, selected === 'offer' && styles.selected]}
                onPress={() => onSelect('offer')}
            >
                <Ionicons name="car" size={15} color={selected === 'offer' ? 'white' : 'black'} />
                <Text style={selected === 'offer' ? { color: 'white', fontSize: 11 } : { fontSize: 11 }}> Offer Ride</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.iconContainer, selected === 'need' && styles.selected]}
                onPress={() => onSelect('need')}
            >
                <Ionicons name="person" size={15} color={selected === 'need' ? 'white' : 'black'} />
                <Text style={selected === 'need' ? { color: 'white', fontSize: 11 } : { fontSize: 11 }}> Need Ride</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CarSwitchSelector;
