import React, { Component } from "react";
// import Feedback from "./components/feedbacks/feedbacks";
// import TotalFeedback from "./components/totalFeedback/TotalFeedback";
// import RefactoredFeedback from "./components/RefactoredFeedback/RefactoredFeedback";
import Notification from "./components/notification/notification";
import Form from "./contactsForm/Form";
import Contacts from "./contacts/Contacts";
import Filter from "./filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],

    filter: "",
  };

  deleteContact = (id) => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter((contact) => contact.id !== id),
    });
  };

  getFilterValue = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredData = () => {
    return this.state.filter
      ? this.state.contacts.filter((contact) =>
          contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
        )
      : this.state.contacts;
  };

  addContact = (contact) => {
    this.setState({ contacts: [...this.state.contacts, contact] });
  };
  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <Notification />
        <h2> Phonebook</h2>
        <Form contacts={contacts} addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} getFilterValue={this.getFilterValue} />
        <Contacts contacts={this.getFilteredData()} />
      </>
    );
  }
}

export default App;
