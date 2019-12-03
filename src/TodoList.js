import React, { Component, Fragment } from 'react';

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
                <div><input value={this.state.inputValue}
                    onChange={this.handleInputChange.bind(this)}
                />
                    <button onClick={this.handleButtonClick.bind(this)}>提交</button></div>
                <ul>
                    {this.state.list.map((item, index) =>
                        <li key={index}>{item}</li>
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
}

export default TodoList;