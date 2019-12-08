import React from 'react';
import { createAppContainer } from 'react-navigation';
import SwitchNavigator from './navigation/SwitchNavigator';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers';

const AppContainer = createAppContainer(SwitchNavigator);

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, middleware);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    };
};