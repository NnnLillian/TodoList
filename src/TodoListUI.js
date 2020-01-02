import React, { Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List, Typography, Tag } from 'antd';

const TodoListUI = (props) => {
    return (
        <Fragment >
            <div style={{ marginTop: "16px", marginLeft: '16px' }}>
                <Input placeholder="新增待办事项"
                    style={{ width: '300px', marginRight: '16px' }}
                    value={props.inputValue}
                    onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleButtonClick}> 提交 </Button>
            </div>
            <List style={{ marginTop: '16px', marginLeft: '16px', width: '376px' }}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item
                        onDoubleClick={() => { props.handleItemDelete(index) }}
                        onClick={() => { props.handleItemChange(index) }}
                        style={{ display: "block" }}
                    >
                        {item.complete ? <Typography.Text delete disabled>完成: {item.text}</Typography.Text> : <Typography.Text mark>待办: {item.text}</Typography.Text >}
                        <Tag color="volcano" style={{ float: "right", display: "block" }} > 双击删除 </Tag>
                        <Tag color="gold" style={{ float: "right", display: "block" }} > 单击修改状态 </Tag>
                    </List.Item>
                )}
            />
        </Fragment>
    )
}

export default TodoListUI;