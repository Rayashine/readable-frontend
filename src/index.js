import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Route_distribute from './components/Route'
import {BrowserRouter} from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducers'

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route_distribute/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
