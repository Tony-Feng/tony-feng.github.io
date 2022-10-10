import React, { useState, useEffect } from 'react';
import { Grid, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/header';
import BackToTopButton from '../../components/back-to-top-button';
import Footer from '../../components/footer';
import { isDarkSet } from '../../slices/is-dark-slice';
import { isFirstTimeSet } from '../../slices/is-first-time-slice';
import { light, dark } from '../../utils/shared-themes';

const Page = ({ children }) => {

  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0); // use 0 instead of null to prevent arithmetic error
  const defaultDark = useMediaQuery("(prefers-color-scheme: dark)");
  const isDark = useSelector(state => state.isDarkRdc.isDark);
  const isFirstTime = useSelector(state => state.isFirstTimeRdc.isFirstTime);
  const dispatch = useDispatch();

  useEffect(() => {
      if (isFirstTime) { // if it's the first time a user browses this website, then use browser's preference for dark mode
        dispatch(isDarkSet(defaultDark));
        dispatch(isFirstTimeSet(false));
      }
    }, [defaultDark, dispatch, isFirstTime]
  );

  return (
    <div>
      <ThemeProvider theme={ isDark ? createTheme(dark) : createTheme(light) }>
        <CssBaseline />

        <Header handleHeaderHeight={ setHeaderHeight } />
        <BackToTopButton threshold={ 50 } />

        <Grid container spacing={ 0 } direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: `calc(100vh - ${Math.round(headerHeight + footerHeight)}px)` }}>

          <Grid item xs={ 12 }>
            { children }
          </Grid>

        </Grid>

        <Footer handleFooterHeight={ setFooterHeight } />
      </ThemeProvider>
    </div>
  );
};

export default Page;
