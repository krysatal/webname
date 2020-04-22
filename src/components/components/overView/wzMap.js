import React, {Component} from 'react';
import Header from '../../common/header/header'
import Sider from '../../common/sider/sider'
// import Footer from '../../common/footer/footer'
import MyMap from './amap'
import {Layout} from "antd";
import './wzMap.scss'
const { Content } = Layout;

class wzMap extends Component{
    // constructor (props) {
    //     super(props)
    // }
    render() {
        return (
            <div>
                <Layout>
                    <Header></Header>
                    <Layout>
                        <Sider renderUrl={this.renderUrl.bind(this)}></Sider>
                        <Layout>
                            <Content className="site-layout-background"
                                     style={{padding: 24, margin: 0, minHeight: 280}}>
                                <div className="amap">
                                    <MyMap></MyMap>
                                </div>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
    renderUrl (url) {
        this.props.history.push(url)
    }
}
export default wzMap
