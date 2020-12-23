import { Component } from "react";
import shortid from "shortid";
import "./App.css";
import ContactList from "./components/ContactList/ContactList.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import Filter from "./components/Filter/Filter.jsx";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated!");
    const newContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (newContacts !== prevContacts) {
      console.log("Обновились контакты");
      localStorage.setItem("contacts", JSON.stringify(newContacts));
    }
  }

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    if (!this.state.contacts.find((contact) => contact.name === name)) {
      this.setState(({ contacts }) => {
        return { contacts: [contact, ...contacts] };
      });
    } else {
      alert(`${name} is already in the list`);
    }
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;

    const filteredContacts = this.getFilteredContacts();
    return (
      <div className="main_container">
        <h1 className="main_heading">Phonebook</h1>
        <ContactForm onAdd={this.addContact} />

        <h2 className="contacts_heading">Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
