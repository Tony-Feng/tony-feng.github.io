import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Card, CardActionArea, CardMedia, Tooltip } from '@mui/material';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import LoadingSpinner from '../loading-spinner';
import { StyledCardHeader, StyledCardContent } from '../../utils/styled-components';

import ProjectInfo from '../../assets/projects.json'; // todo: remove this
import ImgOne from '../../assets/images/1.png'; // todo: remove this

const ProjectList = (props) => {

  const { numToLoad } = props;
  const projects = ProjectInfo;
  const isRetrieved = true;

  const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

  const toInt = (num) => {
    const parsed = parseInt(num, 10);
    return isNaN(parsed) ? 0 : parsed;
  };

  const getCard = (item) => {
    return (
      <Card key={ item["id"] }>
        <Tooltip title={ (! item["disabled"]) ? `Click to view more details about project "${item["title"]}"` : "Stay tuned" } arrow>
          <div>
            <CardActionArea component={ RouterLink } to={ `/project/${item["id"]}` } disabled={ item["disabled"] }> {/* todo: change md file location from direct id to md file name and store to project.json */}
              <Grid container spacing={ 0 } direction="row" justifyContent="center" alignItems="center">

                {
                  item["cover"] ? ( // the cover here can be ""; this field can be ignored as well, i.e., the field can be excluded from json
                    <>
                      <Grid item xs={ 12 } sm={ 12 } md={ 6 }>
                        <CardMedia component="img" image={ ImgOne } alt={ `img_${item["id"]}_${item["title"]}` } /> {/* todo: remove `process.env.PUBLIC_URL` */}
                      </Grid>

                      <Grid item xs={ 12 } sm={ 12 } md={ 6 }>
                        <StyledCardHeader title={ item["title"] } titleTypographyProps={{ gutterBottom: false, variant: "h4", component: "div", align: "center", noWrap: true }} sx={{ py: "5px" }} /> {/* todo: display creation date of project */}

                        <StyledCardContent>
                          <ResponsiveEllipsis id={ item["id"] } text={ item["brief"] } maxLine="5" ellipsis="..." basedOn="words" />
                        </StyledCardContent>
                      </Grid>
                    </>
                  ) : (
                    <>
                      <Grid item xs={ 12 } sm={ 12 } md={ 6 }>
                        <StyledCardHeader title={ <ResponsiveEllipsis id={ item["id"] } text={ item["title"] } maxLine="1" ellipsis="..." basedOn="words" /> } titleTypographyProps={{ gutterBottom: false, variant: "h4", component: "div", align: "center", noWrap: true }} sx={{ py: "0px" }} /> {/* todo: display creation date of project */}
                      </Grid>

                      <Grid item xs={ 12 } sm={ 12 } md={ 6 }>
                        <StyledCardContent>
                          <ResponsiveEllipsis id={ item["id"] } text={ item["brief"] } maxLine="5" ellipsis="..." basedOn="words" />
                        </StyledCardContent>
                      </Grid>
                    </>
                  )
                }

              </Grid>
            </CardActionArea>
          </div>
        </Tooltip>
      </Card>
    );
  };

  return (
    <div>
      <Grid container spacing={ 0 } direction="row" justifyContent="center" alignItems="center" sx={{ width: { xs: "50px", sm: "1200px", md: "1800px" } }}>
          {
            (! isRetrieved) ? (
              <LoadingSpinner />
            ) : (
              <Grid item xs={ 10 } container spacing={ 4 } direction="row" justifyContent="center" alignItems="center">
                {
                  projects && Object.entries(projects).map(([key, value]) =>
                    numToLoad >= toInt(key, 10) && (
                      <Grid item xs={ 12 } sm={ 12 } md={ 6 } key={ key }>
                        { getCard(value) }
                      </Grid>
                    )
                  )
                }
              </Grid>
            )
          }
      </Grid>
    </div>
  );

};

ProjectList.propTypes = {
  numToLoad: PropTypes.number
};

ProjectList.defaultProps = {
  numToLoad: Infinity
};

export default ProjectList;
