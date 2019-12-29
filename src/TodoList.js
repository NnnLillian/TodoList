import React, { Component } from 'react'

import TodoListUI from './TodoListUI'
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';

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
        this.props.getInitList()
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.get('inputValue'),
        list: state.get('list'),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getInitList(){
            dispatch(actionCreators.getInitListAction());
        },
        handleInputChange(e) {
            dispatch(actionCreators.getInputChangeAction(e.target.value));
        },

        handleButtonClick() {
            dispatch(actionCreators.getAddAction());
        },

        handleItemDelete(index) {
            dispatch(actionCreators.deleteItem(index));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);