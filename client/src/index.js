import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = new Store();

export const Context = createContext({
    
})

root.render(
    <App />
);

