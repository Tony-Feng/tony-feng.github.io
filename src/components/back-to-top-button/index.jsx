import React from 'react';
import { Fab, Box, useScrollTrigger, Zoom } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import PropTypes from 'prop-types';

const ScrollTop = (props) => {

  const { threshold } = props;

  const trigger = useScrollTrigger(
    {
      disableHysteresis: true,
      threshold: threshold
    }
  );

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={ trigger }>
      <Box onClick={ handleClick } role="presentation" sx={{ position: "fixed", bottom: "6%", right: "6%", zIndex: 1 }}>
        <Fab size="large" aria-label="scroll back to top" sx={{ bgcolor: "#9CF", color: "white", ":hover": { bgcolor: "#9CF" } }}>
          <KeyboardArrowUp />
        </Fab>
      </Box>
    </Zoom>
  );
};

ScrollTop.propTypes = {
  threshold: PropTypes.number
};

ScrollTop.defaultProps = {
  threshold: 20
};

const BackToTopButton = (props) => {

  const { threshold } = props;

  return (
    <ScrollTop threshold={ threshold } />
  );
};

export default BackToTopButton;
