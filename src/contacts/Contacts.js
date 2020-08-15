import React, { Component } from "react";
import ContactItem from "./ContactItem";

class Contacts extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.contacts.map((contact) => (
            <ContactItem
              deleteContact={this.props.deleteContact}
              key={contact.id}
              contact={contact}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default Contacts;
