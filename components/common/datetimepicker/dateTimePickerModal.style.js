import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 70,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateButton: {
        justifyContent: 'flex-end',
        height: '100%',

    },
    dateText: {
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: COLORS.white,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 2,
        marginBottom: 20,
        borderRadius: 8,
    },
    btnText: {
        color: 'blue',
    },
});
export default styles;