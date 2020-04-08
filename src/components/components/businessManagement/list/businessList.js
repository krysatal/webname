import React, {Component} from 'react';
import Header from '../../../common/header/header'
import Sider from '../../../common/sider/sider'
import Footer from '../../../common/footer/footer'
import {Layout} from "antd";
const { Content } = Layout;

class businessList extends Component{
    constructor (props) {
        super(props)
    }
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
                                企业管理
                            </Content>
                        </Layout>
                    </Layout>
                    <Footer></Footer>
                </Layout>
            </div>
        )
    }
    renderUrl (url) {
        console.log(this.props)
        this.props.history.push(url)
    }
}
export default  businessList
