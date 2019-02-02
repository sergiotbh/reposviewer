import {StyleSheet} from 'react-native'
import { colors } from '../Utils/globals';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.lightestGrey,
    },
    titleContainer: {
        backgroundColor: 'white',
        shadowColor: "#222",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    titleStyle: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        fontWeight: '600',
        paddingVertical: 15
    },
    errorMessage:{
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingHorizontal: 30
    }
})