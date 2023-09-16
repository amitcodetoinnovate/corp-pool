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
        flex: 4,
        //backgroundColor: 'black'
    },
    tripCardContainer: {
        width: "98%",
        height: "100%",
        marginTop: "1%",
        backgroundColor: '#4F4F54',
        marginLeft: 4,
        //marginBottom: 5,
        paddingBottom: 10,
        flex: 1,
        //shadowColor: '#171717',
        //shadowOffset: { width: -2, height: 4 },
        //shadowOpacity: 1,
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
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    addressContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    dateContainer: {
        flex: 1,
        alignSelf: 'center',
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
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    riderName: {
        fontSize: 12,
        color: 'black',
        fontWeight: 'bold',
    },
    date: {
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default styles;
