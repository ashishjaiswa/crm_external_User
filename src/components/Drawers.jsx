

import DashboardIcon from '@mui/icons-material/Dashboard';
import StorageIcon from '@mui/icons-material/Storage';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import CampaignIcon from '@mui/icons-material/Campaign';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import AnimationIcon from '@mui/icons-material/Animation';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import HailIcon from '@mui/icons-material/Hail';

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DropDowns from './DropDowns';
import { Link, Outlet } from 'react-router-dom';



const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Drawers() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const icons = [<DashboardIcon />, <StorageIcon />, <PersonIcon />, <GroupsIcon />, <TextSnippetIcon />, <CampaignIcon />, <AutoAwesomeMotionIcon />,
  <NoteAltIcon />, <AnimationIcon />, <SignalCellularAltIcon />, <HailIcon />]
  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{ backgroundColor: "white" }}>
        <Toolbar>
          <IconButton
            color="black  "
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ position: 'absolute', top: 10, right: 10 }}>
            <DropDowns />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['DASHBOARD', 'DATA SOURCE', 'STUDENTS', 'GROUPS', 'DOCUMENTS', 'ANNOUNCEMENTS', 'DEMO', 'TASK', 'REPORTS', 'STAGE', 'STAFF'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <Link to={text} style={{ textDecoration: "none", color: "ActiveBorder" }}>
                <ListItemButton >
                  <ListItemIcon>
                    {
                      icons[index]
                    }
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />

      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <div style={{ width: open === true ? "78vw" : "95vw", }}>
          <Outlet />
        </div>
      </Main>
    </Box>

  );
}