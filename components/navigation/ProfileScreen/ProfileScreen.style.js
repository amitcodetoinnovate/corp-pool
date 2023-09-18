import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    profileImageContainer: {
        backgroundColor: 'black',
        paddingBottom: 20,
    },
    coverImage: {
        height: 200,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'white'
    },
    content: {
        marginTop: 20,
        padding: 20,
    },
    infoContainer: {
        marginTop: 20,
    },
    infoLabel: {
        fontWeight: 'bold',
    },
    infoValue: {
        marginTop: 5,
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