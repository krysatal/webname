import React, {Component} from 'react';
import 'antd/dist/antd.css'
import './header.scss'
import {Layout, Menu} from "antd";
const { Header, Content, Sider } = Layout;

class header extends Component{
    render() {
        return (
            <div>
                <Layout>
                    <Header className="header">
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}>
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                </Layout>
            </div>
        )
    }
}
export default header
