import { configureStore } from "@reduxjs/toolkit";
import MainReducer from "./Contacts/contacts-reducer";
const store = configureStore({
  reducer: MainReducer,
});
export default store;
