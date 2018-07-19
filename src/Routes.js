import React, { Component } from 'react';
import  {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Test from './test';
import Login from './login';
import AppliedRoute from "./appliedRoute";
export default ({childProps})=>{
  return(
  <Router>
    <Switch>
   { console.log(childProps)}
      <AppliedRoute path="/test" exact component={Test} props={childProps} />
      <AppliedRoute path="/" exact component={Login} props={childProps} />
    </Switch>
  </Router>);
}

