import React,{Component} from 'react';
import '../Static/Styles/css/signup.min.css';

class signUpForm extends Component {
  constructor(){
    super()
    this.state = {
      email: "",
      username: "",
      password: "",
      passwordre: "",
      cssClass: ""
    }
  }
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value.substr(0, 20)
    });
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value.substr(0, 20)
    });
  }
  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value.substr(0, 20)
    });
  }
  handlePasswordReChange = (event) => {
    this.setState({
      passwordre: event.target.value.substr(0, 20)
    });
  }

  handlePassword = () => {
    if(this.state.password.length > 5 && this.state.password === this.state.passwordre ) {
      return (
        console.log("radi")
      )
    }
    else {
      const documentParagraph = document.getElementById("error-paragraph");
      documentParagraph.innerHTML = "I'm sorry.<br/>Seems like passwords don't match or they are too short.<br/>Try again <span role='img' aria-label='smile'>&#128533;</span>";
      this.setState({
        cssClass: "error-state"
      })
      setTimeout(() => {
        documentParagraph.innerHTML = "Lets try again.<br/>Please enter your credentials <span role='img' aria-label='smile'>&#128526;</span>";
        this.setState({ cssClass: "" });
        this.handleClearingPassword();
      }, 4000);
    }
  }

  handleClearingPassword = () => {
    this.setState({
      password: "",
      passwordre: ""
    })
  }
  
  handleClearing = () => {
    this.setState({
      email: "",
      username: "",
      password: "",
      passwordre: ""
    })
  }

  render(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    return (
      <div className="sign-form">
        <div className="sign-container">

          <div className="message-container">
            <img src="/images/Signup/signUp.png" alt="sign" className="sign-image" />
            <p id="error-paragraph">Hello,<br/>I'm your personal assistant Passy.<br/>Please enter your credentials <span role="img" aria-label="smile">&#128526;</span></p>
          </div>
          
          <div className="input-sign-field">
            <input 
              type="email"
              placeholder="Email@mail.com"
              className="input-for-sign"
              value={this.state.email}
              onChange={(e)=>this.handleEmailChange(e)}
            />
            <input 
              type="text"
              placeholder="Username"
              className="input-for-sign"
              value={this.state.username}
              onChange={(e)=>this.handleUsernameChange(e)}
            />
            <input
              type="password"
              placeholder="Password"
              className={`input-for-sign ${this.state.cssClass}`}
              value={this.state.password}
              onChange={(e)=>this.handlePasswordChange(e)}
            />
            <input
              type="password"
              placeholder="Re-Password"
              className={`input-for-sign ${this.state.cssClass}`}
              value={this.state.passwordre}
              onChange={(e)=>this.handlePasswordReChange(e)}
            />
          </div>
          <div className="btn-sign-container">
            <button 
              type="button" 
              className="btn-sign" onClick={()=>this.handlePassword()}
            >
              Sign Up
            </button>
            <button
              type="button"
              className="btn-sign"
              onClick={()=>this.handleClearing()}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default signUpForm;