import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Card, CardActionArea, CardMedia, CardHeader, CardContent, Tooltip } from '@mui/material';
import PropTypes from 'prop-types';
import ClampLines from 'react-clamp-lines';
import LoadingSpinner from '../loading-spinner';

import ProjectInfo from '../../assets/projects.json'; // todo: remove this

const ProjectList = (props) => {

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
                        <CardMedia component="img" image={ `${process.env.PUBLIC_URL}/${item["cover"]}` } alt={ `img_${item["id"]}_${item["title"]}` } /> {/* todo: remove `process.env.PUBLIC_URL` */}
                      </Grid>

                      <Grid item xs={ 12 } sm={ 12 } md={ 6 }>
                        <CardHeader title={ <ClampLines id={ item["id"] } text={ item["title"] } lines={ 1 } buttons={ false } /> } titleTypographyProps={{ gutterBottom: true, variant: "h4", component: "div", align: "center" }} /> {/* todo: display creation date of project */}

                        <CardContent>
                          <ClampLines id={ item["id"] } text={ item["brief"] } lines={ 5 } buttons={ false } />
                        </CardContent>
                      </Grid>
                    </>
                  ) : (
                    <>
                      <Grid item xs={ 12 } sm={ 12 } md={ 6 }>
                        <CardHeader title={ <ClampLines id={ item["id"] } text={ item["title"] } lines={ 1 } buttons={ false } /> } titleTypographyProps={{ gutterBottom: true, variant: "h4", component: "div", align: "center" }} /> {/* todo: display creation date of project */}
                      </Grid>

                      <Grid item xs={ 12 } sm={ 12 } md={ 6 }>
                        <CardContent>
                          <ClampLines id={ item["id"] } text={ item["brief"] } lines={ 5 } buttons={ false } />
                        </CardContent>
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

  // useEffect(() => {
  //   const { getProjectAsync } = this.props;
  //   }, []
  // );
  //
  // componentDidMount() {
  //   const { getProjectAsync } = this.props;
  //
  //   getProjectAsync(`${process.env.PUBLIC_URL}/projects.json`);
  // };

  const { numToLoad } = props;
  const { isRetrieved, projects } = ProjectInfo;

  return (
    <div>
      <Grid container spacing={ 0 } direction="row" justifyContent="center" alignItems="center">
          {
            (!! isRetrieved) ? (
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
