import React, {useState} from 'react';
import clsx from 'clsx';
import {withStyles} from "@material-ui/core/styles/index";
import {MenuItem, Menu, List, Divider, CssBaseline, IconButton, Toolbar, AppBar, Drawer} from "@material-ui/core";
import {Menu as MenuIcon, ChevronLeft, MoreVert} from '@material-ui/icons';
import {mainListItems, secondaryListItems} from "./DrawerLinks";
import styles from "../styles/NavBarStyle";
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { useLocation } from 'react-router-dom'

const NavBar = (props) => {
  const {searchChange} = props;
  const {classes} = props;
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div style={{display: 'flex'}}>
      <CssBaseline/>
      <AppBar position="fixed"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: openDrawer,
              })}>
        <Toolbar style={{paddingLeft: "5px"}}>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: openDrawer,
            })}>
            <MenuIcon/>
          </IconButton>
          <SearchBar classes={classes} onChange={searchChange}/>
          <SideMenu classes={classes}/>
        </Toolbar>
      </AppBar>

      <PermanentDrawer classes={classes} open={openDrawer} onClick={handleDrawerOpen}/>
    </div>
  );
};

const SearchBar = (props) => {
  const {onChange} = props;
  const {classes} = props;
  let location = useLocation();

  return ((location.pathname === "/patients")) ?
  (
    <div className={classes.content}>
      <div className={classes.searchBar}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Buscar…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          onChange={onChange}
        />
      </div>
    </div>
  ) :
    <div className={classes.content}/>;
};

const SideMenu = (props) => {
  const {classes} = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    if (anchorEl !== null) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  return (
    <div className={classes.contentRight}>
      <IconButton
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
        className="contentRight">
        <MoreVert/>
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{vertical: "top", horizontal: "right",}}
        transformOrigin={{vertical: "top", horizontal: "right",}}
        open={Boolean(anchorEl)}
        onClose={handleClick}>
        <MenuItem onClick={handleClick} component={Link} to="/user">Mi Usuario</MenuItem>
        <MenuItem onClick={handleClick} component={Link} to="/logout">Cerrar Sesión</MenuItem>
      </Menu>
    </div>
  )
};

const PermanentDrawer = (props) => {
  const {classes, open, onClick} = props;

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}>
      <div className={classes.toolbar}>
        <IconButton onClick={onClick}>
          <ChevronLeft/>
        </IconButton>
      </div>
      <Divider/>
      <List>{mainListItems}</List>
      <Divider/>
      <List>{secondaryListItems}</List>
    </Drawer>
  )
};

export default withStyles(styles)(NavBar);