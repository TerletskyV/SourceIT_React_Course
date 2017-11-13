import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { store } from './store/configureStore';
import TodoApp from './components/app';
import { appConnector } from './components/app/connector';

window.store = store;

const ConnectedApp = appConnector(TodoApp);

render(
<Provider store={store}>
    <ConnectedApp />
</Provider>,
document.getElementById('root'));
registerServiceWorker();
