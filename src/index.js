import React from 'react';
import ReactDOM from 'react-dom';
import {Spin} from 'antd'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
React.$globalMethod = {
    // 展示加载中
    showLoading (params, state) {
        params = params || '加载中'
        state = state || true
        console.log(state)
        ReactDOM.render(
            <Spin tip={params} spinning={state} />,
            document.getElementById('loading')
        )
    },
    // 去除加载中
    destroyShow () {
        ReactDOM.render(
            <Spin spinning={false} />,
            document.getElementById('loading')
        )
    },
    getUserInfo () {
        return JSON.parse(localStorage.getItem('userInfo'))
    }
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
