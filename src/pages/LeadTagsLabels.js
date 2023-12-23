import React from 'react';
import { Container, Paper, Typography, Grid,Avatar } from '@mui/material';
import { styled } from '@mui/system';
import Layout from '../components/Layout';


const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const useStyles = styled((theme) => ({
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const LeadTagsLabels= () => {
  const classes = useStyles();

  return (
    <Layout>
    <StyledContainer maxWidth="md">
      <StyledPaper elevation={3}>
         <Typography variant="h4" gutterBottom>
          Lead Tags or Labels
          </Typography>
        <Grid container spacing={3}>
        <Grid item xs={200} sm={6}>
            <Typography variant="subtitle1">Lead Id / Name: </Typography>
          </Grid>
          <Grid item xs={200} sm={6}>
            <Typography variant="subtitle1">Tag Lable Name: </Typography>
          </Grid>
            <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Tag Description: </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Tag Category: </Typography>
          </Grid>
          <Grid item xs={12} sm={6}> 
            <Typography variant="subtitle1">Assigned by: </Typography>
          </Grid>
          <Grid item xs={12} sm={6}> 
            <Typography variant="subtitle1">Date Assigned: </Typography>
          </Grid>
          <Grid item xs={12} sm={6}> 
            <Typography variant="subtitle1">Usage/Contest: </Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </StyledContainer>
    </Layout>
  );
};
export default LeadTagsLabels;



