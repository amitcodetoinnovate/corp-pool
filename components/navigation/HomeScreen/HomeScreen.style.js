import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: '#fff',

    },
    searchContainer: {
        flex: 1,
        margin: 0,
        padding: 0,
        borderColor: '#8f8f89',
        borderRadius: 10,
        borderWidth: 2,
        shadowRadius: 50,
        shadowColor: 'grey',
        elevation: 3,
    },
    dataContainer: {
        flex: 3,
        backgroundColor: 'white',
        borderTopWidth: 1,
        marginTop: 10,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.white,
        marginRight: SIZES.small,
        justifyContent: "left",
        alignItems: "left",
        borderRadius: SIZES.xSmall,
        height: "100%",
        width: "70%",
    },
    searchInput: {
        fontFamily: FONT.regular,
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.xSmall,
    },
    welcomeMessage: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
        marginTop: 2,
    },
});

export default styles;
