import React, { useState } from "react";
import Contact from "./Contact";

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "jdoe@gmail.com",
      phone: "555-555-5555",
    },
    {
      id: 2,
      name: "Turnart",
      email: "art@turn.com",
      phone: "555-555-5555",
    },
    {
      id: 3,
      name: "Turnt",
      email: "turn@turn.com",
      phone: "111-222-3333 ",
    },
  ]);

  const deleteContact = (id) => {
    const contact0 = contacts;
    const newContacts = contact0.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          deleteClickHandler={deleteContact.bind(this, contact.id)}
        />
      ))}
    </>
  );
};

export default Contacts;
