import React,{Component} from 'react';
import '../Static/Styles/css/signup.min.css';
import { postUserData, postCredentials } from '../ServerFunctions/postFunctions.js';

class signUpForm extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      username: "",
      password: "",
      passwordre: "",
      cssClass: ""
    }
  }

  handleChange(event, eventType) {
    if(!!eventType) {
      if(eventType === "email") {
        this.setState({
          email: event.target.value.substr(0, 20)
        });
      }
      else if(eventType === "username") {
        this.setState({
          username: event.target.value.substr(0, 20)
        });
      }
      else if(eventType === "password") {
        this.setState({
          password: event.target.value.substr(0, 20)
        });
      }
      else if(eventType === "passwordre") {
        this.setState({
          passwordre: event.target.value.substr(0, 20)
        });
      }
    }
  }

  async handlePassword() {
    if(this.state.password.length > 5 && this.state.password === this.state.passwordre ) {
      const userSigned = await postUserData(this.state.username, this.state.email, this.state.password);

      if(userSigned.status === 'success') {
        const loginCredentials = await postCredentials(this.state.email, this.state.password);

        if(loginCredentials.status === 'success'){
          sessionStorage.setItem('username', JSON.stringify(loginCredentials.username));
          sessionStorage.setItem('userID', JSON.stringify(loginCredentials.userID));

          this.props.history.push('/myProducts');
          setTimeout(()=>{window.location.reload();}, 0);
        }
        else {
          alert("Error on backend");
        }
      }
      else {
        alert("Error on backend");
      }
    }
    else {
      const documentParagraph = document.querySelector("#error-paragraph");
      documentParagraph.innerHTML = "I'm sorry.<br/>Seems like passwords don't match or they are too short.<br/>Try again <span role='img' aria-label='smile'>&#128533;</span>";

      this.setState({ cssClass: "error-state" });
      this.handleClearingPassword();
      setTimeout(() => {
        documentParagraph.innerHTML = "Lets try again.<br/>Please enter your credentials <span role='img' aria-label='smile'>&#128526;</span>";
        this.setState({ cssClass: "" });
      }, 4000);
    }
  }

  handleClearingPassword() {
    this.setState({
      password: "",
      passwordre: ""
    })
  }
  
  handleClearing() {
    this.setState({
      email: "",
      username: "",
      password: "",
      passwordre: ""
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
              Hello,<br/>I'm your personal assistant Passy.<br/>Please enter your credentials 
              <span role="img" aria-label="smile">&#128526;</span>
            </p>
          </div>
          <div className="input-sign-field">
            <input 
             type="email"
             placeholder="Email@mail.com"
             className="input-for-sign"
             value={this.state.email}
             onChange={(e)=>this.handleChange(e, "email")}
            />
            <input 
             type="text"
             placeholder="Username"
             className="input-for-sign"
             value={this.state.username}
             onChange={(e)=>this.handleChange(e, "username")}
            />
            <input
             type="password"
             placeholder="Password"
             className={`input-for-sign ${this.state.cssClass}`}
             value={this.state.password}
             onChange={(e)=>this.handleChange(e, "password")}
            />
            <input
             type="password"
             placeholder="Re-Password"
             className={`input-for-sign ${this.state.cssClass}`}
             value={this.state.passwordre}
             onChange={(e)=>this.handleChange(e, "passwordre")}
            />
          </div>
          <div className="btn-sign-container">
            <button 
             type="button" 
             className="btn-sign"
             onClick={()=>this.handlePassword()}
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