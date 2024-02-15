import React, { useState } from 'react';

const Contact = ({ contact, onDelete, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);

  const handleUpdate = () => {
    onUpdate({ ...contact, name, email, phone });
    setEditing(false);
  };

  const handleCancel = () => {
    setName(contact.name);
    setEmail(contact.email);
    setPhone(contact.phone);
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <button onClick={() => onDelete(contact.id)}>Delete</button>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Contact;
