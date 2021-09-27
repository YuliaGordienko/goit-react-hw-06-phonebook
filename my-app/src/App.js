import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "./Input/Input";
import ContactsList from "./ContactsList/ContactsList";
import FiltrByName from "./FiltrByName/FiltrByName";
import {
  addContact,
  addContacts,
  filterForCont,
  deleteContact,
} from "./Redux/Contacts/contacts-actions";
const { v4: uuidv4 } = require("uuid");

export default function App() {
  const { items, filterQuery } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    if (items.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact(contact));
    }
    setName("");
    setNumber("");
  };
  const arrayContacs = () => {
    const filterLowerCase = filterQuery?.toLowerCase();
    return items.filter((contact) =>
      contact?.name?.toLowerCase().includes(filterLowerCase)
    );
  };
  const handleFilterChange = (e) => {
    dispatch(filterForCont(e.currentTarget.value));
  };
  const deleteContacs = (contactId) => {
    dispatch(deleteContact(contactId));
  };
  const getArr = arrayContacs();

  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>Phonebook</h1>
      <Input
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        valueName={name}
        valueNumber={number}
      />
      <FiltrByName value={filterQuery} onChange={handleFilterChange} />
      <ContactsList contacts={getArr} onDeleteContacts={deleteContacs} />
    </div>
  );
}
