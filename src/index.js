import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import PetstoreService from './services/petstore-service';
import { PetstoreServiceProvider } from './components/petstore-service-context';

import store from './store';


const petstoreService = new PetstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <PetstoreServiceProvider value={petstoreService}>
                <Router>
                    <App />
                </Router>
            </PetstoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);
