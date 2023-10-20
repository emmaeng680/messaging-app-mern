import './Sidebar.css';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar, IconButton } from "@mui/material";
import SidebarChat from './SidebarChat';
import { useStateValue } from '../context/StateProvider';

export const Sidebar = ({ messages }) => {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="sidebar">
            <div className="sidebar__header">
          <Avatar src={user?.photoURL}/>
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
            <SidebarChat messages={messages}/>
            </div>
        </div>
  )
}
