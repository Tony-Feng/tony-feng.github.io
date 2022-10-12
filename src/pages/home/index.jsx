import React, { Suspense, useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Avatar, Grid, Box, Typography, Stack, IconButton, Chip, Paper, Button, Tooltip } from '@mui/material';
import { Email, LinkedIn, GitHub, KeyboardArrowRight } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import Page from '../../components/page';
import Loading from '../../pages/loading';
import ProjectList from '../../components/project-list';
import { TooltipTag } from '../../utils/styled-components';
import { computeWidth } from '../../utils/shared-functions';
import images from '../../assets/images';

const Home = () => { // todo: maybe use timeline to display education or experience

  const [groupWidth, setGroupWidth] = useState(
    {
      page: computeWidth(0.05),
      avatar: computeWidth(0.43),
      text: computeWidth(0.37)
    }
  );

  const userInfo = useSelector(state => state.userInfoRdc.userInfo);
  const { name, email, linkedin, github, bio, tags } = userInfo;

  const { userAvatar } = images;

  const handleWindowChange = () => {
    setGroupWidth(
      {
        page: computeWidth(0.05),
        avatar: computeWidth(0.43),
        text: computeWidth(0.37)
      }
    );
  };

  useEffect(() => {
      handleWindowChange();
      window.addEventListener("resize", handleWindowChange);

      return () => {
        window.removeEventListener("resize", handleWindowChange);
      };
    }, []
  );

  return (
    <Page>

      <Grid container spacing={ 0 } direction="column" justifyContent="center" alignItems="center" sx={{ width: `${groupWidth["page"]}px`, maxWidth: `${groupWidth["page"]}px` }}>

        <Grid item xs={ 12 } sx={{ mt: 5 }}>
          {/*<Avatar alt={ name } src={ userAvatar } align="center" sx={{ bgcolor: "#9CF", width: `${groupWidth["avatar"]}px`, height: `${groupWidth["avatar"]}px`, fontSize: "4vw", objectFit: "contain" }}>{ name }</Avatar>*/}
          <Avatar alt={ name } src={ userAvatar } align="center" sx={{ bgcolor: "#9CF", width: "15vw", height: "15vw", fontSize: "4vw", objectFit: "contain" }}>{ name }</Avatar>
        </Grid>

        <Grid item xs={ 12 } sx={{ mt: 3 }}>
          {/*<Typography variant="h2" component="div" align="center" sx={{ width: "40vw" }}>{ name }</Typography>*/}
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
          {/*<Typography variant="body1" component="div" gutterBottom align="justify" sx={{ width: `${groupWidth["text"]}px`, whiteSpace: "pre-line", objectFit: "contain" }}>{ bio }</Typography>*/}
          {/*<Typography variant="body1" component="div" gutterBottom align="justify" sx={{ width: "32vw", whiteSpace: "pre-line", objectFit: "contain" }}>{ bio }</Typography>*/}
          <Typography variant="h6" component="div" gutterBottom align="justify" sx={{ width: "42vw", whiteSpace: "pre-line", objectFit: "contain" }}>{ bio }</Typography>
        </Grid>

        <Grid item xs={ 12 } sx={{ mx: 2, my: 3 }}>
          {/*<Paper component="ul" elevation={ 8 } sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", listStyle: "none", p: 2, m: 0, width: `${groupWidth["text"]}px`, objectFit: "contain" }}>*/}
          <Paper component="ul" elevation={ 8 } sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", listStyle: "none", p: 2, m: 0, width: "42vw", objectFit: "contain" }}>
            <Stack spacing={ 1 } direction="column" justifyContent="center" alignItems="center">
              <Typography variant="h4" component="div" gutterBottom align="center">Skills</Typography>
              <Box component="div" sx={{ textAlign: "center" }}>
                {
                  tags.map((tag, idx) => {
                      return (
                        // <Chip label={tag} key={idx} component="li" sx={{ m: 1 }} />
                        <Chip label={ <Typography style={{ whiteSpace: "normal" }}>{ tag }</Typography> } key={idx} component="li" sx={{ m: 1 }} />
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
            <ProjectList numToLoad={ 3 } />
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
