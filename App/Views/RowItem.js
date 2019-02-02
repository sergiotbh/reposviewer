import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import mainViewStyles from '../Styles/mainViewStyles';
import rowItemStyles from '../Styles/rowItemStyles';

export default class RowItem extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <TouchableOpacity
                onPress={() => {
                    this.props.onRowPressed(this.props.index)}
                }
                style={[rowItemStyles.rowItemContainer]} 
            >
                <View style={rowItemStyles.titleContainer}>
                    <Text style={rowItemStyles.rowTitle}>{this.props.data.name}</Text>
                </View>
                <View style={rowItemStyles.detailContainer}>
                    <Text style={rowItemStyles.rowDescription}>{this.props.data.description}</Text>
                    {(this.props.data.language) ? <Text style={[rowItemStyles.rowLanguage, {backgroundColor: 'skyblue'}]}>{this.props.data.language}</Text> : null}
                </View>
            </TouchableOpacity>
        )
    }
}