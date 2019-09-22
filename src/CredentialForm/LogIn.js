import React, { Component } from 'react';
import '../Static/Styles/css/signup.min.css';

import { postCredentials } from '../ServerFunctions/postFunctions';

class logInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      cssClass: ""
    }
  }

  handleChange(event, eventType) {
    if(!!eventType){
      if(eventType === "email") {
        this.setState({
          email: event.target.value
        });
      }
      else if(eventType === "password") {
        this.setState({
          password: event.target.value.substr(0, 20)
        });
      }
      else {
        console.log("Unknow event");
      }
    }
  }

  async handleLogin() {
    const loginCredentials = await postCredentials(this.state.email, this.state.password);
    
    if(loginCredentials.status !== 'success') {
      const documentParagraph = document.querySelector("#error-paragraph");
      documentParagraph.innerHTML = "I'm sorry.<br/>I can't find email with that password.<br/>Try again <span role='img' aria-label='smile'>&#128533;</span>";
      this.handleClearing();
      this.setState({ cssClass: "error-state" });
      setTimeout(() => {
        documentParagraph.innerHTML = "Lets try again.<br/>Please enter your credentials <span role='img' aria-label='smile'>&#128526;</span>";
        this.setState({ cssClass: "" });
      }, 4000);
    }
    else {
      sessionStorage.setItem('username', JSON.stringify(loginCredentials.username));
      sessionStorage.setItem('userID', JSON.stringify(loginCredentials.userID));
      this.props.history.push('/myProducts');
      setTimeout(()=>{window.location.reload()}, 0);
    }
  }

  handleClearing() {
    this.setState({
      email: "",
      password: ""
    })
  }

  render() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    return (
      <div className="sign-form">
        <div className="sign-container">
        <div className="message-container">
          <img src="/images/Signup/signUp.png" alt="sign" className="sign-image" />
          <p id="error-paragraph">
            Hello, I'm your personal assistant Passy. Please enter your credentials 
            <span role="img" aria-label="smile">&#128526;</span>
          </p>
        </div>
          <div className="input-sign-field">
            <input 
             type="email"
             placeholder="Email@mail.com"
             className = {`input-for-sign ${this.state.cssClass}`}
             value={this.state.email}
             onChange={(e)=>this.handleChange(e, "email")}
            />
            <input 
             type="password"
             placeholder="Password"
             className = {`input-for-sign ${this.state.cssClass}`}
             value={this.state.password}
             onChange={(e)=>this.handleChange(e, "password")}
            />
          </div>
          <div className="btn-sign-container">
            <button 
             type="button" 
             className="btn-sign"
             onClick={()=>this.handleLogin()}
            >
              Log In
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

export default logInForm;