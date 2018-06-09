import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.jsx';
import configureStore from './store/configureStore.jsx';
import { addExpense } from './actions/expenses.jsx';
import { setTextFilter } from './actions/filters.jsx';
import getVisibleExpenses from './selectors/expenses.jsx';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';


const store = configureStore();

console.log("test");

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
