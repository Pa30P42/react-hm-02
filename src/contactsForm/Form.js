import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class Form extends Component {
  state = {
    name: "",
    id: "",
    number: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handeleSubmit = (e) => {
    e.preventDefault();
    const wrongContact = this.props.contacts.map((contact) => contact.name);
    wrongContact.find((item) => item === this.state.name)
      ? alert(`${this.state.name} is already in your contacts`)
      : this.props.addContact({
          name: this.state.name,
          number: this.state.number,
          id: uuidv4(),
        });
    this.setState({ name: "" });
    this.setState({ number: "" });
  };
  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handeleSubmit}>
          <label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              type="text"
              name="number"
              value={number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add Contact</button>
        </form>
      </>
    );
  }
}

export default Form;
