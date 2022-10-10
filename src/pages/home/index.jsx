import React, { Suspense } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Avatar, Grid, Box, Typography, Stack, IconButton, Chip, Paper, Button, Tooltip } from '@mui/material';
import { Email, LinkedIn, GitHub, KeyboardArrowRight } from '@mui/icons-material';
import Page from '../../components/page';
import Loading from '../../pages/loading';
import { TooltipTag } from '../../utils/styled-components';

const Home = () => { // todo: maybe use timeline to display education or experience

  // const { name, email, linkedin, github, bio, tags } = props.info;

  const name = "Name";
  const email = "first_name.last_name@email.address";
  const linkedin = "https://www.linkedin.com";
  const github = "https://github.com";
  const bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam eu lacus convallis lacinia. Nulla facilisi. Praesent vestibulum vitae arcu ac blandit. Sed vitae ligula luctus, euismod lacus non, dignissim ipsum. Mauris maximus hendrerit malesuada. Suspendisse egestas leo justo. Cras non ultrices ipsum. Cras vel elementum tellus, sit amet aliquet magna. Aenean sollicitudin varius dolor in lacinia. Morbi quis cursus ligula, a dapibus lacus. Aenean ultrices odio id nisi elementum, at blandit libero vehicula. Ut fermentum ornare nunc ut viverra. Nam vitae ultricies enim. Donec vitae sem arcu. Vestibulum placerat efficitur consectetur.";
  const tags = ["React", "create-react-app", "MUI", "Axios", "Python", "Java", "Spark", "Kafka", "Git"];

  return (
    <Page>

      <Grid container spacing={ 0 } direction="column" justifyContent="center" alignItems="center">

        <Grid item xs={ 12 } sx={{ mt: 5 }}>
          <Avatar alt={ name } src={`${process.env.PUBLIC_URL}/images/monika.jpg`} sx={{ width: 200, height: 200, bgcolor: "#9CF", fontSize: 64 }}>{ name }</Avatar>
        </Grid>

        <Grid item xs={ 12 } sx={{ mt: 3 }}>
          <Typography variant="h2" component="div">{ name }</Typography>
        </Grid>

        <Grid item xs={ 12 } sx={{ mb: 2 }}>
          <Stack spacing={ 3 } direction="row" justifyContent="center" alignItems="center">
            <Tooltip title={ <><TooltipTag>Email</TooltipTag><TooltipTag>first_name.last_name@email.address</TooltipTag></> } arrow leaveDelay={ 500 }>
              <IconButton edge="start" color="inherit" aria-label="Email" variant="div" target="_blank" rel="noopener noreferrer" href={`mailto:${email}`}>
                <Email sx={{ fontSize: 40 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn" arrow>
              <IconButton edge="start" color="inherit" aria-label="LinkedIn" variant="div" target="_blank" rel="noopener noreferrer" href={ linkedin }>
                <LinkedIn sx={{ fontSize: 40 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="GitHub" arrow>
              <IconButton edge="start" color="inherit" aria-label="GitHub" variant="div" target="_blank" rel="noopener noreferrer" href={ github }>
                <GitHub sx={{ fontSize: 40 }} />
              </IconButton>
            </Tooltip>
          </Stack>
        </Grid>

        <Grid item xs={ 12 } sx={{ mx: 2 }}>
          <Typography variant="body1" component="div" gutterBottom align="justify" sx={{ width: "100%", minWidth: 300, maxWidth: 500 }}>{ bio }</Typography>
        </Grid>

        <Grid item xs={ 12 } sx={{ mx: 2, my: 3 }}>
          <Paper component="ul" elevation={ 8 } sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", listStyle: "none", p: 2, m: 0, width: "100%", minWidth: 300, maxWidth: 500 }}>
            <Stack spacing={ 1 } direction="column" justifyContent="center" alignItems="center">
              <Typography variant="h4" component="div" gutterBottom align="center">Interests/Skills (Tags)</Typography>
              <Box component="div" sx={{ textAlign: "center" }}>
                {
                  tags.map((tag, idx) => {
                      return (
                        <Chip label={tag} key={idx} component="li" sx={{ m: 1 }} />
                      );
                    }
                  )
                }
              </Box>
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={ 12 } sx={{ mt: 6, mb: 8 }}> {/* todo: load more projects in real-time on home page while scrolling */}
          <Typography variant="h4" component="div" gutterBottom align="center" sx={{ mb: 6 }}>Selected Projects</Typography> {/* todo: display project in time order */}
            <Suspense fallback={ <Loading /> }>
              {/*<ProjectList numToLoad={ 4 } />*/}
            </Suspense>
          <Stack spacing={ 0 } direction="column" justifyContent="center" alignItems="center" sx={{ mx: 2 }}>
            <Button variant="outlined" size="medium" endIcon={ <KeyboardArrowRight /> } component={ RouterLink } to={ "/projects" } sx={{ mt: 6 }}>
              More Projects
            </Button>
          </Stack>
        </Grid>

      </Grid>

    </Page>
  );
};

export default Home;
