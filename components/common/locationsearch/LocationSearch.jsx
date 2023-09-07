import React, { useState } from 'react';
import cancel from '../../../assets/icons/cancel.png'
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native';
import axios from 'axios';
import styles from './locationSearch.style';

const LocationSearchComponent = ({ locationText, onLocationSelected }) => {
    const [input, setInput] = useState('');
    const [predictions, setPredictions] = useState([]);
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

    const getPredictions = async (input) => {
        try {
            // const result = await axios.get(
            //     `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=j`
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
        setInput(prediction.description);
        setPredictions([]);
        if (onLocationSelected) {
            onLocationSelected(prediction);
        }
    };

    const clearInput = () => {
        setInput('');
        setPredictions([]);
    };

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>{locationText}</Text>
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value={input}
                        onChangeText={handleInput}
                        placeholder={locationText}
                    />
                </View>
                <TouchableOpacity style={styles.searchBtn} onPress={clearInput}>
                    <Image
                        source={cancel}
                        resizeMode='contain'
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>


            <View style={styles.tabsContainer}>
                <FlatList
                    data={predictions}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.tabText}
                            onPress={() => handlePredictionPress(item)}>
                            <Text>{item.description}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
};

export default LocationSearchComponent;


