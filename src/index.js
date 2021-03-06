import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware ,compose} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import './reset.scss';
import reducer from './redux/reducer/reducer.jsx';
import { fetchContent } from './redux/actions/actions.jsx';

const middleware = [ thunk ];
if(process.env.NODE_ENV !== 'production'){
    middleware.push(createLogger());
}

const store = createStore(
    reducer,
    compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);


store.dispatch(fetchContent('movies'));
store.dispatch(fetchContent('fruit'));
store.dispatch(fetchContent('clothes'));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
 
