import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import GlobalStyles from './assets/styles/global.styles';
import { Provider } from 'react-redux';
import store from './shared/store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
            <GlobalStyles />
        </React.StrictMode>
    </Provider>
);
