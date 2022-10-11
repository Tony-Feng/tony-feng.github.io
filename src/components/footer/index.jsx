import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AppBar, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const Footer = (props) => {

  const [currentYear, ] = useState(new Date().getFullYear());
  const isDark = useSelector(state => state.isDarkRdc.isDark);

  const appBarRef = useRef();
  const { handleFooterHeight } = props;

  // const getAppBarHeight = () => {
  //   props.handleFooterHeight(appBarRef.current.clientHeight);
  // };

  const getAppBarHeight = useCallback(() => {
      handleFooterHeight(appBarRef.current.clientHeight);
    }, [handleFooterHeight, appBarRef]
  );

  useEffect(() => {
      getAppBarHeight();
      window.addEventListener("resize", getAppBarHeight);
      return () => {
        window.removeEventListener("resize", getAppBarHeight);
      };
    }, [getAppBarHeight]
  );

  return (
    <div>
      <AppBar position="static" sx={{ bgcolor: (isDark ? "#121212" : "#9CF"), boxShadow: 0, textOverflow: "ellipsis", overflow: "hidden", py: 2 }} ref={ appBarRef }>
        <Grid container spacing={ 0.1 } direction="column" justifyContent="space-evenly" alignItems="center" wrap="nowrap">
          <Grid item zeroMinWidth xs={ 12 }>
            <Typography noWrap variant="body1" component="div">{ "\u00A9" } TF 2021 - { currentYear } { "\u2022" } Created By React</Typography> {/* todo: adjust the copyright content */}
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

export default Footer;
