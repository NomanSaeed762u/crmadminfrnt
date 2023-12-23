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

const CompanyInformation = () => {
  const classes = useStyles();

  return (
    <Layout>
    <StyledContainer maxWidth="md">
      <StyledPaper elevation={3}>
      



        <Typography variant="h4" gutterBottom>
          Company Information
        </Typography>
        <Grid container spacing={3}>
        <Grid item xs={200} sm={6}>
            <Typography variant="subtitle1">Company Name: </Typography>
          </Grid>
          <Grid item xs={200} sm={6}>
            <Typography variant="subtitle1">Industry: </Typography>
          </Grid>
            <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Company Size: </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Company Website: </Typography>
          </Grid>
          <Grid item xs={12} sm={6}> 
            <Typography variant="subtitle1">Company Address: </Typography>
          </Grid>
          <Grid item xs={12} sm={6}> 
            <Typography variant="subtitle1">Key Contacts: </Typography>
          </Grid>
          <Grid item xs={12} sm={6}> 
            <Typography variant="subtitle1">Revenue: </Typography>
          </Grid>
          <Grid item xs={12} sm={6}> 
            <Typography variant="subtitle1">Company Description: </Typography>
          </Grid>
          <Grid item xs={12} sm={6}> 
            <Typography variant="subtitle1">Social Media Profiles: </Typography>
          </Grid>
           </Grid>
       
      </StyledPaper>
    </StyledContainer>
    </Layout>
  );
};

export default CompanyInformation;
  