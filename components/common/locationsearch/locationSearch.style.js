import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
    searchContainer: {
        marginTop: SIZES.large,
        alignItems: 'flex-end',
        height: 30,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.white,
        marginRight: SIZES.large,
        borderRadius: SIZES.xSmall,
        width: '90%',
        flexDirection: 'row-reverse',
    },
    searchInput: {
        fontFamily: FONT.bold,
        width: '100%',
        fontSize: SIZES.medium,
        height: '100%',
        paddingHorizontal: SIZES.xSmall,
        margin: 0,
    },
    overlay: {
        position: 'relative',
        top: 20,
        opacity: 5,
        left: 0,
        right: 10,
        zIndex: 10,
        alignItems: 'center',
        width: '100%',
    },
    searchList: {
        borderColor: 'black',

    },
    searchListText: {
        marginBottom: 1.5,
        fontFamily: FONT.regular,
        paddingHorizontal: SIZES.xSmall,
        paddingVertical: 1,
        borderWidth: 1,
        borderRadius: 2,

    },
    tabText: (activeJobType, item) => ({
        fontFamily: FONT.medium,
        color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    }),
});

export default styles;
