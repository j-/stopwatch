import * as React from 'react';
import { render } from 'react-dom';
import { enable as enableNosleep, disable as disableNosleep } from './nosleep';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer, { isStopwatchTicking } from './store';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';
import { Provider as StoreProvider } from 'react-redux';
import registerServiceWorker from './register-service-worker';
import './update-vh';
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

if (isStopwatchTicking(store.getState())) {
  enableNosleep();
};

store.subscribe(() => {
  if (isStopwatchTicking(store.getState())) {
    enableNosleep();
  } else {
    disableNosleep();
  }
});

registerServiceWorker();
