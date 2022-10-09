import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown';
import Page from '../../components/page';

export default class Error extends Component {

  static propTypes = {
    isPageRequired: PropTypes.bool
  };

  static defaultProps = {
    isPageRequired: true
  };

  state = {
    countdown: 5,
    currentTime: Date.now()
  };

  renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <Navigate to="/">Redirect</Navigate>
      );
    } else {
      return (
        <Typography variant="h2" component="div" align="center">Nothing here, will return to home page in { seconds }s</Typography>
      );
    }
  };

  render() {
    const { countdown, currentTime } = this.state;
    const { isPageRequired } = this.props.isPageRequired;

    return (
      isPageRequired ? (
        <Page>
          <Countdown date={ currentTime + (Math.round(countdown * 1000)) } renderer={ this.renderer } />
        </Page>
      ) : (
        <Countdown date={ currentTime + (Math.round(countdown * 1000)) } renderer={ this.renderer } />
      )
    );
  };
}
