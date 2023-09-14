import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import styles from './dateTimePickerModal.style';
import { formatDate } from '../../../utils/dateFormatter';

const DateTimePickerWithModal = ({ onDateChange }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [datePickerVisible, setDatePickerVisible] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };

    const handleConfirm = (date) => {
        setSelectedDate(date);
        hideDatePicker();

        if (onDateChange) {
            onDateChange(date);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.dateButton} onPress={showDatePicker}>
                <Text style={styles.dateText}>
                    <Ionicons name="time-outline" size={15} color="black" />
                    {selectedDate ? formatDate(selectedDate) : 'Start now'}
                </Text>
            </TouchableOpacity>
            <DateTimePickerModal
                date={selectedDate}
                isVisible={datePickerVisible}
                mode="datetime"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    );
};

export default DateTimePickerWithModal;
