import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    Modal,
} from 'react-native';
import axios from 'axios';
import styles from './locationSearch.style';

const LocationSearchComponent = ({ onLocationSelected, iconName }) => {
    const [input, setInput] = useState(null);
    const [locationText, setLocationText] = useState(null);
    const [predictions, setPredictions] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);

    const getPredictions = async (input) => {
        try {
            const result = await axios.get(
                `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=AIzaSyDKpTEQ9_RQU9L08gYNsWkvtcrW7m7PV5Q`
            );
            setPredictions(result.data.predictions);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInput = (text) => {
        setInput(text);
        if (text.length > 2) {
            getPredictions(text);
        }
    };

    const handlePredictionPress = (prediction) => {
        setLocationText(prediction.description);
        setInput('');
        setModalVisible(false);
        setPredictions([]);

        if (typeof onLocationSelected === 'function') {
            onLocationSelected(prediction);
        } else {
            console.error('onLocationSelected is not a function');
        }
    };


    return (
        <View>
            <Modal
                animationType="slide"
                style={{
                    flex: 1,
                    marginTop: -30,
                }}
                transparent={false}
                visible={isModalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.modalSearchContainer}>
                    <View style={styles.modalSearchWrapper}>
                        <TextInput
                            style={styles.modalSearchInput}
                            value={input}
                            onChangeText={handleInput}
                            placeholderTextColor={'black'}
                            placeholder="Search location"
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.modalCloseButton}
                        onPress={() => {
                            setModalVisible(false);
                        }}
                    >
                        <Ionicons name={'close'} size={25} color={'grey'} />

                    </TouchableOpacity>
                </View>
                <View style={styles.flatListContainer}>
                    <FlatList
                        data={predictions}
                        keyExtractor={(item) => item.place_id}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => handlePredictionPress(item)}
                            >
                                <Text style={styles.searchSuggestion}>{item.description}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </Modal>

            <View style={styles.searchContainer}>
                <TouchableOpacity
                    style={styles.searchWrapper}
                    onPress={() => {
                        setModalVisible(true)
                    }}>


                    <Ionicons name={iconName} size={18} color={'black'} />
                    <TextInput
                        pointerEvents="none"
                        style={styles.searchInput}
                        value={locationText}
                        editable={false}
                        placeholder="Enter your location"
                        placeholderTextColor={'black'}
                        placeholderStyle={styles.searchInputPlaceholder}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LocationSearchComponent;
