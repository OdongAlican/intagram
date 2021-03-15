import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ActionCableProvider } from 'react-actioncable-provider';
import ru from 'javascript-time-ago/locale/ru';
import thunk from 'redux-thunk';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import rootReducer from './reducers';
import { AUTHENTICATED } from './actions/index';
import Router from './components/Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API_WS_ROOT } from './constants';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

const user = localStorage.getItem('token');

if (user) {
  store.dispatch({
    type: AUTHENTICATED,
  });
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ActionCableProvider url={API_WS_ROOT}>
        <Router />
      </ActionCableProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
