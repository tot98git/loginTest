import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from "./login.js";
import { PropTypes } from 'react'
import Routes from './Routes';
import Test from './test';
import registerServiceWorker from './registerServiceWorker';
class App extends Component{
    constructor(){
        super();
        this.state={
          isAuthenticated:localStorage.getItem('auth')
        }
        this.userHasAuthenticated=this.userHasAuthenticated.bind(this);
      }
      userHasAuthenticated = (authenticated)=>{
        localStorage.setItem('auth',authenticated);
        this.setState({isAuthenticated:localStorage.getItem('auth')});
      }
      render() {
        const childProps = {
          isAuth:this.state.isAuthenticated,
          userHasAuthenticated:this.userHasAuthenticated
        }
        return(<Routes childProps={childProps}/>);
    }
}
export default App;