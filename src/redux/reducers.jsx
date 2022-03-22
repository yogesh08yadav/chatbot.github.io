import { ADD_CHAT } from "./actionTypes"

const storeList = () => {
    const chatList = localStorage.getItem('chat_list')
    let chat = []
    if(chatList) {
        chat = JSON.parse(chatList)
    }
    return chat
}

const initialState = {
    list: storeList()
}

export const chatReducer = (state=initialState,action) => {
       switch(action.type){

        case ADD_CHAT:
        localStorage.setItem('chat_list',JSON.stringify([...state.list,action.payload]))
        return{
            ...state,
            list: [...state.list,action.payload]
        }






           default: return state
       }
}