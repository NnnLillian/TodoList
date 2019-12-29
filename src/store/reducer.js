import * as actionTypes from './actionTypes';
import {
    fromJS,
    List
} from 'immutable';

const defaultState = fromJS({
    inputValue: '',
    list: []
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_INPUT_VALUE:
            return state.set('inputValue', action.value);

        case (action.type === actionTypes.UPDATE_TODO_LIST):
            return state.merge({
                list: List(state.get('list')).push(state.get('inputValue')),
                // list: state.get('list').concat(state.get('inputValue')),
                inputValue: fromJS('')
            });
        case (action.type === actionTypes.DELETE_TODO_ITEM):
            return state.merge({
                list: List(state.get('list')).delete(action.index)
            });
        case (action.type === actionTypes.INIT_LIST):
            return state.set('list', action.data);
        default:
            return state;
    }
}