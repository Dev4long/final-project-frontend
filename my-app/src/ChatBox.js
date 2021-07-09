import React from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';

import {CTX} from './ChatStore'
import './App.css';





const useStyles = makeStyles((theme) => ({
    root: {
        margin: '50px',
        padding: theme.spacing(3, 2),
        textAlign: 'center',
   
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
    },
    topicsWindow: {
        width: '30%',
        height: '300px',
        borderRight: '5px solid green'
    },
    chatWindow: {
        width: '70%',
        height: 'px',
        padding: '20px'
    },
    chatBox: {
        width: '85%',
      
    },
    button: {
        width: '15%',
       
    },
  }));


export default function ChatBox() {
 
    const[allChats] = React.useContext(CTX);
    
    const topics = Object.keys(allChats)
  
    
   

    const classes = useStyles()

   
   

    const [textValue, changeTextValue] = React.useState('')
    const [activeTopic, changeActiveTopic] = React.useState(topics[0])
    
 
    return(

     <div>
         <Paper className= {classes.root}>
             <Typography variant='h4' component='h4'>
               Chat box
             </Typography>
             <Typography variant= 'h5' component='h5'>
                {activeTopic}
             </Typography>
             <div className= {classes.flex}>
                <div className= {classes.topicsWindow}>
                    <List>
                        {
                        
                        topics.map(topic => (
                        <ListItem  onClick={e => changeActiveTopic(e.target.innerText)} key={topic} button>
                        <ListItemText primary={topic} />
                        </ListItem>
                        ))
                        }                   
                    </List>
                </div>
                <div className= {classes.chatWindow}>

                {
                    allChats[activeTopic].map((chat, i) => (
                        <div className={classes.flex} key={i}>
                        <Chip label={chat.from} className={classes.chip}/>
                        <Typography variant= "body1" >{chat.msg}</Typography>
                        </div>
                    ))
                }     
                    
                </div>
             </div>
             <div className= {classes.flex}>

             <TextField label="Type message here" className={classes.chatBox}
             value={textValue} 
            onChange={e => changeTextValue(e.target.value)}
             />

               <button className ="glow-on-hover">
                   send message
               </button>
             </div>
         </Paper>

     </div>
    )
}

