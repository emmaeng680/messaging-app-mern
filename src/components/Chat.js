import React, { useEffect, useState } from 'react'
import "./Chat.css";
import { Avatar, IconButton } from '@mui/material'
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import axios from './axios'
import { useStateValue } from '../context/StateProvider';

export const Chat = ({ messages }) => {
  const [seed, setSeed] = useState("")
  const [input, setInput] = useState("")
  const [{ user }, dispatch] = useStateValue()

    const sendMessage = async (e) => {
  e.preventDefault()
        await axios.post('/messages/new', {
            message: input,
            name: user.displayName,
            timestamp: new Date().toUTCString(),
            received: true
        })
        setInput("")
    }


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

  return (
    <div className="chat">
       <div className="chat__header">
          <Avatar/>

        <div className="chat__headerInfo">
                    <h3>Dev Chuku</h3>
                    <p>Last seen at {" "}{messages[messages.length -1]?.timestamp}
                    </p>
                </div>
                <div className="chat__headerRight">
                   <IconButton>
                    <AttachFileOutlinedIcon/>
                  </IconButton>
                  <IconButton>
                    <MoreVertOutlinedIcon/>
                  </IconButton>
                  <IconButton>
                    <SearchOutlinedIcon/>
                  </IconButton>
                </div>
      </div>
       <div className="chat__body">

              {messages.map(message => (
                    <p className={`chat__message ${message.name === user.displayName && 'chat__receiver'}`}>
                    {message.message}
                    </p>
                ))}

      </div>
       <div className="chat__footer">
          <InsertEmoticonOutlinedIcon />
             <form>
               <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Type a message"
                    type="text"
               />
               <button onClick={sendMessage} type="submit">Send a message</button>
               </form>
           <MicNoneOutlinedIcon />
      </div>
    </div>
  )
}
