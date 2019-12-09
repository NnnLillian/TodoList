import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List, Typography, Tag } from 'antd';

class TodoListUI extends Component {
    render() {
        return (
            <Fragment >
                <div style={{ marginTop: "16px", marginLeft: '16px' }}>
                    <Input placeholder="新增待办事项"
                        style={{ width: '300px', marginRight: '16px' }}
                        value={this.props.inputValue}
                        onChange={this.props.handleInputChange}
                    />
                    <Button type="primary" onClick={this.props.handleButtonClick}> 提交 </Button>
                </div>
                <List style={{ marginTop: '16px', marginLeft: '16px', width: '300px' }}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={(index)=>{this.props.handleItemDelete(index)}}>
                            <Typography.Text mark > 待办: </Typography.Text>{item}
                            <Tag style={{ marginLeft: '8px' }} > 单击删除 </Tag>
                        </List.Item>
                    )}
                />
            </Fragment>
        )
    }
}

export default TodoListUI;