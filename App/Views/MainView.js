import React from 'react'
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native'
import mainViewStyles from '../Styles/mainViewStyles';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import { getUserRepositories } from '../RestApi/RestfulApis';
import RowItem from './RowItem';
import rowItemStyles from '../Styles/rowItemStyles';
import { constants } from '../Utils/globals';

export default class MainView extends React.Component{
    constructor(){
        super()

        this.state = {
            response: [],
            searchTerm: "",
            user: ""
        }

        this.fetchUserData = this.fetchUserData.bind(this)
        this.goToDetails = this.goToDetails.bind(this)
    }

    fetchUserData(term){

        this.setState({loading: true, user: term})


        getUserRepositories(term).then(response => {
            this.setState({loading: false})

            if(response.message){
                this.setState({errorMessage: response.message})
            }else{
                this.setState({response: response, errorMessage: null})
            }
        }).catch(e => {
            this.setState({errorMessage: constants.offlineMessage, loading: false})
        })
    }

    goToDetails(index){
        this.props.navigation.navigate("DetailScreen", {user: this.state.user, repo: this.state.response[index].name })
    }

    render(){
        return(
            <View style={mainViewStyles.mainContainer}>
                <View style={[mainViewStyles.titleContainer, {paddingTop: constants.statusBarHeight}]}>
                    <Text style={mainViewStyles.titleStyle}>Github Browser</Text>
                </View>

                <SearchBar
                    searchTerm={this.state.searchTerm}
                    onChangeText={(text) => this.setState({searchTerm: text})}
                    onPerformSearch={this.fetchUserData}
                />

                {(!this.state.loading) ? 
                    <ReposList
                        data={this.state.response}
                        errorMessage={this.state.errorMessage}
                        onRowPressed={this.goToDetails}
                    />:
                    <View>
                        <ActivityIndicator/>
                    </View>
                }
                

            </View>
        )
    }
}

class SearchBar extends React.Component{

    constructor(props){
        super(props)

    }
    render(){
        return (
            <View style={rowItemStyles.searchContainer}>
                <TextInput
                    style={[rowItemStyles.searchInput, {flex: 8}]}
                    value={this.props.searchTerm}
                    onChangeText={text => this.props.onChangeText(text)}
                    placeholder="Enter search term"
                    autoCapitalize='none'
                    onSubmitEditing={() => this.props.onPerformSearch(this.props.searchTerm)}
                    underlineColorAndroid='transparent'
                />
                <TouchableOpacity
                    style={[rowItemStyles.searchButton, {flex: 2}]}
                    onPress={() =>{ 
                        this.props.onPerformSearch(this.props.searchTerm)}
                    }
                >
                    <Text style={rowItemStyles.searchButtonText}>Search</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

class ReposList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            (!this.props.errorMessage) ? 
                <View style={{flex: 1}}>
                {(this.props.data.length > 0) ? 
                    <FlatList
                        scrollEnabled={true}
                        data={this.props.data}
                        renderItem={
                            ({item, index}) =>                               
                                <RowItem
                                    data={item}
                                    index={index}
                                    onRowPressed={this.props.onRowPressed}
                                />
                            
                        }
                        keyExtractor={(i, n) => n+''}
                    />:
                    <Text style={mainViewStyles.errorMessage}>Write a username and then tap on 'Search'</Text>
                }
                </View>:
                <Text style={mainViewStyles.errorMessage}>{this.props.errorMessage}</Text>
        )
    }
}