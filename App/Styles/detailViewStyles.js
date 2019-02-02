import {StyleSheet} from 'react-native'
import { constants } from "../Utils/globals";

export default StyleSheet.create({
    titleContainer: {
        paddingTop: constants.statusBarHeight,
        flexDirection: 'row'
    },
    title: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        fontWeight: '600'
    },
    subtitle:{
        fontSize: 14,
        color: 'darkgrey',
        textAlign: 'center',
        fontWeight: '400'
    },
    backButton: {
        flex: 1,
        justifyContent: 'center'
    },
    backButtonText: {
        fontSize: 13,
        color: 'darkgrey',
        fontWeight: '500',
        paddingHorizontal: 10
    }
})
