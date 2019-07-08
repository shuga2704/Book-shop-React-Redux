import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import './App.css';
import { Provider } from 'react-redux';

import App from './containers/App';

import createStore from './store';

const store = createStore();

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root'),
);
