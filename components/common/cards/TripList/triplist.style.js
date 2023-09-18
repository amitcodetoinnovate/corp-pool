// carpoollist.style.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 0,
        marginVertical: 4,
        marginHorizontal: 4,
        borderRadius: 8,
        borderWidth: 1,
        paddingBottom: 5,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
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
        paddingLeft: 25,
        alignItems: 'flex-start',
        paddingVertical: 5,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    riderName: {
        fontSize: 15,
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
