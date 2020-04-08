import React, {Component} from 'react';
import 'antd/dist/antd.css'
import './sider.scss'
import {Layout, Menu} from "antd";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Sider, Content } = Layout;

class sider extends Component{
    constructor (props) {
        super(props)
        this.openSubMenu = this.openSubMenu.bind(this)
    }
    render() {
        return (
            <div>
                <Sider width={200} className="site-layout-background">
                    <Menu mode="inline"
                          style={{ height: '100%', borderRight: 0 }}>
                        <SubMenu key="sub1"
                                 onTitleClick={this.openSubMenu}
                                 title={<span><UserOutlined></UserOutlined>概览</span>}>
                        </SubMenu>
                        <SubMenu key="sub2"
                                 onTitleClick={this.openSubMenu}
                                 title={<span><LaptopOutlined></LaptopOutlined>企业管理</span>}>
                        </SubMenu>
                    </Menu>
                </Sider>
            </div>
        )
    }
    openSubMenu (openKeys) {
        console.log(openKeys)
        if (openKeys.key === 'sub1') {
            this.props.renderUrl('/index/overView')
        } else if (openKeys.key === 'sub2') {
            this.props.renderUrl('/index/businessManagement')
        }
    }
}
export default sider
