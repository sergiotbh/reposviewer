import {StyleSheet, Platform} from 'react-native'

export default StyleSheet.create({
    rowItemContainer: {
        backgroundColor: 'white',
        borderRadius: 3,
        marginVertical: 10,
        marginHorizontal: 10,
        shadowColor: "#222",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    rowTitle: {
        fontSize: 18,
    },
    rowDescription: {
        fontSize: 14, 
    },
    rowLanguage: {
        fontSize: 12,
        marginTop: 10,
        backgroundColor: 'red',
        alignSelf: 'baseline',
        padding: 3,
        borderRadius: 3,
        overflow: 'hidden',
        color: 'white'
    },
    titleContainer:{
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    detailContainer:{
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    searchButton:{
        backgroundColor: 'cornflowerblue',
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 5,
        paddingHorizontal: 5,
    },
    searchInput:{
        color: '#292929',
        fontSize: 15, 
        paddingLeft: 10
    },
    searchContainer:{
        flexDirection: 'row',
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 30,
    },
    searchButtonText: {
        color: 'white',
        alignSelf: 'center',
        flex: (Platform.OS == 'ios') ? null : 1,
        textAlignVertical: 'center'
    }
})