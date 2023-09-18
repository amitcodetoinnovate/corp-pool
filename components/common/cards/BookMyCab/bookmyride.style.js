import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'orange',
        marginHorizontal: 10,

    },
    BookingTypeContainer: {
        flexDirection: 'row',
        marginHorizontal: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2c2c2c',
        width: '90%',
        marginBottom: 10,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 8,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        //alignContent: 'flex-start',
        //backgroundColor: 'blue',
    },
    imageContainer: {
        flex: 'auto',
        flexDirection: 'row',
        borderRadius: 8,

    },
    rideFairContainer: {
        marginRight: 30,
    },
    rideText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    rideFair: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    logo: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        borderRadius: 4,
        borderWidth: 1,
        backgroundColor: COLORS.white,
    },
});
export default styles;