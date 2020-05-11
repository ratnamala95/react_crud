import React from 'react'
import InputBox from './InputBox'
import { findDOMNode } from 'react-dom'
import $ from 'jquery'
import '../css/style.css'

class Form extends React.Component{

  constructor(){
    super()

    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){

     $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
  }
  render(){
    return(
      <div className="login-page">
        <div className="form">
          <form className="register-form">
            <InputBox type="text" placeholder="name"/>
            <InputBox type="password" placeholder="password"/>
            <InputBox type="text" placeholder="email address"/>
            <button>create</button>
            <p className="message">Already registered? <a href="#" onClick={this.handleClick}>Sign In</a></p>
          </form>
          <form className="login-form">
            <InputBox type="text" placeholder="username"/>
            <InputBox type="password" placeholder="password"/>
            <button>login</button>
            <p className="message">Not registered? <a href="#" onClick={this.handleClick}>Create an account</a></p>
          </form>
        </div>

      </div>
  )
  }
}


export default Form
