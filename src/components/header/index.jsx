import React, { useState, useEffect, useRef, useReducer } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, AppBar, Toolbar, Tabs, IconButton, Grid, Drawer, CssBaseline, Tooltip, Switch } from '@mui/material';
import { Menu, LightMode, DarkMode } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { StyledTab, TitleBox } from '../../utils/styled-components';
import { isDarkInv } from '../../slices/is-dark-slice';

// const initHeaderState = {
//   isMobile: false,
//   isDrawerOn: false,
//   location: false,
//   error: '',
//   isLoggedIn: false,
// };
//
// const headerRdc = (state, action) => {
//   d
// };

const Header = (props) => {

  const [isMobile, setIsMobile] = useState(false);
  const [isDrawerOn, setIsDrawerOn] = useState(false);
  const [value, setValue] = useState(convertToValue(window.location.pathname, true));

  // const [headerState, headerDispatch] = useReducer(headerRdc, initHeaderState);

  const patterns = [ // global and case-insensitive
    /^(\/|)$/gi, // home page: empty or /
    /^(\/projects)(\/|)$|^(\/project\/)(\d+)(\/|)$/gi // project page: /projects or /projects/ or /project/12 or /project/12/
  ];
  const isDark = useSelector(state => state.isDarkRdc.isDark);
  const dispatch = useDispatch();

  const appBarRef = useRef();

  const handleChange = () => {
    convertToValue(window.location.pathname);
  };

  const handleDrawerOn = () => {
    setIsDrawerOn(true);
  };

  const handleDrawerOff = () => {
    setIsDrawerOn(false);
  };

  const convertToValue = (location, useReturn=false) => { // map path with patterns to determine correct index, index is for set value of selected tab
    for (const [idx, p] of patterns.entries()) {
      if (p.test(location)) {
        if (useReturn) {
          return idx;
        } else {
          setValue(idx);
        }
      }
    }
    return 0;
  };

  const setResponsiveView = () => {
    return window.innerWidth < 750
      ? setIsMobile(true)
      : setIsMobile(false);
  };

  const desktopView = () => {
    return (
      <Tabs value={ value } onChange={ handleChange } variant="fullWidth" sx={{ minHeight: "inherit" }} TabIndicatorProps={{ sx: { bgcolor: (isDark ? "#9CF" : "#4DA6FF"), height: "10%", width: "100%", borderRadius: "20px 20px 0px 0px" } }}>

        <StyledTab key="Home" label="Home" component={ RouterLink } to="/" sx={{ mr: 2 }} /> {/* add some space to the right of this tab */}
        <StyledTab key="Projects" label="Projects" component={ RouterLink } to="/projects" />

      </Tabs>
    );
  };

  const mobileView = () => { // todo: maybe use menu (positioned menu) instead of drawer
    return (
      <Box>
        <Tooltip title="Menu" arrow>
          <IconButton edge="start" color="inherit" aria-label="Menu" aria-haspopup={ true } onClick={ handleDrawerOn }>
            <Menu sx={{ fontSize: 40 }} />
          </IconButton>
        </Tooltip>
        <Drawer anchor="right" open={ isDrawerOn } onClose={ handleDrawerOff } PaperProps={{ sx: { bgcolor: (isDark ? "#121212" : "#9CF"), boxShadow: 0 } }}>
          <Tabs value={ value } variant="scrollable" orientation="vertical" TabIndicatorProps={{ sx: { bgcolor: (isDark ? "#9CF" : "#4DA6FF"), height: "100%", width: "4%", borderRadius: "20px 0px 0px 20px" } }}>

            <StyledTab key="Home" label="Home" component={ RouterLink } to="/" />
            <StyledTab key="Projects" label="Projects" component={ RouterLink } to="/projects" />

          </Tabs>
        </Drawer>
      </Box>
    );
  };

  const getAppBarHeight = () => {
    props.handleHeaderHeight(appBarRef.current.clientHeight);
  };

  useEffect(() => {

      handleChange();

      setResponsiveView();
      window.addEventListener("resize", setResponsiveView);

      getAppBarHeight();
      window.addEventListener("resize", getAppBarHeight);

      return () => {
        window.removeEventListener("resize", setResponsiveView);
        window.removeEventListener("resize", getAppBarHeight);
      }
    }, []
  );

  // const { name } = props.info;

  const name = "123";

  return (
    <div>
      <CssBaseline /> {/* avoid app bar to have extra margin in static position */}
      <AppBar position="static" sx={{ bgcolor: (isDark ? "#121212" : "#9CF"), boxShadow: 0, textOverflow: "ellipsis", overflow: "hidden" }} ref={ appBarRef }>
        <Toolbar id="back-to-top-anchor">
          <Grid container spacing={ 0 } direction="row" justifyContent="space-between" alignItems="center" wrap="nowrap">
            <Grid item zeroMinWidth>
              <TitleBox>{ name }</TitleBox>
            </Grid>
            <Grid item sx={{ minHeight: "inherit" }} zeroMinWidth>
              <Grid container spacing={ 0 } direction="row" justifyContent="space-between" alignItems="center" wrap="nowrap">
                <Switch checked={ isDark } icon={ <LightMode sx={{ fontSize: 20 }} /> } checkedIcon={ <DarkMode sx={{ fontSize: 20 }} /> } size="large" onChange={ () => dispatch(isDarkInv()) } value="Dark Mode" />
                {
                  isMobile ? mobileView() : desktopView()
                }
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
