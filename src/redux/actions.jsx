import { ADD_CHAT } from "./actionTypes"

export const addChat = (data) =>{
    return{
        type: ADD_CHAT,
        payload: data
    }
}