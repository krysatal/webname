import React, {Component} from 'react';
import Login from './components/login/login'
import 'antd/dist/antd.css';
import './App.css';
// import axios from 'axios'
import {HashRouter as Router, Route} from 'react-router-dom'
import indexPage from './components/index/indexPage'
import overView from './components/components/overView/wzMap'
import businessManagement from './components/components/businessManagement/list/businessList'
class App extends Component{
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        console.log(indexPage)
        // axios.get('/api/mock/5e7c707aa123277163210e09/example/query').then((res) => {
        //     console.log(res)
        // }).catch((res) => {
        //     console.log(res)
        // })
    }
    render() {
        return (
            <div>
                <Router>
                    <Route path="/" exact component={Login} />
                    <Route path="/index" exact component={indexPage} />
                    <Route path="/index/overView" exact component={overView} />
                    <Route path="/index/businessManagement" exact component={businessManagement} />
                </Router>
            </div>
        );
    }
}
// setupProxy(App)
export default App;
