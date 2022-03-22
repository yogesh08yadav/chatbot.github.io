import { combineReducers, createStore } from "redux";
import { chatReducer } from "./reducers";

const reducers = combineReducers({
    chatBotReducer: chatReducer
})

export const store = createStore(reducers)