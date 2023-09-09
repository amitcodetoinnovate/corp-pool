import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: 'white',
        flex: 1,

    },
    queryContainer: {
        width: "100%",
        height: "100%",
        marginTop: 15,
        //backgroundColor: 'red',
        flex: 1,
    },
    carAndDatePickerContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
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
