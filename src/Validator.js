import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor (props) {
    super()
    this.state= {
      email: '',
      password1: '',
      password2: '',
      valid: false
    }
  }
  handleChange(e){
    this.setState({
      password1: e.target.value
    })
  }
  handleChange1(e){
    this.setState({
      password2: e.target.value
    })
  }

  handleClick(){
    if (this.state.password1 === this.state.password2){
      this.setState({
        valid: true
      })
    } else {
      this.setState({
        valid: false
      })
    }
  }
  render() {
    let validStatus = this.state.valid? <h1>Passwords match</h1> : <h1>Incorrect</h1>
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" onChange={(e)=> this.handleChange(e)} />
        <input type="password" placeholder="confirm password" onChange={(e)=> this.handleChange1(e)}  />
        <input type="submit" value="Submit" onClick={() => this.handleClick()}/>
        {validStatus}
      </div>

    );
  }
}

export default Validator;
