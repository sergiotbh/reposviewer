import React from 'react'
import {View, ActivityIndicator,Text, TouchableOpacity} from 'react-native'
import { WebView } from 'react-native-gesture-handler';
import { getUserRepositories, getReadMe } from '../RestApi/RestfulApis';
import detailViewStyles from '../Styles/detailViewStyles';
import { constants } from '../Utils/globals';

export default class DetailView extends React.Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    componentWillMount(){
        this.fetchReadMeData()
    }

    fetchReadMeData(){

        this.setState({loading: true})

        getReadMe(this.props.navigation.state.params.user, this.props.navigation.state.params.repo).then(response => {
            this.setState({loading: false})
            if(response.message){
                this.setState({errorMessage: response.message})
            }else{
                this.setState({response: response, errorMessage: null})
            }
        })
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <View style={detailViewStyles.titleContainer}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                        style={detailViewStyles.backButton}
                    >
                        <Text style={detailViewStyles.backButtonText}>Back</Text>
                    </TouchableOpacity>
                    <View style={{flex: 3}}>
                        <Text style={detailViewStyles.title}>{this.props.navigation.state.params.repo}</Text>
                        <Text style={detailViewStyles.subtitle}>{`By ${this.props.navigation.state.params.user}`}</Text>
                    </View>
                    <View style={{flex: 1}}/>
                </View>
                
                {(this.state.response) ? 
                    <ReadMeViewer
                        url={this.state.response.html_url}
                    />:
                    <ActivityIndicator style={{flex: 1}}/>
                }
            </View>
        )
    }
}

class ReadMeViewer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={{flex: 1}}>
                <WebView
                    source={{uri: this.props.url}}
                    style={{marginTop: constants.statusBarHeight}}
                />
            </View>
        )
    }
}