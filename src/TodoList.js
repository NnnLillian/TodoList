import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">新的待办事项：</label>
                    <input id="insertArea" value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleButtonClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {this.state.list.map((item, index) =>
                        <li key={index}>
                            <TodoItem content={item}
                                ContentIndex={index}
                                deleteItem={this.handleItemDelete.bind(this)}
                            />
                        </li>
                    )}
                </ul>
            </Fragment>
        )
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleButtonClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleItemDelete(index) {
        const todoList = [...this.state.list];
        todoList.splice(index, 1);
        this.setState({
            list: todoList
        })
    }
}

export default TodoList;