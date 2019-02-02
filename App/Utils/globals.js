import {Platform} from 'react-native'

export const baseUrl = 'https://api.github.com/'

export const colors = {
    lightestGrey: '#EEE'
}

export const constants = {
    statusBarHeight: (Platform.OS === 'ios') ? 20 : 0,
    offlineMessage: `Search failed. Check your internet connection`
}