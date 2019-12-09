import { CHANGE_INPUT_VALUE, UPDATE_TODO_LIST, DELETE_TODO_ITEM } from './actionTypes'

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