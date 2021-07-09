import React from 'react'

export const CTX = React.createContext();



const initState= {
    general:[
        {from:'deez', msg: "nutz"},
        {from:'yer', msg: "pow"},
        {from:'oh', msg: "aii"},
    ],
    topic2: [
        {from:'dee', msg: "ok"},
        {from:'dgfd', msg: "hgg"},
        {from:'ff', msg: "yup"},
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

export default function ChatStore(props){


    const reducerHook = React.useReducer(reducer, initState);

    return(
        <CTX.Provider value={reducerHook}>
            {props.children}
        </CTX.Provider>
    )

}