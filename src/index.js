import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import { cookies } from './actions/index';
import reducers from './reducers';
import Home from './containers/home';
import Authentication from './components/authentication';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const isUserLoggedIn = () => {
    if(cookies.get('authToken') && cookies.get('authToken') != "null") {
        return true;
    } else {
        NotificationManager.error("You must be logged in to do that.");
        return false;
    }
};

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <NotificationContainer />
                <Switch>
                    <Route path="/login" component={Authentication} />
                    <Route path="/" render={(props) => ( isUserLoggedIn() ? <Home /> : <Redirect to="/login" /> )} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('.container')
);
