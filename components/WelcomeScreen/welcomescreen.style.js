import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.xSmall / 1.25,
        backgroundColor: '#FFFFFF', // or any color you want
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: SIZES.large / 0.25
    },
});

export default styles;