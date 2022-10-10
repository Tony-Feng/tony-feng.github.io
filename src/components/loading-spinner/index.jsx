import React from 'react';
import { CircularProgress } from '@mui/material';

const LoadingSpinner = () => {
  return (
    <CircularProgress size={ 100 } thickness={ 4 } sx={{ color: "#9CF" }} />
  );
};

export default LoadingSpinner;
