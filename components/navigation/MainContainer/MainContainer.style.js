import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";
import { colors } from "react-native-elements";

const styles = StyleSheet.create({
    container: {
        margin: 0,
        backgroundColor: 'black',
        padding: 0,
        flex: 1,
        flexDirection: 'row',
        height: '100%',
    },
    userName: {
        fontFamily: FONT.bold,
        fontSize: SIZES.medium,
        color: COLORS.secondary,
    },
    welcomeMessage: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
        marginTop: 2,
    },
    searchContainer: {
        justifyContent: "left",
        alignItems: "left",
        flexDirection: "column",
        marginTop: SIZES.small,
        height: 30,
        width: `100%`,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.white,
        marginRight: SIZES.small,
        justifyContent: "left",
        alignItems: "left",
        borderRadius: SIZES.xSmall,
        height: "100%",
        width: "50%",
    },
    searchInput: {
        fontFamily: FONT.regular,
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.xSmall,
    },
    searchBtn: {
        width: 30,
        height: "65%",
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.xxLarge,
        justifyContent: "center",
        alignItems: "center",
    },
    searchBtnImage: {
        width: "100%",
        height: "100%",
        tintColor: COLORS.white,
    },
    tabsContainer: {
        width: "100%",
        marginTop: SIZES.medium,
    },
    tab: (activeJobType, item) => ({
        paddingVertical: SIZES.small / 2,
        paddingHorizontal: SIZES.small,
        borderRadius: SIZES.medium,
        borderWidth: 1,
        borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    }),
    tabText: (activeJobType, item) => ({
        fontFamily: FONT.medium,
        color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    }),
    tabBarStyle: {
        display: "flex",
        backgroundColor: '#c3e5ec',

    }
});

export default styles;
