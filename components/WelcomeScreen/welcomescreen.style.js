import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    logoContainer: {
        paddingTop: 100,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 0,
        backgroundColor: '#FFFFFF', // or any color you want
    },
    logo: {
        width: 300,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 20
    },
    animatedText: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 0,
        backgroundColor: '#FFFFFF', // or any color you want
        marginBottom: 200,
    }
});

export default styles;