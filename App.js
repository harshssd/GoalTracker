import React from 'react';
import Login from './screens/Login';
import { createAppContainer } from 'react-navigation';
import SwitchNavigator from './navigation/SwitchNavigator'

const AppContainer = createAppContainer(SwitchNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer />
    }
};