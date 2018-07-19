import React,{Component} from 'react';
import App from "./App.js";
export default (props)=>{
    return(
            <h1>{props.isAuth?"Logged in":"Logged out"}</h1>
        )
    }

