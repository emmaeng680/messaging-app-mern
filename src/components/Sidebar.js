import './Sidebar.css';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar, IconButton } from "@mui/material";
import SidebarChat from './SidebarChat';

export const Sidebar = () => {
  return (
    <div className="sidebar">
            <div className="sidebar__header">
          <Avatar src='https://fc05.deviantart.net/fs70/i/2010/089/8/0/__Doodle_4_Google__Round_2___by_Akanei_Rin.jpg'/>
              <div className="sidebar__headerRight">
                <IconButton>
                  <DonutLargeOutlinedIcon />
                </IconButton>
                <IconButton>
                  <ChatOutlinedIcon />
                </IconButton>
                <IconButton>
                  <MoreVertOutlinedIcon />
                </IconButton>
              </div>
            </div>
            <div className="sidebar__search">
              <div className='sidebar__searchContainer'> 
                <SearchOutlinedIcon />
                <input placeholder="Search or start new chat"
type="text" />

              </div>
            </div>
            <div className="sidebar__chats">
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            </div>
        </div>
  )
}
