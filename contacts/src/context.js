import { Children, createContext, useState } from "react";

const Context = createContext();
export const ContextProvider = () => {
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
  return <Context.Provider value={contacts}>{Children}</Context.Provider>;
};

export const Consumer = Context.Consumer;
