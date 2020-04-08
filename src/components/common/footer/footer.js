import React, {Component} from 'react';
import './footer.scss'
import {Layout, Col, Row, Input} from "antd";
import { RedditOutlined, QqOutlined, WeiboCircleOutlined, ArrowRightOutlined } from '@ant-design/icons';
// const style = { background: '#0092ff', padding: '8px 0' };
class footer extends Component{
    render() {
        return (
            <div>
                <Layout>
                    <div className="footer-box">
                        <div className="footer-main">
                            <Row gutter={16}>
                                <Col className="gutter-row" span={12}>
                                    <Row>
                                        <Col span={4}>
                                            <h4>
                                                <RedditOutlined fill="#ffffff" />
                                            </h4>
                                        </Col>
                                        <Col span={10}>
                                            <ul>
                                                <li>解决方案</li>
                                                <li>供应链</li>
                                                <li>商品溯源</li>
                                                <li>权威资源</li>
                                                <li>品牌认证</li>
                                            </ul>
                                        </Col>
                                        <Col span={10}>
                                            <ul>
                                                <li>加入我们</li>
                                                <li>企业认证</li>
                                                <li>商品认证</li>
                                                <li>技术支持</li>
                                                <li>技术支持</li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className="gutter-row" span={7}>
                                    <Row>
                                        <Col span={16}>
                                            <ul>
                                                <li>帮助与文档</li>
                                                <li>温州名品保真平台使用说明</li>
                                            </ul>
                                        </Col>
                                        <Col span={4}>
                                            <QqOutlined />
                                        </Col>
                                        <Col span={4}>
                                            <WeiboCircleOutlined />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className="gutter-row" span={5}>
                                    <ul>
                                        <li>联系我们</li>
                                        <li>
                                            <Row>
                                                <Col span={12}>0577-88884531</Col>
                                                <Col span={12}>wzmp@mail.com</Col>
                                            </Row>
                                        </li>
                                        <li style={{marginTop: 50}}>
                                            <Input placeholder="搜索" addonAfter={<ArrowRightOutlined />} />
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Layout>
            </div>
        )
    }
}
export default footer
