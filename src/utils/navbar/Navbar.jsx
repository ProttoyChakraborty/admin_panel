import React from 'react'
import "./navbar.scss"


//Icons import
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CircleIcon from '@mui/icons-material/Circle';
import DarkMode from '@mui/icons-material/DarkMode';


const Navbar = () => {

    
  return (
    <div className="navbar">
      <div className="search-bar">
        <input type="text" placeholder='Search...'></input>
        <div>
        <SearchIcon/>
        </div>
       
      </div>
      <div>
      <div className="nav-buttons">
          <div className="button">
          <LanguageIcon />
              English
          </div>
          
          <div className="button">
            <MessageIcon />
            <div className="counter">2</div>
          </div>
          <div className="button">
            <NotificationsIcon />
            <div className="counter">3</div>
          </div>
          <div className="button">
            <DarkModeIcon/>
          </div>
          <div className="button">
            <img className='avatar' src={require('../../Assets/Images/profile-avatar.webp')}>
            </img>
          </div>
            

        </div>
        </div>
    </div>
  )
}

export default Navbar