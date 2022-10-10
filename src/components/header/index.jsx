import React, { useState, useEffect, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, AppBar, Toolbar, Tabs, Tab, IconButton, Grid, Drawer, CssBaseline, Tooltip } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { styled } from '@mui/system';
// import withRouter from '../../utils/withRouter';

const StyledTab = styled(Tab) (
  {
    margin: "2%",
    color: "white",
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: 24,
    "& .Mui-selected": {
      color: "white"
    }
  }
);

const TitleBox = styled(Box) (
  {
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: 44, // when this value is greater than 44, the position of indicator of tab in desktop will detach from the selected tab
    textOverflow: "ellipsis",
    overflow: "hidden"
  }
);

function Header(props) {

  const [isMobile, setIsMobile] = useState(false);
  const [isDrawerOn, setIsDrawerOn] = useState(false);
  const [location, setLocation] = useState(window.location.pathname);
  const [value, setValue] = useState(false);
  const patterns = [ // global and case-insensitive
    /^(\/|)$/gi, // home page: empty or /
    /^(\/projects)(\/|)$|^(\/project\/)(\d+)(\/|)$/gi // project page: /projects or /projects/ or /project/12 or /project/12/
  ]

  const appBarRef = useRef();

  const handleChange = () => {
    const locationAfterChange = window.location.pathname;
    convertToValue(locationAfterChange);
  };

  const handleDrawerOn = () => {
    setIsDrawerOn({ isDrawerOn: true });
  };

  const handleDrawerOff = () => {
    setIsDrawerOn({ isDrawerOn: false });
  };

  const convertToValue = (location) => { // map path with patterns to determine correct index, index is for set value of selected tab
    patterns.forEach((p, idx) => {
        if (p.test(location)) {
          setValue({ value: idx });
        }
      }
    );
  };

  const setResponsiveView = () => {
    return window.innerWidth < 750
      ? setIsMobile({ isMobile: true })
      : setIsMobile({ isMobile: false });
  };

  const desktopView = () => {
    return (
      <Tabs value={ value } onChange={ handleChange } variant="fullWidth" sx={{ minHeight: "inherit" }} TabIndicatorProps={{ sx: { bgcolor: "#4DA6FF", height: "10%", width: "100%", borderRadius: "20px 20px 0px 0px" } }}>
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
        <Drawer anchor="right" open={ isDrawerOn } onClose={ handleDrawerOff } PaperProps={{ sx: { bgcolor: "#9CF", boxShadow: 0 } }}>
          <Tabs value={ value } variant="scrollable" orientation="vertical" TabIndicatorProps={{ sx: { bgcolor: "#4DA6FF", height: "100%", width: "4%", borderRadius: "20px 0px 0px 20px" } }}>
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
      setLocation({ location: window.location.pathname });
      convertToValue(location.pathname);

      setResponsiveView();
      window.addEventListener("resize", setResponsiveView);

      getAppBarHeight();
      window.addEventListener("resize", getAppBarHeight);

      return () => {
        window.removeEventListener("resize", setResponsiveView);
        window.removeEventListener("resize", getAppBarHeight);
      }
    }
  );

  // const { name } = props.info;

  const name = "123";

  return (
    <div>
      <CssBaseline /> {/* avoid app bar to have extra margin in static position */}
      <AppBar position="static" sx={{ bgcolor: "#9CF", boxShadow: 0, textOverflow: "ellipsis", overflow: "hidden" }} ref={ appBarRef }>
        <Toolbar id="back-to-top-anchor">
          <Grid container spacing={ 0 } direction="row" justifyContent="space-between" alignItems="center" wrap="nowrap">
            <Grid item zeroMinWidth>
              <TitleBox>{ name }</TitleBox>
            </Grid>
            <Grid item sx={{ minHeight: "inherit" }} zeroMinWidth>
              {
                isMobile ? mobileView() : desktopView()
              }
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// export default withRouter(Header);
export default Header;