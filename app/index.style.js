import { StyleSheet } from "react-native";
import { SIZES } from "../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    header: {
        marginBottom: 20
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    body: {
        width: '80%'
    },
    azureButton: {
        backgroundColor: 'black',
        color: 'black',
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    logo: {
        width: 20,
        height: 20,
        resizeMode: 'cover',
        borderRadius: 0
    },
});
export default styles;