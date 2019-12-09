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
            <List style={{ marginTop: '16px', marginLeft: '16px', width: '300px' }}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item onClick={(index) => { props.handleItemDelete(index) }}>
                        <Typography.Text mark > 待办: </Typography.Text>{item}
                        <Tag style={{ marginLeft: '8px' }} > 单击删除 </Tag>
                    </List.Item>
                )}
            />
        </Fragment>
    )
}

export default TodoListUI;