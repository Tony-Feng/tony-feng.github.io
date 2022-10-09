import React, { Component, createRef } from 'react';
import { AppBar, Grid, Typography } from '@mui/material';

export default class Footer extends Component {

  state = {
    currentYear: new Date().getFullYear()
  };

  appBarRef = createRef();

  getAppBarHeight = () => {
    this.props.handleFooterHeight(this.appBarRef.current.clientHeight);
  };

  componentDidMount() {
    this.getAppBarHeight();

    window.addEventListener("resize", this.getAppBarHeight);
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.getAppBarHeight);
  };

  render() {
    const { currentYear } = this.state;

    return (
      <div>
        <AppBar position="static" sx={{ bgcolor: "#9CF", boxShadow: 0, textOverflow: "ellipsis", overflow: "hidden", py: 2 }} ref={ this.appBarRef }>
          <Grid container spacing={ 0.1 } direction="column" justifyContent="space-evenly" alignItems="center" wrap="nowrap">
            <Grid item zeroMinWidth xs={ 12 }>
              <Typography noWrap variant="body1" component="div">{ "\u00A9" } YF 2021 - { currentYear } { "\u2022" } Created By: React</Typography> {/* todo: adjust the copyright content */}
            </Grid>
            <Grid item zeroMinWidth xs={ 12 }>
              <Typography noWrap variant="body1" component="div">Last Updated: {}</Typography> {/* todo: add the last update time dynamically, maybe read from file */}
            </Grid>
          </Grid>
        </AppBar>
      </div>
    );
  };
}
