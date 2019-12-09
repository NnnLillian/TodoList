import React, { Component, Fragment } from 'react'

import 'antd/dist/antd.css'
import { Input, Button, List, Typography, Tag } from 'antd'

import store from './store/index'
import { CHANGE_INPUT_VALUE, UPDATE_TODO_LIST, DELETE_TODO_ITEM } from './store/actionTypes'

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handStoreChange = this.handStoreChange.bind(this);
        store.subscribe(this.handStoreChange);
    }

    render() {
        return (
            <Fragment>
                <div style={{ marginTop: "16px", marginLeft: '16px' }}>
                    <Input placeholder="新增待办事项" style={{ width: '300px', marginRight: '16px' }} value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <Button type="primary" onClick={this.handleButtonClick}>提交</Button>
                </div>
                <List
                    style={{ marginTop: '16px', marginLeft: '16px', width: '300px' }}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={this.handleItemDelete.bind(this, index)}>
                            <Typography.Text mark>待办:</Typography.Text> {item}
                            <Tag style={{ marginLeft: '8px' }}>单击删除</Tag>
                        </List.Item>
                    )}
                />
            </Fragment>
        )
    }

    handleInputChange(e) {
        const action = {
            type: CHANGE_INPUT_VALUE,
            value: e.target.value
        }
        store.dispatch(action);
    }

    handleButtonClick() {
        const action = {
            type: UPDATE_TODO_LIST,
        }
        store.dispatch(action);
    }

    handleItemDelete(index) {
        const action = {
            type: DELETE_TODO_ITEM,
            index
        }
        store.dispatch(action);
    }

    handStoreChange() {
        this.setState(store.getState());
    }
}
import { from } from 'rxjs'

export default TodoList;