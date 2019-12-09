const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    if (action.type === "change_input_value") {
        newState.inputValue = action.value;
        state = newState;
    }
    if (action.type === "update_todo_list") {
        newState.list.push(newState.inputValue);
        newState.inputValue = "";
        state = newState;
    }
    return state;
}