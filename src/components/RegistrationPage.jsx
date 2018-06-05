import React, { Component } from "react";

class RegistrationPage extends Component {
  state = {
    password: "",
    email: ""
  };

  render() {
    return (
      <div>
        <h3>Create An Account</h3>
        <form>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" value={this.state.email} />
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" value={this.state.password} />
        </form>
      </div>
    );
  }
}

export default RegistrationPage;
