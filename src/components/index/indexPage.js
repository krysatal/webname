import React, {Component} from 'react';
import Header from '../common/header/header'
import Footer from '../common/footer/footer'
import Sider from '../common/sider/sider'
import {Layout} from "antd";
import 'antd/dist/antd.css'
import './indexPage.scss'
// const { Content } = Layout;

class indexPage extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
            <div>
                <Layout>
                    <Header></Header>
                    <Layout>
                        <Sider renderUrl={this.renderUrl.bind(this)}></Sider>
                    </Layout>
                    <Footer></Footer>
                </Layout>
            </div>
        )
    }
    renderUrl (url) {
        this.props.history.push(url)
    }
}

export default indexPage
