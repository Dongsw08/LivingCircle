import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//const store = createStore();

ReactDOM.render(
    <Provider>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
 
