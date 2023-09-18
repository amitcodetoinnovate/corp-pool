import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'colum',
        shadowColor: 'pink',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        backgroundColor: 'white',
        shadowRadius: 3,
    },
    welcomeMessageContainer: {
        flex:1,
        marginTop: "2%",
        flexDirection:'row',
        justifyContent:"flex-start",
        backgroundColor: '#e9e9ec',
        //backgroundColor: 'yellow',
        marginLeft: 4,
        //marginBottom: 5,
        paddingBottom: 5,
        borderRadius: SIZES.xSmall,
    },
    welcomeMessage: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
        marginTop: "2%",
        marginLeft: "2%"
    },
    flatlistContainer: {
        flex: 10,
        //backgroundColor: 'black'
    },
    tripCardContainer: {
        width: "98%",
        height: "100%",
        marginTop: "1%",
        backgroundColor: 'black',
        marginLeft: 4,
        //marginBottom: 5,
        paddingBottom: 10,
        flex: 1,
        //shadowColor: '#171717',
        //shadowOffset: { width: -2, height: 4 },
        //shadowOpacity: 1,
        //shadowRadius: 3,
        //shadowColor: '#171717',
        //shadowOffset: { width: -2, height: 4 },
        //shadowOpacity: 0.2,
        //shadowRadius: 3,
        borderRadius: SIZES.xSmall,
    },
    tripHeader: {
        fontFamily: FONT.bold,
        fontSize: SIZES.medium,
        color: COLORS.primary,
        marginTop: "1%",
        marginLeft: "1%",
    },
    tripRowStyle: {
        backgroundColor: COLORS.red,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginTop: "1%",
    },
    tripColumnStyle: {
        backgroundColor: COLORS.yellow,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        height: "100%",
        marginLeft: "6%",
    },
    adrressDateContainer: {
        flex: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 0,
        backgroundColor: '#0066FFE5',
        backgroundColor: 'black',
        paddingVertical: 20,
        marginHorizontal: 10,
        borderRadius: 8,
        //shadowColor: '#171717',
        //shadowOffset: { width: -2, height: 4 },
        //shadowOpacity: 0.2,
        //shadowRadius: 3,
    },
    dateContainerAndLogoContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    logoContainer: {
        flex: 'auto',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatListContainer: {
        flex: 'auto',
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10,
        backgroundColor: 'white',
    },
    addressContainer: {
        flex: 'auto',
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingRight: 5,
        width: '20%',

    },
    dateContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignContent: 'flex-end',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    ridersContainer: {
        flex: 1,
        backgroundColor: '#F5F7FF',
        flexDirection: 'row',
        marginVertical: 2,
        marginLeft: 4,
        marginRight: 4,
        paddingTop: 5,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 8,
    },
    riderNameContainer: {
        flex: 1,
    },
    riderStatusContainer: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    addressTextFormat: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 10,
    },
    riderName: {
        fontSize: 12,
        color: 'black',
        fontWeight: 'bold',
    },
    date: {
        fontSize: 10,
        color: 'white',
        fontWeight: 'bold',
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
