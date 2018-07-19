import React,{Component} from 'react';
import style from "./style.css";
import {Link} from 'react-router-dom';
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            current:{
                name:null,
                id:null,
                role:null,
            }
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }
   
    handleSubmit(e){
        e.preventDefault();
        //  make connection with endpoint to check if the user exists
        //  eventually return the response to state.current. 
         /* modify props  */this.props.userHasAuthenticated(true); 
    }
    render(){
        return (this.props.isAuth==false?
            <div className="Login">
                <h1>Login here</h1>
            <div className='form-wrapper'>
              <form className="formLogin">
                <input type="text" name="username" placeholder="Username"/>
                <input type="password" name="password" placeholder="Password"/>
                <button onClick={this.handleSubmit}>Login</button>
              </form>   
            </div>
            </div>:<h1><Link to="/test">Test</Link></h1>
          )
    }
}
export default Login;