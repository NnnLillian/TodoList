import React, { Component, Fragment } from 'react'

import TodoListUI from './TodoListUI'
import Footer from './Footer';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';

class TodoList extends Component {

    render() {

        const { inputValue, list, filter, handleButtonClick, handleInputChange, handleItemDelete, handleCompleteChange, setVisibilityFilter } = this.props
        return (
            <Fragment>
                <TodoListUI
                    inputValue={inputValue}
                    list={this.GetVisibleList(list,filter)}
                    handleInputChange={handleInputChange}
                    handleButtonClick={handleButtonClick}
                    handleItemDelete={handleItemDelete}
                    handleCompleteChange={handleCompleteChange}
                    handleItemChange={handleCompleteChange}
                />
                <Footer
                    setVisibilityFilter={setVisibilityFilter}
                    filter={filter}
                />
            </Fragment>
        )
    }

    componentDidMount() {
        this.props.getInitList()
    }

    GetVisibleList = (list, filter) => {
        return list.filter((item) => {
            if (filter === "active") {
                return !item.complete;
            } else if (filter === "complete") {
                return item.complete;
            } else {
                return true;
            }
        })
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.get('inputValue'),
        list: state.get('list'),
        filter: state.get('filter'),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getInitList() {
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
        },
        handleCompleteChange(index) {
            dispatch(actionCreators.changeItem(index));
        },
        setVisibilityFilter(filter) {
            dispatch(actionCreators.changeFilter(filter));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);