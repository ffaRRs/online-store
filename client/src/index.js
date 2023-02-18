import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DropMenuStore from './store/dropMenuStore';
import Store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = new Store();
const dropMenuStore = new DropMenuStore();

export const Context = createContext({
    store, 
    dropMenuStore,
})

root.render(
    <Context.Provider value={{store, dropMenuStore}}>
        <App />
    </Context.Provider>
);

