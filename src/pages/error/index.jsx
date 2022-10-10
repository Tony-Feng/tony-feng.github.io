import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown';
import Page from '../../components/page';

function renderer({ hours, minutes, seconds, completed }) {
  if (completed) {
    return (
      <Navigate to="/">Redirect</Navigate>
    );
  } else {
    return (
      <Typography variant="h2" component="div" align="center">Nothing here, will return to home page in { seconds }s</Typography>
    );
  }
}

Error.propTypes = {
  isPageRequired: PropTypes.bool
}

Error.defaultProps = {
  isPageRequired: true
}

export default function Error({ isPageRequired }) {

  const [countdown, setCountdown] = useState(5);
  const [currentTime, setCurrentTime] = useState(Date.now());

  return (
    isPageRequired ? (
      <Page>
        <Countdown date={ currentTime + (Math.round(countdown * 1000)) } renderer={ renderer } />
      </Page>
    ) : (
      <Countdown date={ currentTime + (Math.round(countdown * 1000)) } renderer={ renderer } />
    )
  )
}
