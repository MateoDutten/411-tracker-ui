import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

function GoalsTable() {
  const columns = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'goal', headerName: 'Goal', width: 150},
    {field: 'date', headerName: 'Date', width: 150},
  ];

  const rows = [
    {id: "1", goal: "asd", date: "123"},
    {id: "2", goal: "asd", date: "123"},
    {id: "3", goal: "asd", date: "321"},
  ];

  return (
    <Container>
      <Typography variant="h3" gutterBottom> Year </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit </Paper>
        </Grid>
      </Grid>
      <Typography variant="h3" gutterBottom> Month </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit </Paper>
        </Grid>
      </Grid>
      <Typography variant="h3" gutterBottom> Week </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper elevation={1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default GoalsTable;