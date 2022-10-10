import React, { useState } from 'react';
import { Grid, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from '../../components/header';
import BackToTopButton from '../../components/back-to-top-button';
import Footer from '../../components/footer';

const light = {
  palette: {
    mode: "light"
  }
};

const dark = {
  palette: {
    mode: "dark",
  }
};

const Page = ({ children }) => {

  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0); // use 0 instead of null to prevent arithmetic error
  const [isDark, setIsDark] = useState(false);

  const handleHeaderHeight = (height) => {
    setHeaderHeight(height);
  };

  const handleFooterHeight = (height) => {
    setFooterHeight(height);
  };

  const handleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div>
      <ThemeProvider theme={ isDark ? createTheme(dark) : createTheme(light) }>
        <CssBaseline />

        <Header handleHeaderHeight={ setHeaderHeight.bind(this) } />
        <BackToTopButton threshold={ 50 } />

        <Grid container spacing={ 0 } direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: `calc(100vh - ${Math.round(headerHeight + footerHeight)}px)` }}>

          <Grid item xs={ 12 }>
            { children }
          </Grid>

        </Grid>

        <Footer handleFooterHeight={ setFooterHeight.bind(this) } />
      </ThemeProvider>
    </div>
  );
};

export default Page;
