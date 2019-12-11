import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList'
import store from './store/index'
import { Provider } from 'react-redux'

const APP = (
    <Provider store={store}>
        <TodoList />
    </Provider>
)

ReactDOM.render(APP, document.getElementById('root'));
