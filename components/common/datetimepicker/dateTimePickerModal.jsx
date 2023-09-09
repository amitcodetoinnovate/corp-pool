import React, { useState } from 'react';
import { View, Modal, Platform, TouchableOpacity, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './dateTimePickerModal.style';
import { formatDate } from '../../../utils/dateFormatter';
export default function DateTimePickerModal({ onDateChange, selectedDate }) {
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || new Date();
        setShow(Platform.OS === 'ios');
        onDateChange(currentDate);
        if (Platform.OS !== 'ios') {
            setShow(false);
        }
    };

    const closeModal = () => {
        setShow(false);
    };

    return (
        <View style={styles.searchContainer}>
            <TouchableOpacity style={styles.searchBtn} onPress={() => setShow(true)}>
                <View style={styles.searchWrapper}>
                    <Text style={styles.searchInput}>
                        {selectedDate ? formatDate(selectedDate) : 'Select Date and Time'}
                    </Text>
                </View>
            </TouchableOpacity>
            {show && (
                <Modal transparent={true} visible={true}>
                    <TouchableOpacity style={styles.container} onPress={closeModal}>
                        <View style={{ alignSelf: 'center' }}>
                            <DateTimePicker
                                value={selectedDate || new Date()}
                                mode="datetime"
                                display="default"
                                onChange={onChange}
                            />
                        </View>
                    </TouchableOpacity>
                </Modal>
            )}
        </View>
    );
}
