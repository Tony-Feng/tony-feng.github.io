import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Header from '../../components/header';
import BackToTopButton from '../../components/back-to-top-button';
import Footer from '../../components/footer';

const Page = ({ children }) => {

  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0); // use 0 instead of null to prevent arithmetic error

  return (
    <div>
      <Header handleHeaderHeight={ setHeaderHeight } />
      <BackToTopButton threshold={ 50 } />

      <Grid container spacing={ 0 } direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: `calc(100vh - ${Math.round(headerHeight + footerHeight)}px)` }}>

        <Grid item xs={ 12 }>
          { children }
        </Grid>

      </Grid>

      <Footer handleFooterHeight={ setFooterHeight } />
    </div>
  );
};

export default Page;
