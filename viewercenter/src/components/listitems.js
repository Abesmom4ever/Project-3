import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import PeopleIcon from '@mui/icons-material/People';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Home" onClick={() => window.location.href="/"}/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <AssignmentIcon />        
      </ListItemIcon>
      <ListItemText primary="Post Video"onClick={() => window.location.href="PostVideo"}/>
    </ListItemButton>    
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      User
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
      <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText primary="Sign up" onClick={() => window.location.href="SignUp"}/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText primary="Sign in" onClick={() => window.location.href="SignIn"}/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" onClick={() => window.location.href="Logout"}/>
    </ListItemButton>
  </React.Fragment>
);

