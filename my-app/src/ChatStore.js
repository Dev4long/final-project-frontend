import React from 'react'
import io from 'socket.io-client'


export const CTX = React.createContext();



const initState= {
    Skaterz:[
        {from:'admin', msg: "hello skaterz"},
        
    ],
    Bikerz: [
        {from:'admin', msg: "hello bikerz"},
       
    ],
    RollerSkaterz: [
        {from:'admin', msg: "hello rollerskaterz"},
        
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

    React.useEffect(() => {
    if (!socket) {
        socket = io(':3005');
        socket.on("chat message", function(msg){
            dispatch({type: "RECEIVE_MESSAGE" , payload: msg})
        })
    }
   })



    const userT = props.userInfo.name
     
    const user = 
    
    'rider' 

   

    return(
        <CTX.Provider value={{allChats, sendChatAction, user}}>
      {props.children}
        </CTX.Provider>
    )

}

