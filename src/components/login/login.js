import React, {Component} from 'react';
import Header from '../common/header/header'
import Footer from '../common/footer/footer'
import 'antd/dist/antd.css'
import './login.scss'
import {Layout, Button, Row, Col} from "antd";
import Particles from 'reactparticles.js'
const loginJson = require('./loginJson')

class login extends Component{
    constructor(props) {
        super(props)
        this.state = {
            history: this.props.history
        }
    }
    render() {
        return (
            <div>
                <Layout>
                    <Header loginJson={loginJson} turnToView={this.turnToView.bind(this)} />
                    <div className="carousel">
                        <div className="carousel-content">
                            <Particles id="test-particles" className="particles-js-area"/>
                            <div className="over-carousel-content">
                                <div className="carousel-mask">
                                    <div>
                                        <div className="title">区块链名品保真平台</div>
                                        <div className="tip">政府、协会、企业三维一体打造区块链溯源管理平台为温州精品证名</div>
                                        <div className="apply">
                                            <Button className="apply-button">申请认证</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="introduce">
                        <div className="bg">
                            <h3 className="introduce-title">服务介绍</h3>
                            <div className="introduce-body">
                                <p>温州市经济与信息化局联合中国移动，温州区块链技术与应用研究院、山人科技、共同打造"5G区块链名品保障区块链"。利用移动5G、物联网、区块链等信息技术，为温州数字经济发展打造新动能。通过"政府、协会、企业"三维一体的科学管理模式，搭建展示企业新形象，推广温州名特优产品，提升企业品牌价值。</p>
                            </div>
                            <div className="introduce-enter">
                                <Row gutter={80}>
                                    <Col span={8}>
                                        <div className="introduce-enter-pic">
                                            <div className="introduce-enter-pic-one"></div>
                                            <h3 className="introduce-enter-title">企业认证</h3>
                                            <div className="introduce-enter-body">
                                                依托温州是经济与信息化局的权威影响力和丰富资源，积极携手各级检测、监管单位，行业协会等共建产品品牌生态圈，推动温州名优产业的发展，带动传统产业改造和产品升级换代。
                                            </div>
                                            <div className="introduce-enter-button">
                                                <Button type="success">查看详情</Button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className="introduce-enter-pic">
                                            <div className="introduce-enter-pic-three"></div>
                                            <h3 className="introduce-enter-title">一物一码</h3>
                                            <div className="introduce-enter-body">
                                                每个产品能拥有一个独一无二的二维码，从根源上彻底杜绝假冒伪劣产品，针对零售场景全程可控，有效的增强品牌与消费者之间的互动，有助提升影响力即传播。
                                            </div>
                                            <div className="introduce-enter-button">
                                                <Button type="success">查看详情</Button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className="introduce-enter-pic">
                                            <div className="introduce-enter-pic-two"></div>
                                            <h3 className="introduce-enter-title">溯源保真</h3>
                                            <div className="introduce-enter-body">
                                                对产品采购、生产、销售过程中的信息采集、存储及整合，可以名品从源头到终端的每一个环节进行真实可靠的信息管理，实现信息的互联互通，建立全面的防伪溯源系统。
                                            </div>
                                            <div className="introduce-enter-button">
                                                <Button type="success">查看详情</Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </Layout>
            </div>
        )
    }
    turnToView (url) {
        this.props.history.push(url)
    }
}
export default login
