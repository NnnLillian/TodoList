import React, { Component } from 'react'

import TodoListUI from './TodoListUI'
import { connect } from 'react-redux';
import store from './store/index'
import { getInputChangeAction, getAddAction, deleteItem, getInitListAction } from './store/actionCreators'

class TodoList extends Component {

    render() {

        const { inputValue, list, handleButtonClick, handleInputChange, handleItemDelete } = this.props

        return (
            <TodoListUI
                inputValue={inputValue}
                list={list}
                handleInputChange={handleInputChange}
                handleButtonClick={handleButtonClick}
                handleItemDelete={handleItemDelete}
            />
        )
    }

    componentDidMount() {
        const action = getInitListAction();
        store.dispatch(action);
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            const action = getInputChangeAction(e.target.value);
            dispatch(action);
        },

        handleButtonClick() {
            const action = getAddAction();
            dispatch(action);
        },

        handleItemDelete(index) {
            const action = deleteItem(index);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);