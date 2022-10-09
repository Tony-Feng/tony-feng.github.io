import React, { Component, createRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, AppBar, Toolbar, Tabs, Tab, IconButton, Grid, Drawer, CssBaseline, Tooltip } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { styled } from '@mui/system';
import withRouter from '../../utils/withRouter';

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

class Header extends Component {

  state = {
    isMobile: false,
    isDrawerOn: false,
    location: this.props.location.pathname,
    value: false,
    patterns: [ // global and case-insensitive
      /^(\/|)$/gi, // home page: empty or /
      /^(\/projects)(\/|)$|^(\/project\/)(\d+)(\/|)$/gi // project page: /projects or /projects/ or /project/12 or /project/12/
    ]
  };

  appBarRef = createRef();

  handleChange = () => {
    const locationAfterChange = this.props.location.pathname;
    this.convertToValue(locationAfterChange);
  };

  handleDrawerOn = () => {
    this.setState({ isDrawerOn: true });
  };

  handleDrawerOff = () => {
    this.setState({ isDrawerOn: false });
  };

  convertToValue = (location) => { // map path with patterns to determine correct index, index is for set value of selected tab
    const { patterns } = this.state;

    patterns.forEach((p, idx) => {
        if (p.test(location)) {
          this.setState({ value: idx });
        }
      }
    );
  };

  setResponsiveView = () => {
    return window.innerWidth < 750
      ? this.setState({ isMobile: true })
      : this.setState({ isMobile: false });
  };

  desktopView = () => {
    const { value } = this.state;

    return (
      <Tabs value={ value } onChange={ this.handleChange } variant="fullWidth" sx={{ minHeight: "inherit" }} TabIndicatorProps={{ sx: { bgcolor: "#4DA6FF", height: "10%", width: "100%", borderRadius: "20px 20px 0px 0px" } }}>
        <StyledTab key="Home" label="Home" component={ RouterLink } to="/" sx={{ mr: 2 }} /> {/* add some space to the right of this tab */}
        <StyledTab key="Projects" label="Projects" component={ RouterLink } to="/projects" />
      </Tabs>
    );
  };

  mobileView = () => { // todo: maybe use menu (positioned menu) instead of drawer
    const { value, isDrawerOn } = this.state;

    return (
      <Box>
        <Tooltip title="Menu" arrow>
          <IconButton edge="start" color="inherit" aria-label="Menu" aria-haspopup={ true } onClick={ this.handleDrawerOn }>
            <Menu sx={{ fontSize: 40 }} />
          </IconButton>
        </Tooltip>
        <Drawer anchor="right" open={ isDrawerOn } onClose={ this.handleDrawerOff } PaperProps={{ sx: { bgcolor: "#9CF", boxShadow: 0 } }}>
          <Tabs value={ value } variant="scrollable" orientation="vertical" TabIndicatorProps={{ sx: { bgcolor: "#4DA6FF", height: "100%", width: "4%", borderRadius: "20px 0px 0px 20px" } }}>
            <StyledTab key="Home" label="Home" component={ RouterLink } to="/" />
            <StyledTab key="Projects" label="Projects" component={ RouterLink } to="/projects" />
          </Tabs>
        </Drawer>
      </Box>
    );
  };

  getAppBarHeight = () => {
    this.props.handleHeaderHeight(this.appBarRef.current.clientHeight);
  };

  componentDidMount() {
    const { location, getInfoAsync } = this.props;

    getInfoAsync(`${process.env.PUBLIC_URL}/info.json`);

    this.setState({ location: location.pathname });
    this.convertToValue(location.pathname);

    this.setResponsiveView();
    window.addEventListener("resize", this.setResponsiveView);

    this.getAppBarHeight();
    window.addEventListener("resize", this.getAppBarHeight);
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.setResponsiveView);
    window.removeEventListener("resize", this.getAppBarHeight);
  };

  render() {
    const { isMobile } = this.state;
    const { name } = this.props.info;

    return (
      <div>
        <CssBaseline /> {/* avoid app bar to have extra margin in static position */}
        <AppBar position="static" sx={{ bgcolor: "#9CF", boxShadow: 0, textOverflow: "ellipsis", overflow: "hidden" }} ref={ this.appBarRef }>
          <Toolbar id="back-to-top-anchor">
            <Grid container spacing={ 0 } direction="row" justifyContent="space-between" alignItems="center" wrap="nowrap">
              <Grid item zeroMinWidth>
                <TitleBox>{ name }</TitleBox>
              </Grid>
              <Grid item sx={{ minHeight: "inherit" }} zeroMinWidth>
                {
                  isMobile ? this.mobileView() : this.desktopView()
                }
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  };
}

export default withRouter(Header);
