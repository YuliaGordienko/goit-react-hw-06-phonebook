import { createAction } from "@reduxjs/toolkit";
const { v4: uuidv4 } = require("uuid");

export const addContact = createAction("contacts/Add");
export const addContacts = createAction("contacts/ADD_CONTACTS");
export const filterForCont = createAction("contacts/Filter");
export const deleteContact = createAction("contacts/DELETE");
