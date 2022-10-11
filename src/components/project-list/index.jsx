import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Card, CardActionArea, CardMedia, CardHeader, CardContent, Tooltip } from '@mui/material';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import LoadingSpinner from '../loading-spinner';

import ProjectInfo from '../../assets/projects.json'; // todo: remove this
import ImgOne from '../../assets/images/1.png'; // todo: remove this

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
                        {/*<CardMedia component="img" image={ `${process.env.PUBLIC_URL}/${item["cover"]}` } alt={ `img_${item["id"]}_${item["title"]}` } /> /!* todo: remove `process.env.PUBLIC_URL` *!/*/}
                        <CardMedia component="img" image={ ImgOne } alt={ `img_${item["id"]}_${item["title"]}` } /> {/* todo: remove `process.env.PUBLIC_URL` */}
                      </Grid>

                      <Grid item xs={ 12 } sm={ 12 } md={ 6 }>
                        <CardHeader title={ <LinesEllipsis id={ item["id"] } text={ item["title"] } maxLine="1" ellipsis="..." basedOn="letters" /> } titleTypographyProps={{ gutterBottom: true, variant: "h4", component: "div", align: "center" }} /> {/* todo: display creation date of project */}

                        <CardContent>
                          <LinesEllipsis id={ item["id"] } text={ item["brief"] } maxLine="5" ellipsis="..." basedOn="letters" />
                        </CardContent>
                      </Grid>
                    </>
                  ) : (
                    <>
                      <Grid item xs={ 12 } sm={ 12 } md={ 6 }>
                        <CardHeader title={ <LinesEllipsis id={ item["id"] } text={ item["title"] } maxLine="1" ellipsis="..." basedOn="letters" /> } titleTypographyProps={{ gutterBottom: true, variant: "h4", component: "div", align: "center" }} /> {/* todo: display creation date of project */}
                      </Grid>

                      <Grid item xs={ 12 } sm={ 12 } md={ 6 }>
                        <CardContent>
                          <LinesEllipsis id={ item["id"] } text={ item["brief"] } maxLine="5" ellipsis="..." basedOn="letters" />
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
  const { projects } = ProjectInfo;
  const isRetrieved = true;
  const key = "9";
  const value = {
    "title": "9",
    "brief": "Pellentesque pharetra eros pulvinar, aliquam ipsum a, rhoncus velit. Sed dictum lectus varius pharetra convallis. Quisque tempor sagittis lacus, ut gravida odio scelerisque in. Aenean imperdiet nisi at nunc convallis, ut tincidunt nisl fermentum. Nam nisi nulla, gravida ut scelerisque non, interdum a magna. Sed non dui ut nibh semper porta a quis nunc. Duis malesuada fermentum tortor nec pretium. Praesent quis risus est. Etiam ut euismod lectus. Phasellus pellentesque dignissim libero vel gravida. Cras vitae pharetra leo. In vestibulum, nulla quis mattis blandit, sem lectus hendrerit justo, et molestie sem magna eu leo.",
    "tags": [
      "t1",
      "t2",
      "t3",
      "t4",
      "t5",
      "t6",
      "t7"
    ],
    "cover": "images/9.png",
    "id": 9
  }

  console.log(value)

  return (
    <div>
      <Grid container spacing={ 0 } direction="row" justifyContent="center" alignItems="center">
          {
            (! isRetrieved) ? (
              <LoadingSpinner />
            ) : (
              <Grid item xs={ 10 } container spacing={ 4 } direction="row" justifyContent="center" alignItems="center">
                {/*{*/}
                {/*  projects && Object.entries(projects).map(([key, value]) =>*/}
                {/*    numToLoad >= toInt(key, 10) && (*/}
                {/*      <Grid item xs={ 12 } sm={ 12 } md={ 6 } key={ key }>*/}
                {/*        { getCard(value) }*/}
                {/*      </Grid>*/}
                {/*    )*/}
                {/*  )*/}
                {/*}*/}
                <Grid item xs={ 12 } sm={ 12 } md={ 6 } key={ key }>
                  { getCard(value) }
                </Grid>
                <Grid item xs={ 12 } sm={ 12 } md={ 6 } key={ key }>
                  { getCard(value) }
                </Grid>
                <Grid item xs={ 12 } sm={ 12 } md={ 6 } key={ key }>
                  { getCard(value) }
                </Grid>
                <Grid item xs={ 12 } sm={ 12 } md={ 6 } key={ key }>
                  { getCard(value) }
                </Grid>
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
