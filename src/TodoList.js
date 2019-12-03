import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this)

    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">新的待办事项：</label>
                    <input id="insertArea" value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleButtonClick}>提交</button>
                </div>
                <ul>
                    {this.getListItem()}
                </ul>
            </Fragment>
        )
    }

    getListItem() {
        return this.state.list.map((item, index) =>
            <li key={index}>
                <TodoItem content={item}
                    ContentIndex={index}
                    deleteItem={this.handleItemDelete}
                />
            </li>
        )
    }

    handleInputChange(e) {
        const value = e.target.value
        this.setState(() => ({
            inputValue: value
        }));
    }

    handleButtonClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }

    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return { list }
        });
    }
}

export default TodoList;