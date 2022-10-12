import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AppBar, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { computeWidth } from '../../utils/shared-functions';

const Footer = (props) => {

  const [currentYear, ] = useState(new Date().getFullYear());
  const [groupWidth, setGroupWidth] = useState(computeWidth(0.05));
  const isDark = useSelector(state => state.isDarkRdc.isDark);

  const appBarRef = useRef();
  const { handleFooterHeight } = props;

  const getAppBarHeight = useCallback(() => {
      handleFooterHeight(appBarRef.current.clientHeight);
    }, [handleFooterHeight, appBarRef]
  );

  const handleWindowChange = () => {
    setGroupWidth(computeWidth(0.05));
  };

  useEffect(() => {
      getAppBarHeight();
      window.addEventListener("resize", getAppBarHeight);

      handleWindowChange();
      window.addEventListener("resize", handleWindowChange);

      return () => {
        window.removeEventListener("resize", getAppBarHeight);
        window.removeEventListener("resize", handleWindowChange);
      };
    }, [getAppBarHeight]
  );

  return (
    <div>
      <AppBar position="static" sx={{ bgcolor: (isDark ? "#121212" : "#9CF"), boxShadow: 0, py: 2 }} ref={ appBarRef }>
        <Grid container spacing={ 0.1 } direction="column" justifyContent="space-evenly" alignItems="center" wrap="nowrap">
          <Grid item zeroMinWidth xs={ 12 }>
            {/*<Typography noWrap variant="body1" component="div" align="center" sx={{ width: `${groupWidth}px`, maxWidth: `${groupWidth}px`, textOverflow: "ellipsis", overflow: "hidden" }}>{ "\u00A9" } TF 2021 - { currentYear } { "\u2022" } Developed using React and Redux</Typography> /!* todo: adjust the copyright content *!/*/}
            <Typography noWrap variant="body1" component="div" align="center" sx={{ width: "90vw", textOverflow: "ellipsis", overflow: "hidden" }}>{ "\u00A9" } TF 2021 - { currentYear } { "\u2022" } Developed using React and Redux</Typography> {/* todo: adjust the copyright content */}
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

export default Footer;
