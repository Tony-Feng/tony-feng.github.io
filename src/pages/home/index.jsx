import React, { Suspense } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Avatar, Grid, Box, Typography, Stack, IconButton, Chip, Paper, Button, Tooltip } from '@mui/material';
import { Email, LinkedIn, GitHub, KeyboardArrowRight } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import Page from '../../components/page';
import Loading from '../../pages/loading';
import ProjectList from '../../components/project-list';
import { TooltipTag } from '../../utils/styled-components';
import images from '../../assets/images';

const Home = () => { // todo: maybe use timeline to display education or experience

  const userInfo = useSelector(state => state.userInfoRdc.userInfo);
  const { name, email, linkedin, github, bio, tags } = userInfo;

  const numToLoad = 3; // todo: change to a dynamic value

  const { userAvatar } = images;

  return (
    <Page>

      <Grid container spacing={ 0 } direction="column" justifyContent="center" alignItems="center">

        <Grid item xs={ 12 } sx={{ mt: 5 }}>
          <Avatar alt={ name } src={ userAvatar } align="center" sx={{ bgcolor: "#9CF", width: "15vw", height: "15vw", fontSize: "4vw", objectFit: "contain" }}>{ name }</Avatar>
        </Grid>

        <Grid item xs={ 12 } sx={{ mt: 3 }}>
          <Typography variant="h2" component="div" align="center">{ name }</Typography>
        </Grid>

        <Grid item xs={ 12 } sx={{ mb: 2 }}>
          <Stack spacing={{ xs: 1, sm: 3, md: 3 }} direction={{ xs: "column", sm: "row", md: "row" }} justifyContent="center" alignItems="center" align="center">
            <Tooltip title={ <><TooltipTag>Email</TooltipTag><TooltipTag>{ email }</TooltipTag></> } arrow leaveDelay={ 500 }>
              <IconButton edge="start" color="inherit" aria-label="Email" variant="div" target="_blank" rel="noopener noreferrer" href={`mailto:${email}`} size="small">
                <Email sx={{ fontSize: 40 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn" arrow>
              <IconButton edge="start" color="inherit" aria-label="LinkedIn" variant="div" target="_blank" rel="noopener noreferrer" href={ linkedin } size="small">
                <LinkedIn sx={{ fontSize: 40 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="GitHub" arrow>
              <IconButton edge="start" color="inherit" aria-label="GitHub" variant="div" target="_blank" rel="noopener noreferrer" href={ github } size="small">
                <GitHub sx={{ fontSize: 40 }} />
              </IconButton>
            </Tooltip>
          </Stack>
        </Grid>

        <Grid item xs={ 12 } sx={{ mx: 2 }}>
          <Typography variant="h6" component="div" gutterBottom align="justify" sx={{ width: "42vw", whiteSpace: "pre-line", objectFit: "contain" }}>{ bio }</Typography>
        </Grid>

        <Grid item xs={ 12 } sx={{ mx: 2, my: 3 }}>
          <Paper component="ul" elevation={ 8 } sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", listStyle: "none", p: 2, m: 0, width: "42vw", objectFit: "contain" }}>
            <Stack spacing={ 1 } direction="column" justifyContent="center" alignItems="center">
              <Typography variant="h4" component="div" gutterBottom align="center">Skills</Typography>
              <Box component="div" sx={{ textAlign: "center" }}>
                {
                  tags.map((tag, idx) => {
                      return (
                        <Chip label={ <Typography sx={{ whiteSpace: "normal", lineHeight: "1em" }}>{ tag }</Typography> } key={ idx } component="li" sx={{ m: 1, py: "1.3em" }} /> // todo: fit chip height for text of more than 2 lines
                      );
                    }
                  )
                }
              </Box>
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={ 12 } sx={{ mt: 6, mb: 8 }}> {/* todo: load more projects in real-time on home page while scrolling */}
          <Typography variant="h3" component="div" id="project" gutterBottom align="center" sx={{ mb: 6 }}>Selected Projects</Typography> {/* todo: display project in time order */}
          <Suspense fallback={ <Loading /> }>
            <ProjectList numToLoad={ numToLoad } />
          </Suspense>
          <Stack spacing={ 0 } direction="column" justifyContent="center" alignItems="center" sx={{ mx: 2 }}>
            <Button variant="outlined" size="medium" endIcon={ <KeyboardArrowRight /> } component={ RouterLink } to={ "/projects" } disabled sx={{ mt: 6, objectFit: "contain" }}>
              Stay Tuned for More Projects
            </Button>
          </Stack>
        </Grid>

      </Grid>

    </Page>
  );
};

export default Home;
