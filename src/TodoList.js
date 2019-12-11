import React, { Component } from 'react'

import TodoListUI from './TodoListUI'

import store from './store/index'
import { getInputChangeAction, getAddAction, deleteItem, getInitListAction } from './store/actionCreators'

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handStoreChange = this.handStoreChange.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handStoreChange);
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleButtonClick={this.handleButtonClick}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }

    componentDidMount() {
        const action = getInitListAction();
        store.dispatch(action);
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleButtonClick() {
        const action = getAddAction();
        store.dispatch(action);
    }

    handleItemDelete(index) {
        const action = deleteItem(index);
        store.dispatch(action);
    }

    handStoreChange() {
        this.setState(store.getState());
    }
}
export default TodoList;