import React, { Component } from "react";
import UserDetails from "./UserDetails";
import SetPassword from "./SetPassword";
import Confirm from "./Confirm";

export default class MainForm extends Component {
  constructor() {
    super();

    this.state = {
      currentIndex: 0,
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      password2: "",
      agreed: false,
      error: "",
    };
  }

  next = () => {
    const { currentIndex, password, password2 } = this.state;

    if (currentIndex === 1) {
      // Check if passwords match
      if (password !== password2) {
        return this.setState({
          error: "Password do not match",
        });
      }
    }

    this.setState({
      currentIndex: this.state.currentIndex + 1,
    });
  };

  prev = () => {
    this.setState({
      currentIndex: this.state.currentIndex - 1,
    });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onChecked = () => {
    this.setState({
      agreed: !this.state.agreed,
    });
  };

  submit = () => {
    alert("Submitted!");
  };

  render() {
    const { currentIndex } = this.state;
    const { firstName, lastName, username, gender, agreed, error } = this.state;
    const values = { firstName, lastName, username, gender, agreed };
    switch (currentIndex) {
      case 0:
        return (
          <UserDetails
            error={error}
            values={values}
            onChange={this.onChange}
            next={this.next}
            onChecked={this.onChecked}
          />
        );
      case 1:
        return (
          <SetPassword
            error={error}
            passwords={[this.state.password, this.state.password2]}
            onChange={this.onChange}
            next={this.next}
            prev={this.prev}
          />
        );
      case 2:
        return (
          <Confirm values={values} submit={this.submit} prev={this.prev} />
        );
      default:
        return;
    }
  }
}
