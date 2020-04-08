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
        this.renderItem = this.renderItem.bind(this)
    }
    render() {
        return (
            <div>
                <Sider width={200} className="site-layout-background">
                    <Menu mode="inline"
                          defaultSelectedKeys={['1']}
                          defaultOpenKeys={['sub1']}
                          style={{ height: '100%', borderRight: 0 }}>
                        <SubMenu key="sub1"
                                 onTitleClick={this.renderItem('/index/overView')}
                                 title={<span><UserOutlined></UserOutlined>概览</span>}>
                        </SubMenu>
                    </Menu>
                </Sider>
            </div>
        )
    }
    renderItem (url) {
        this.props.renderUrl(url)
    }
}
export default sider
