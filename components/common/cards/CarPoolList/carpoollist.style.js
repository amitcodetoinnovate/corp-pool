import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 16,
        marginVertical: 2,
        marginHorizontal: 4,
        borderRadius: 8,
        backgroundColor: 'red',
    },
    adrressDateContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
    },
    addressContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'orange',
    },
    dateContainer: {
        flex: 1,
    },
    ridersContainer: {
        flex: 1,
        backgroundColor: 'green',
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    details: {
        fontSize: 16,
        marginTop: 4,
        fontSize: 10,
        fontWeight: 'bold',
    }
});
export default styles;