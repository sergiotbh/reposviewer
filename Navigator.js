import {createStackNavigator} from 'react-navigation'
import MainView from './App/Views/MainView';
import DetailView from './App/Views/DetailView'

export default createStackNavigator({
    Home: {
        screen: MainView,
    },
    DetailScreen: {
        screen: DetailView,
        navigationOptions: {
            headerBackTitle: 'some label'
        }
    }
    },
    {
        defaultNavigationOptions: {
            header: null,
        }
    }
);