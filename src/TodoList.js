import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from 'axios';

import './style.css';

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
                {/* <div>
                    <div>HELLO</div>
                    <button className={this.state.show} onClick={this.handleButtonClick}>change</button>
                </div> */}
                <ul>
                    <TransitionGroup>
                        {this.getListItem()}
                    </TransitionGroup>
                </ul>
            </Fragment>
        )
    }

    componentDidMount() {
        axios.get('api/todolist')
            .then((res) => (
                console.log(res.data)
            ))
            .catch(() => { alert('error') })
    }

    getListItem() {
        return this.state.list.map((item, index) =>

            <CSSTransition
                timeout={1000}
                classNames="my-node"
                key={item}
            >
                <li>
                    <TodoItem content={item}
                        ContentIndex={index}
                        deleteItem={this.handleItemDelete}
                    />
                </li>
            </CSSTransition>
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