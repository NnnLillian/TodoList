import { CHANGE_INPUT_VALUE, UPDATE_TODO_LIST, DELETE_TODO_ITEM } from './actionTypes'

const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    if (action.type === CHANGE_INPUT_VALUE) {
        newState.inputValue = action.value;
        state = newState;
    }
    if (action.type === UPDATE_TODO_LIST) {
        newState.list.push(newState.inputValue);
        newState.inputValue = "";
        state = newState;
    }
    if (action.type === DELETE_TODO_ITEM) {
        newState.list.splice(action.index, 1);
        state = newState;
    }
    return state;
}