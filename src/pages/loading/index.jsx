import React from 'react';
import { Grid } from '@mui/material';
import LoadingSpinner from '../../components/loading-spinner';

const Loading = () => {

  return (
    <div>
      <Grid container spacing={ 0 } direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: "100vh" }}>
        <Grid item xs={ 12 }>
          <LoadingSpinner />
        </Grid>
      </Grid>
    </div>
  );

};

export default Loading;
