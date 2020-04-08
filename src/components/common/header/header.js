import React, {Component} from 'react';
import 'antd/dist/antd.css'
import {Layout, Menu, Modal, Row, Col, Form, Input, Button, Checkbox, Select} from "antd";
import {BankOutlined, AuditOutlined} from '@ant-design/icons'
import './header.scss'
import loginJson from "../../login/login";
const { Header } = Layout;
const {Option} = Select
const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 }
}
const tailLayout = {
    wrapperCol: { offset: 5, span: 19 },
}
const plainOptions = [
    { label: '服装', value: '服装' },
    { label: '鞋业', value: '鞋业' },
    { label: '电气', value: '电气' },
    { label: '化工', value: '化工' },
    { label: '其他', value: '其他' }
]

class header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showLogIn: false,
            confirmLoading: false,
            // 用户登陆
            showLogin: true,
            showApply: false,
            userInfo: this.props.loginJson,
            loginParam: {
                username: '',
                password: ''
            }
        }
        // console.log(this.state.userInfo)
    }
    render() {
        return (
            <div>
                <Layout>
                    <Header className="header">
                        <div className="layout-logo" />
                        <div className="layout-nav">
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['1']}>
                                <Menu.Item key="1">
                                    <BankOutlined />
                                    首页</Menu.Item>
                                <Menu.Item key="2" onClick={this.openLoginModal.bind(this)}>
                                    <AuditOutlined />
                                    登录</Menu.Item>
                                <Menu.Item key="3">
                                    <AuditOutlined/>
                                    注销
                                </Menu.Item>
                            </Menu>
                        </div>
                    </Header>
                    <Modal className="loginModal"
                           footer={null}
                           visible={this.state.showLogIn}
                           confirmLoading={this.state.confirmLoading}
                           onOk={this.confirmLogin.bind(this)}
                           onCancel={this.closeLoginModal.bind(this)}
                    >
                        <Row>
                            <div className="login-title" style={{'height': '74px', 'lineHeight': '74px', 'display': (this.state.showApply ? 'block': 'none'), 'marginTop': '0px', 'marginBottom': '0px', 'width': '100%'}}>申请认证</div>
                            <Col span={12}>
                                <div style={{'width': '453px'}}>
                                    <div style={{'height': '421px', 'display': (this.state.showLogin ? 'block': 'none')}} className="loginPic">
                                        <div className="login-content-pic"></div>
                                    </div>
                                    <div style={{'height': '421px', 'width': '90%', 'margin': '0 auto', 'display': (this.state.showApply ? 'block': 'none')}}>
                                        <Form name="companyInfo">
                                            <Form.Item {...formItemLayout} label="企业名称">
                                                <Input placeholder="请输入企业名称" />
                                            </Form.Item>
                                            <Form.Item {...formItemLayout} label="工商注册号">
                                                <Input placeholder="请输入工商注册号" />
                                            </Form.Item>
                                            <Form.Item {...formItemLayout} label="企业简介">
                                                <Input placeholder="请输入企业简介" />
                                            </Form.Item>
                                            <Form.Item {...formItemLayout} label="行业类别">
                                                <Checkbox.Group options={plainOptions} defaultValue={['服装']} />
                                            </Form.Item>
                                            <Form.Item {...formItemLayout} label="其他类别">
                                                <Input placeholder="请输入其他类别" />
                                            </Form.Item>
                                            <Form.Item {...formItemLayout} label="企业地址">
                                                <Row gutter={10}>
                                                    <Col span={8}>
                                                        <Select size="default">
                                                            <Option value={1}></Option>
                                                            <Option value={2}></Option>
                                                            <Option value={3}></Option>
                                                        </Select>
                                                    </Col>
                                                    <Col span={8}>
                                                        <Select size="default">
                                                            <Option value={1}></Option>
                                                            <Option value={2}></Option>
                                                            <Option value={3}></Option>
                                                        </Select>
                                                    </Col>
                                                    <Col span={8}>
                                                        <Select size="default">
                                                            <Option value={1}></Option>
                                                            <Option value={2}></Option>
                                                            <Option value={3}></Option>
                                                        </Select>
                                                    </Col>
                                                </Row>
                                                <Input style={{marginTop: '20px'}} placeholder="请输入具体地址" />
                                            </Form.Item>
                                        </Form>
                                    </div>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="login" style={{'display': (this.state.showLogin ? 'block': 'none')}}>
                                    <h4 className="login-title">用户登录</h4>
                                    <Form onFinish={this.onFinish.bind(this)} onFinishFailed={this.onFinishFailed.bind(this)} initialValues={{ remember: true }}>
                                        <Form.Item name="username" rules={[{required: true, message: '请输入账号'}]}>
                                            <Input placeholder="请输入账号" value={this.state.loginParam.username} onChange={this.inputChangeUsername.bind(this)} />
                                        </Form.Item>
                                        <Form.Item name="password" rules={[{required: true, message: '请输入密码'}]}>
                                            <Input.Password placeholder="请输入密码" value={this.state.loginParam.password} onChange={this.inputChangePassword.bind(this)}/>
                                        </Form.Item>
                                        <Form.Item>
                                            <Button type="primary" style={{width: '100%'}} onClick={this.handleSubmit.bind(this)}>提交</Button>
                                            <div>忘记密码？</div>
                                        </Form.Item>
                                    </Form>
                                    <div style={{'textAlign': 'center', 'marginTop': '80px', 'marginBottom': '27px'}}>
                                        还未认证？
                                        <span className="register" style={{'marginTop': '15px'}} onClick={this.turnToRegister.bind(this)}>去申请认证</span>
                                    </div>
                                </div>
                                <div style={{'display': (this.state.showApply ? 'block': 'none'), 'width': '80%', 'margin': '0 auto'}}>
                                    <Form name="registerData">
                                        <Form.Item {...formItemLayout} label="联系人姓名">
                                            <Input placeholder="请输入联系人姓名"/>
                                        </Form.Item>
                                        <Form.Item {...formItemLayout} label="联系电话">
                                            <Input placeholder="请输入联系电话" />
                                        </Form.Item>
                                        <Form.Item {...formItemLayout} label="联系密码">
                                            <Input placeholder="请输入联系密码" />
                                        </Form.Item>
                                        <Form.Item {...tailLayout}>
                                            <Button type="primary" style={{width: '100%', float: 'right'}}>提交申请</Button>
                                        </Form.Item>
                                        <div style={{textAlign: 'center', marginTop: '172px', marginBottom: '27px'}}>
                                            已认证？
                                            <span className="register" style={{marginTop: '15px'}} onClick={this.turnToLogin.bind(this)}>去登录</span>
                                        </div>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Modal>
                </Layout>
            </div>
        )
    }
    openLoginModal (e) {
        this.setState({
            showLogIn: true
        })
    }
    closeLoginModal () {
        this.setState({
            showLogIn: false
        })
    }
    confirmLogin () {
        this.setState({
            confirmLoading: true
        })
    }
    turnToRegister () {
        this.setState({
            showLogin: false,
            showApply: true
        })
    }
    turnToLogin () {
        this.setState({
            showLogin: true,
            showApply: false
        })
    }
    inputChangeUsername (e) {
        this.setState({
            loginParam:{
                username: e.target.value,
                password: this.state.loginParam.password
            }
        })
    }
    inputChangePassword (e) {
        this.setState({
            loginParam:{
                password: e.target.value,
                username: this.state.loginParam.username
            }
        })
    }
    onFinishFailed (values) {
        console.log('Success:', values)
    }
    onFinish (errorInfo) {
        console.log('Failed:', errorInfo)
    }
    handleSubmit () {
        React.$globalMethod.showLoading()
        this.setState({
            showLogIn: false
        })
        setTimeout(() => {
            localStorage.setItem('userInfo', JSON.stringify(this.props.loginJson))
            React.$globalMethod.destroyShow()
            this.props.turnToView('/index')
        }, 2000)
    }
}
export default header
