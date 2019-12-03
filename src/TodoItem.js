import React, { Component } from 'react';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
        return (
            <div onClick={this.handleDelete}>
                {this.props.content}
            </div>
        )
    }

    handleDelete() {
        this.props.deleteItem(this.props.ContentIndex)
    }
}

export default TodoItem;