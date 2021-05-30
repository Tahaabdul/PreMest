import React, { useState } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

const Contacts = () => {
  const deleteContact = (id) => {
    // const contact0 = contacts;
    // const newContacts = contact0.filter((contact) => contact.id !== id);
    // setContacts(newContacts);
  };

  return (
    <Consumer>
      {(value) => {
        const { contacts } = value;
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
      }}
    </Consumer>
  );
};

export default Contacts;
