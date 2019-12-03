import React, { Component } from 'react';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
        const { content } = this.props;
        return (
            <div onClick={this.handleDelete}>
                {content}
            </div>
        )
    }

    handleDelete() {
        const { deleteItem, ContentIndex } = this.props;
        deleteItem(ContentIndex)
    }
}

export default TodoItem;