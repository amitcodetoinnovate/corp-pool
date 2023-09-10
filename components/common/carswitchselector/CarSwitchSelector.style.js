import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        //backgroundColor: 'pink',
        paddingRight: 10,

    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 3,
        backgroundColor: '#06002B07',
        margin: 1,
        marginRight: 5,
        borderRadius: 10,
        height: 30,
    },
    selected: {
        backgroundColor: '#0066FFE5',
        fontSize: 20,
    },
});

export default styles;
