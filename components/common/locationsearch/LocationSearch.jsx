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
            // const result = await axios.get(
            //     `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=YOUR_GOOGLE_API_KEY`
            // );
            // setPredictions(result.data.predictions);
            setPredictions(data.predictions);
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
        if (onLocationSelected) {
            onLocationSelected(prediction);
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
                        <Ionicons name={'close'} size={30} color={'black'} />

                    </TouchableOpacity>
                </View>
                <View style={styles.flatListContainer}>
                    <FlatList
                        data={predictions}
                        keyExtractor={(item) => item.id}
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


                    <Ionicons name={iconName} size={20} color={'black'} />
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
const data = {
    "predictions": [
        {
            "description": "San Francisco, CA, USA",
            "id": "some_id_1",
            "place_id": "some_place_id_1",
            "types": ["locality", "political", "geocode"]
        },
        {
            "description": "San Diego, CA, USA",
            "id": "some_id_2",
            "place_id": "some_place_id_2",
            "types": ["locality", "political", "geocode"]
        },
        {
            "description": "San Jose, CA, USA",
            "id": "some_id_3",
            "place_id": "some_place_id_3",
            "types": ["locality", "political", "geocode"]
        },
        {
            "description": "San Antonio, TX, USA",
            "id": "some_id_4",
            "place_id": "some_place_id_4",
            "types": ["locality", "political", "geocode"]
        },
        {
            "description": "Santa Monica, CA, USA",
            "id": "some_id_5",
            "place_id": "some_place_id_5",
            "types": ["locality", "political", "geocode"]
        },
        {
            "description": "Santa Clara, CA, USA",
            "id": "some_id_6",
            "place_id": "some_place_id_6",
            "types": ["locality", "political", "geocode"]
        },
        {
            "description": "Santa Barbara, CA, USA",
            "id": "some_id_7",
            "place_id": "some_place_id_7",
            "types": ["locality", "political", "geocode"]
        },
        {
            "description": "Santiago, Chile",
            "id": "some_id_8",
            "place_id": "some_place_id_8",
            "types": ["locality", "political", "geocode"]
        },
        {
            "description": "Santorini, Greece",
            "id": "some_id_9",
            "place_id": "some_place_id_9",
            "types": ["locality", "political", "geocode"]
        },
        {
            "description": "San Juan, Puerto Rico",
            "id": "some_id_10",
            "place_id": "some_place_id_10",
            "types": ["locality", "political", "geocode"]
        }
    ],
    "status": "OK"
};