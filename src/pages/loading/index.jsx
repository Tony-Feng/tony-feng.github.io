import React from 'react';
import { Grid, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../../components/loading-spinner';
import { light, dark } from '../../utils/shared-themes';

const Loading = () => {

  const isDark = useSelector(state => state.isDarkRdc.isDark);

  return (
    <div>
      <ThemeProvider theme={ isDark ? createTheme(dark) : createTheme(light) }>
        <CssBaseline />

        <Grid container spacing={ 0 } direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: "100vh" }}>
          <Grid item xs={ 12 }>
            <LoadingSpinner />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );

};

export default Loading;
