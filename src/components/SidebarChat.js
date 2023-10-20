import React from 'react'
import './SidebarChat.css'
import { Avatar } from '@mui/material'

const SidebarChat = ({ messages }) => {
  return (
    <div className='sidebarChat'>
        <Avatar/>
        <div className="sidebarChat__info">
            <h2>Dev Chuku</h2>
                <p>{messages[messages.length -1]?.message}</p>
        </div>
    </div>
  )
}

export default SidebarChat