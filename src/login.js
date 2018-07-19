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
            },
            isAuth:props.isAuth==null?localStorage.getItem('auth'):null
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.delete=this.delete.bind(this);
        this.handleBlur=this.handleBlur.bind(this);
        this.onFocus=this.onFocus.bind(this);  
    }
   
    handleSubmit(e){
        e.preventDefault();
        //  make connection with endpoint to check if the user exists
        //  eventually return the response to state.current. 
         /* modify props  */this.props.userHasAuthenticated(true); 
    }
    delete(e){
        e.preventDefault();
        this.props.userHasAuthenticated(false);
        console.log("Local after deletion: " +localStorage.getItem('auth'));
    }
    onFocus(e){
        e.currentTarget.style.background="white";
        e.currentTarget.style.color="black";
    }
    handleBlur(e){
        e.currentTarget.style.background="linear-gradient(to right top, #051937, #101d48, #241f57, #3b1d63, #55156c)";
        e.currentTarget.style.color="white";
    }
    render(){
        return (this.props.isAuth=="false"?
            <div className="Login">
                <h1>Login here</h1>
            <div className='form-wrapper'>
              <form className="formLogin">
                <input type="text" name="username" placeholder="Username" onFocus={this.onFocus} onBlur={this.handleBlur}/>
                <input type="password" name="password" placeholder="Password" onFocus={this.onFocus} onBlur={this.handleBlur}/>
                <button onClick={this.handleSubmit}>Login</button>
              </form>   
            </div>
            </div>:<h1><Link to="/test">Test</Link><button onClick={this.delete}>Delete</button></h1>
          )
    }
}
export default Login;