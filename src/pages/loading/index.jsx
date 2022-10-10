import React from 'react';
import { Grid } from '@mui/material';
import LoadingSpinner from '../../components/loading-spinner';

export default function Loading() {

  return (
    <div>
      <Grid container spacing={ 0 } direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: "100vh" }}>
        <Grid item xs={ 12 }>
          <LoadingSpinner />
        </Grid>
      </Grid>
    </div>
  )

}
