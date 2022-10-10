import React from 'react';
import { CircularProgress } from '@mui/material';

export default function LoadingSpinner() {
  return (
    <CircularProgress size={ 100 } thickness={ 4 } sx={{ color: "#9CF" }} />
  )
}
