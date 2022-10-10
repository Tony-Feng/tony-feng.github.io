import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Header from '../../components/header';
import BackToTopButton from '../../components/back-to-top-button';
import Footer from '../../components/footer';

export default function Page({ children }) {

  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0); // use 0 instead of null to prevent arithmetic error

  const handleHeaderHeight = (height) => {
    setHeaderHeight({ headerHeight: height} );
  };

  const handleFooterHeight = (height) => {
    setFooterHeight({ footerHeight: height} );
  };

  return (
    <div>
      <Header handleHeaderHeight={ setHeaderHeight.bind(this) } />
      <BackToTopButton threshold={ 50 } />

      <Grid container spacing={ 0 } direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: `calc(100vh - ${Math.round(headerHeight + footerHeight)}px)` }}>

        <Grid item xs={ 12 }>
          { children }
        </Grid>

      </Grid>

      <Footer handleFooterHeight={ setFooterHeight.bind(this) } />
    </div>
  )
}
