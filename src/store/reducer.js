import { CHANGE_INPUT_VALUE, UPDATE_TODO_LIST, DELETE_TODO_ITEM, INIT_LIST } from './actionTypes'

const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    if (action.type === CHANGE_INPUT_VALUE) {
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === UPDATE_TODO_LIST) {
        newState.list.push(newState.inputValue);
        newState.inputValue = "";
        return newState;
    }
    if (action.type === DELETE_TODO_ITEM) {
        newState.list.splice(action.index, 1);
        return newState;
    }
    if (action.type === INIT_LIST) {
        newState.list = action.data
        return newState;
    }
    return state;
}