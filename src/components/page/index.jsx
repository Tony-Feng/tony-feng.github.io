import React, { Component } from 'react';
import { Grid } from '@mui/material';
import Header from '../../components/header';
import BackToTopButton from '../../components/back-to-top-button';
import Footer from '../../components/footer';

export default class Page extends Component {

  state = {
    headerHeight: 0,
    footerHeight: 0 // use 0 instead of null to prevent arithmetic error
  };

  handleHeaderHeight = (height) => {
    this.setState({ headerHeight: height} );
  };

  handleFooterHeight = (height) => {
    this.setState({ footerHeight: height} );
  };

  render() {
    const { headerHeight, footerHeight } = this.state;
    const { children } = this.props;

    return (
      <div>
        <Header handleHeaderHeight={ this.handleHeaderHeight.bind(this) } />
        <BackToTopButton threshold={ 50 } />

        <Grid container spacing={ 0 } direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: `calc(100vh - ${Math.round(headerHeight + footerHeight)}px)` }}>

          <Grid item xs={ 12 }>
            { children }
          </Grid>

        </Grid>

        <Footer handleFooterHeight={ this.handleFooterHeight.bind(this) } />
      </div>
    );
  };
}
