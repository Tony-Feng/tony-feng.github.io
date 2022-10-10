import React, { useState, useEffect, useRef } from 'react';
import { AppBar, Grid, Typography } from '@mui/material';

export default function Footer(props) {

  const [currentYear, _] = useState(new Date().getFullYear());

  const appBarRef = useRef();

  const getAppBarHeight = () => {
    props.handleFooterHeight(appBarRef.current.clientHeight);
  };

  useEffect(() => {
      getAppBarHeight();
      window.addEventListener("resize", getAppBarHeight);
      return () => {
        window.removeEventListener("resize", getAppBarHeight);
      };
    }
  );

  return (
    <div>
      <AppBar position="static" sx={{ bgcolor: "#9CF", boxShadow: 0, textOverflow: "ellipsis", overflow: "hidden", py: 2 }} ref={ appBarRef }>
        <Grid container spacing={ 0.1 } direction="column" justifyContent="space-evenly" alignItems="center" wrap="nowrap">
          <Grid item zeroMinWidth xs={ 12 }>
            <Typography noWrap variant="body1" component="div">{ "\u00A9" } YF 2021 - { currentYear } { "\u2022" } Created By: React</Typography> {/* todo: adjust the copyright content */}
          </Grid>
          <Grid item zeroMinWidth xs={ 12 }>
            <Typography noWrap variant="body1" component="div">Last Updated: {}</Typography> {/* todo: add the last update time dynamically, maybe read from file */}
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}
