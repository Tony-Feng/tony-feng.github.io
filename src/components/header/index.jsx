import React, { useState, useEffect, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, AppBar, Toolbar, Tabs, IconButton, Grid, Drawer, CssBaseline, Tooltip, Switch } from '@mui/material';
import { Menu, LightMode, DarkMode } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { StyledTab, TitleBox } from '../../utils/styled-components';
import { inv } from '../../slices/is-dark-slice';

const Header = (props) => {

  const [isMobile, setIsMobile] = useState(false);
  const [isDrawerOn, setIsDrawerOn] = useState(false);
  const [location, setLocation] = useState(window.location.pathname);
  const [value, setValue] = useState(false);
  const patterns = [ // global and case-insensitive
    /^(\/|)$/gi, // home page: empty or /
    /^(\/projects)(\/|)$|^(\/project\/)(\d+)(\/|)$/gi // project page: /projects or /projects/ or /project/12 or /project/12/
  ];
  const isDark = useSelector(state => state.isDarkInv.isDark);
  const dispatch = useDispatch();

  const appBarRef = useRef();

  const handleChange = () => {
    const locationAfterChange = window.location.pathname;
    convertToValue(locationAfterChange);
  };

  const handleDrawerOn = () => {
    setIsDrawerOn(true);
  };

  const handleDrawerOff = () => {
    setIsDrawerOn(false);
  };

  const convertToValue = (location) => { // map path with patterns to determine correct index, index is for set value of selected tab
    patterns.forEach((p, idx) => {
        if (p.test(location)) {
          setValue(idx);
        }
      }
    );
  };

  const setResponsiveView = () => {
    return window.innerWidth < 750
      ? setIsMobile(true)
      : setIsMobile(false);
  };

  const desktopView = () => {
    return (
      <Tabs value={ value } onChange={ handleChange } variant="fullWidth" sx={{ minHeight: "inherit" }} TabIndicatorProps={{ sx: { bgcolor: (isDark ? "#121212" : "#4DA6FF"), height: "10%", width: "100%", borderRadius: "20px 20px 0px 0px" } }}>

        <StyledTab key="Home" label="Home" component={ RouterLink } to="/" sx={{ mr: 2 }} /> {/* add some space to the right of this tab */}

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
          <Tabs value={ value } variant="scrollable" orientation="vertical" TabIndicatorProps={{ sx: { bgcolor: (isDark ? "#121212" : "#4DA6FF"), height: "100%", width: "4%", borderRadius: "20px 0px 0px 20px" } }}>

            <StyledTab key="Home" label="Home" component={ RouterLink } to="/" />

          </Tabs>
        </Drawer>
      </Box>
    );
  };

  const getAppBarHeight = () => {
    props.handleHeaderHeight(appBarRef.current.clientHeight);
  };

  useEffect(() => {

      setLocation(window.location.pathname);
      convertToValue(location.pathname);

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
                <Switch checked={ isDark } icon={ <LightMode /> } checkedIcon={ <DarkMode /> } size="large" onChange={ () => dispatch(inv()) } value="Dark Mode" />
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
