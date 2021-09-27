import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContact,
  addContacts,
  filterForCont,
  deleteContact,
} from "./contacts-actions";
const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [addContacts]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterQuery = createReducer("", {
  [filterForCont]: (_, { payload }) => payload,
});
export default combineReducers({
  items,
  filterQuery,
});
