import React, { useState } from 'react';
import ContactList from './ContactList';
import AddContactForm from './AddContactForm'
import './App.css';



function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to add a new contact
  const addContact = (newContact) => {
    setContacts([...contacts, { ...newContact, id: Date.now() }]);
  };

  // Function to delete a contact
  const deleteContact = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  // Function to update a contact
  const updateContact = (updatedContact) => {
    setContacts(contacts.map(contact => (contact.id === updatedContact.id ? updatedContact : contact)));
  };

  // Function to handle search
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter contacts based on search term
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Contact Management System</h1>
      <AddContactForm onSubmit={addContact} />
      <input type="text" placeholder="Search by name" value={searchTerm} onChange={handleSearch} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} onUpdate={updateContact} />
    </div>
  );
}

export default App;
