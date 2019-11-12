import * as React from 'react';
import { render } from 'react-dom';
import { enable } from './nosleep';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';
import { Provider as StoreProvider } from 'react-redux';
import './styles.css';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
  persistState() as any,
));

render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);

enable();
