// import React, { useEffect, useState } from 'react'
import "./Chat.css";
import { Avatar, IconButton } from '@mui/material'
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';


export const Chat = () => {
//   const [seed, setSeed] = useState("")
//     useEffect(() => {
//         setSeed(Math.floor(Math.random() * 5000))
//     }, [])

  return (
    <div className="chat">
       <div className="chat__header">
          <Avatar/>

        <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
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
          <p className="chat__message">
             <span className="chat__name">Eidos</span>
                This is a message
             <span className="chat__timestamp">
                {new Date().toUTCString()}
             </span>
          </p>
          <p className="chat__message chat__receiver">
                    <span className="chat__name">Chuku</span>
                    This is a message back
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
          </p>
          <p className="chat__message">
                    <span className="chat__name">Eidos</span>
                    This is a message again again
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
          </p>
      </div>
       <div className="chat__footer">
          <InsertEmoticonOutlinedIcon />
             <form>
               <input
                   placeholder="Type a message"
                   type="text"
               />
               <button type="submit">Send a message</button>
               </form>
           <MicNoneOutlinedIcon />
      </div>
    </div>
  )
}
