import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flex: 1,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        backgroundColor: 'white',
        shadowRadius: 3,
    },
    queryContainer: {
        width: "98%",
        height: "100%",
        marginTop: 10,
        paddingTop: 0,
        backgroundColor: '#e9e9ec',
        //backgroundColor: 'yellow',
        marginLeft: 4,
        marginBottom: 5,
        paddingBottom: 10,
        flex: 1,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius: SIZES.xSmall,
    },
    carAndDatePickerContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    dataContainer: {
        flex: 3,
        flexDirection: "column",
        marginTop: 1,
        padding: 0,
        //backgroundColor: 'pink',

    },
    dataContainerActionScreen: {
        flex: 1,
        flexDirection: "row",
        // shadowColor: '#171717',
        // shadowOffset: { width: -2, height: 4 },
        // shadowOpacity: 0.2,
        // backgroundColor: 'white',
        // shadowRadius: 3,
    },
    dataContainerActionScreenButtonConatiner: {
        flex: 1,
        //borderBlockColor: 'black',
        //borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    dataContainerActionScreenButtonWrapper: {
        //width: "50%",
        backgroundColor: '#0066FFE5',
        borderRadius: 15,
        marginLeft: 30,

    },
    dataContainerActionButtonText: {
        //backgroundColor: 'white',
        paddingTop: 4,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 4,
        fontFamily: FONT.bold,
        fontSize: 18,
        color: 'white',


    },
    disabledButton: {
        backgroundColor: 'grey',
    },
    dataSearchResultScreen: {
        flex: 10,
        //backgroundColor: 'orange',

    },
    dataSearchResultSwitchContainer: {
        flex: 1.2,
        marginTop: 4,
        marginBottom: 0,
        paddingBottom: 2,
        backgroundColor: 'white',
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",

    },
    dataSearchResultSwitchContainerStyle: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",

    },
    trackBar: {
        height: 40,
        width: 90,
        activeBackgroundColor: COLORS.gray2,
        inActiveBackgroundColor: COLORS.gray2,
        borderWidth: 1,
        borderActiveColor: "black",
        borderInActiveColor: "black",
    },
    thumbButtonStyle: {
        width: 42,
        height: 42,
        activeBackgroundColor: '#0066FFE5',
        inActiveBackgroundColor: '#0066FFE5',
        activeColor: 'black',
        inActiveColor: 'black'
    },
    dataSearchResultContainer: {
        flex: 12,
        //backgroundColor: 'red',
        marginLeft: 3,
        marginRight: 3,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        backgroundColor: 'white',
        shadowRadius: 3,
    },
    tripsFlatListContainer: {
        flex: 1,
        backgroundColor: 'white',
        margin: 3,
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
    locationAndSearchContainer: {
        flex: 1,
        marginTop: -30,
        flexDirection: "row",
        justifyContent: "space-between",
        justifyContent: 'flex-start',
        marginLeft: 8,
        marginRight: 8,
    },
    locationContainer: {
        flex: 10,
        backgroundColor: 'pink',
        justifyContent: 'flex-start',
        marginBottom: 10,
    },
    searchButtonContainer: {
        flex: 1,
        alignSelf: 'center',
        width: '100%',
        marginTop: 10,
        marginBottom: 0,
        borderRadius: SIZES.xSmall,

    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.7)',
        opacity: 0.7,
    }
});

export default styles;
