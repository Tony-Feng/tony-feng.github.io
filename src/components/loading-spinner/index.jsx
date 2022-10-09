import React, { Component } from 'react';
import { CircularProgress } from '@mui/material';

export default class LoadingSpinner extends Component {
  render() {
    return (
      <CircularProgress size={ 100 } thickness={ 4 } sx={{ color: "#9CF" }} />
    );
  };
}
