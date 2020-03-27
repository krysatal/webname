import React, {Component} from 'react';
// import logo from './logo.svg';
import {Button, DatePicker, version} from 'antd'
import 'antd/dist/antd.css'
import './App.css'
import axios from 'axios'
class App extends Component{
    componentDidMount() {
        axios.get('/api/mock/5e7c707aa123277163210e09/example/query').then((res) => {
            console.log(res)
        }).catch((res) => {
            console.log(res)
        })
    }
    render() {
        return (
            <div>
                <h1>antd version: {version}</h1>
                <DatePicker />
                <Button type="primary" style={{ marginLeft: 8 }}>
                    Primary Button
                </Button>
            </div>
        );
    }
}
// setupProxy(App)
export default App;
