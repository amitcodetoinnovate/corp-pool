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
    flatlistContainer:{
        flex:12,
        backgroundColor:'black'
    },
    searchInput: {
        fontFamily: FONT.regular,
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.xSmall,
    },
    welcomeMessageContainer: {
        flex:1,
        marginTop: "2%",
        flexDirection:'row',
        justifyContent:"flex-start",
        //backgroundColor: '#e9e9ec',
        backgroundColor: 'yellow',
        marginLeft: 4,
        //marginBottom: 5,
        paddingBottom: 10,
        borderRadius: SIZES.xSmall,
    },
    welcomeMessage: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
        marginTop: "2%",
        marginLeft: "2%"
    },
    tripCardContainer: {
        width: "98%",
        height: "100%",
        marginTop: "2%",
        //backgroundColor: '#e9e9ec',
        backgroundColor: 'red',
        marginLeft: 4,
        //marginBottom: 5,
        paddingBottom: 10,
        flex: 1,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 3,
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
    }
});

export default styles;
