import * as React from 'react';
import { Menu, MenuItem, ButtonBase, Tooltip } from '@mui/material';
import LogOut from '../components/LogOut';
import iconprofile from '../assets/gardener.png';

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>                           
      <ButtonBase 
        style={{
            width: "40px", 
            height:"40px", 
            backgroundColor:"#9c27b0", 
            borderRadius: "50%"
        }}
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        >
            <Tooltip title="Profile" arrow>
                <img src={iconprofile} alt="Profile icon" width="42px" />
            </Tooltip>     
      </ButtonBase>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <LogOut/>
      </Menu>
    </div>
  );
}
