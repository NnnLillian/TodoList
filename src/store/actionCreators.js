import { CHANGE_INPUT_VALUE, UPDATE_TODO_LIST, DELETE_TODO_ITEM, INIT_LIST, GET_INTI_LIST } from './actionTypes'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddAction = () => ({
    type: UPDATE_TODO_LIST
})

export const deleteItem = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST,
    data
})

export const getInitListAction =()=>({
    type: GET_INTI_LIST
})
