import * as React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import AddGoalButton from './AddGoalButton';

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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : purple[100],
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.primary,
  }));

  return (
    <Container>
      <AddGoalButton timeframe="year"/>
    
      <Stack container spacing={2}>
        <Stack item xs={12}>
          <Item elevation={1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit </Item>
        </Stack>
        <Stack item xs={12}>
          <Item elevation={1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit </Item>
        </Stack>
      </Stack>
      <AddGoalButton timeframe="month"/>
      <Stack container spacing={2}>
        <Stack item xs={12}>
          <Item elevation={1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit </Item>
        </Stack>
        <Stack item xs={12}>
          <Item elevation={1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit </Item>
        </Stack>
      </Stack>
      <AddGoalButton timeframe="week"/>
      <Stack container spacing={2}>
        <Stack item xs={3}>
          <Item elevation={1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit </Item>
        </Stack>
        <Stack item xs={3}>
          <Item elevation={1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit </Item>
        </Stack>
        <Stack item xs={3}>
          <Item elevation={1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit </Item>
        </Stack>
       <Stack item xs={3}>
          <Item elevation={1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit </Item>
        </Stack>
      </Stack>
    </Container>
  );
}

export default GoalsTable;