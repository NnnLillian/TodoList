import * as actionTypes from './actionTypes';
import {
    fromJS,
    List
} from 'immutable';

const defaultState = fromJS({
    inputValue: '',
    list: [],
    filter: 'all',
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_INPUT_VALUE:
            return state.set('inputValue', action.value);
        case actionTypes.UPDATE_TODO_LIST:
            const newItem = {
                id: new Date().getTime(),
                text: state.get('inputValue'),
                complete: false
            }
            return state.merge({
                list: List(state.get('list')).push(newItem),
                inputValue: fromJS('')
            });
        case actionTypes.DELETE_TODO_ITEM:
            return state.merge({
                list: List(state.get('list')).delete(action.index)
            });
        case actionTypes.CHANGE_ITEM:
            return state.setIn(['list', action.index, 'complete'], !state.getIn(['list', action.index, 'complete']));
        case actionTypes.CHANGE_FILTER:
            return state.set('filter', action.filter);
        case actionTypes.INIT_LIST:
            return state.set('list', action.todoList);
        default:
            return state;
    }
}