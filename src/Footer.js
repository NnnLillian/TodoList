import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Radio } from 'antd';

class Footer extends Component {
    handleChange = e => {
        // alert(e.target.value)
        this.props.setVisibilityFilter(e.target.value)
      };
    render() {
        return (
            <Radio.Group value={this.props.filter} onChange={this.handleChange} style={{ marginTop: '16px', marginLeft: '16px', width: '300px' }}>
                <Radio.Button value="all">全部</Radio.Button>
                <Radio.Button value="active">待办</Radio.Button>
                <Radio.Button value="complete">已完成</Radio.Button>
            </Radio.Group>
        );
    }
}

export default Footer;