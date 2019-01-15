import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/itemModal';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <AppNavbar />
        <ItemModal />
        <ShoppingList />
      </div>
      </Provider>
    );
  }
}

export default App;
