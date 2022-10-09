import React, { Component } from 'react';
import { Grid } from '@mui/material';
import LoadingSpinner from '../../components/loading-spinner';

export default class Loading extends Component {

  render() {
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

}
