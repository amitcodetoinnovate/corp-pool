import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 70,
        height: 50,
        flexDirection: 'row',
        backgroundColor: COLORS.pink,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateButton: {
        justifyContent: 'flex-start',
        height: '55%',
        marginTop: 0,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        paddingHorizontal: 5,
        borderRadius: SIZES.xSmall,

    },
    dateText: {
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'auto',
        paddingBottom: 5,
        borderColor: 'gray',
        paddingTop: 5,
        paddingLeft: 3,
        paddingRight: 3,
        borderRadius: 8,
    },
    btnText: {
        color: 'blue',
    },
});
export default styles;