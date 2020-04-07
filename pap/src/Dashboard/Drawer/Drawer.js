import React from 'react';

import useStyles from './Style';

import {AppBar,CssBaseline,Divider,Drawer,Hidden,IconButton,List,ListItem,ListItemIcon,ListItemText,Typography,Toolbar} from '@material-ui/core';
import {useTheme} from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InboxIcon from '@material-ui/icons/MoveToInbox';

function ResponsiveDrawer(props) {
  const { container,handleDrawerToggle,mobileOpen,setMobileOpen,signOut,historyPush } = props;
  const classes = useStyles();
  const theme = useTheme();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['News','Ranking'].map((text, index) => (
          <ListItem onClick={()=>{setMobileOpen(false);historyPush('/dashboard/'+text.toLowerCase())}} button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem onClick={()=>signOut()} button key={'Sign Out'}>
          <ListItemIcon><ExitToAppIcon/></ListItemIcon>
          <ListItemText primary={'Sign Out'} />
        </ListItem>
      </List>
    </div>
  );

  return (
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            close
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      
  );
}

export default ResponsiveDrawer;