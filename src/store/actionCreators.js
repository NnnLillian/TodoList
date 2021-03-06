import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = (value) => ({
    type: actionTypes.CHANGE_INPUT_VALUE,
    value
})

export const getAddAction = () => ({
    type: actionTypes.UPDATE_TODO_LIST
})

export const deleteItem = (index) => ({
    type: actionTypes.DELETE_TODO_ITEM,
    index
})

export const changeItem = (index) => ({
    type: actionTypes.CHANGE_ITEM,
    index
})

export const changeFilter = (filter) => ({
    type: actionTypes.CHANGE_FILTER,
    filter
})

const initListAction = (data) => ({
    type: actionTypes.INIT_LIST,
    todoList: data.todolist,
})

export const getInitListAction = () => {
    return (dispatch) => {
        axios.get('/todolist.json').then(
            (res) => {
                dispatch(initListAction(res.data))
            }
        ).catch(
            () => {
                console.log("get headList.json error")
            }
        )
    }
}