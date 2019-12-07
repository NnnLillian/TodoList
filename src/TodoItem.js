import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        const { content, todo } = this.props;
        return (
            <div>
                <span>{todo} : {content}</span>
                <button onClick={this.handleDelete}> 删除 </button>
            </div>
        )
    }

    handleDelete() {
        const { deleteItem, ContentIndex } = this.props;
        deleteItem(ContentIndex)
    }
}

TodoItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    ContentIndex: PropTypes.number
}

TodoItem.defaultProps = {
    todo: '待办'
}
export default TodoItem;