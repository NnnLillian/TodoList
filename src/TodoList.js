import React, { Component, Fragment } from 'react'

import 'antd/dist/antd.css'
import { Input, Button, List, Typography,Tag } from 'antd'

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
                <div style={{ marginTop: "16px", marginLeft: '16px' }}>
                    <Input placeholder="新增待办事项" style={{ width: '300px', marginRight: '16px' }} value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <Button type="primary" onClick={this.handleButtonClick}>提交</Button>
                </div>
                <List
                    style={{marginTop:'16px',marginLeft: '16px', width:'300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (
                        <List.Item onClick={this.handleItemDelete}>
                            <Typography.Text mark>待办:</Typography.Text> {item}
                            <Tag style={{marginLeft:'8px'}}>单击删除</Tag>
                        </List.Item>
                    )}
                />
            </Fragment>
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