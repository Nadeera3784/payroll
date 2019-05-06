import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';
import Welcome from './components/Welcome';
import Layout from './hoc/layer/layer';

const store = createStore(
    reducers, 
    {
        auth: { authenticated: localStorage.getItem('token') },
    },
    composeWithDevTools(
        applyMiddleware(reduxThunk) 
    )
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path='/' exact component = {Welcome} />
                <Layout />
            </App>      
        </BrowserRouter>
    </Provider>,
     document.querySelector('#root')
)