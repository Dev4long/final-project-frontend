import React from 'react'
import io from 'socket.io-client'


export const CTX = React.createContext();



const initState= {
    Skaterz:[
        {from:'admin', msg: "hello skaterz"},
        // {from:'yer', msg: "pow"},
        // {from:'oh', msg: "aii"},
    ],
    Bikerz: [
        {from:'admin', msg: "hello bikerz"},
        // {from:'dgfd', msg: "hgg"},
        // {from:'ff', msg: "yup"},
    ],
    RollerSkaterz: [
        {from:'admin', msg: "hello rollerskaterz"},
        // {from:'dgfd', msg: "hgg"},
        // {from:'ff', msg: "yup"},
    ]
}

function reducer(state, action){
    const{from, msg, topic} = action.payload;
    switch(action.type) {
        case 'RECEIVE_MESSAGE':
            return {
                ...state,
                [topic]: [
                    ...state[topic],
                    {from, msg}
                ]
            }
            default:
                return state
    }
}



let socket;

function sendChatAction (value) {
    socket.emit('chat message', value)
}

export default function ChatStore(props){

    const [allChats, dispatch] = React.useReducer(reducer, initState);


    if (!socket) {
        socket = io(':3005');
        socket.on("chat message", function(msg){
            dispatch({type: "RECEIVE_MESSAGE" , payload: msg})
        })
    }

    const user = 
    props.userInfo.name
    console.log( props.userInfo.name)
    // 'denis' + Math.random(100).toFixed(2)

   

    return(
        <CTX.Provider value={{allChats, sendChatAction, user}}>
            {props.children}
        </CTX.Provider>
    )

}

// if (!socket) {
//     socket = io(':3005');
//     socket.on("chat message", function(msg){console.log(msg)
//     })
// }