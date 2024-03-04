import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from '@mui/material/Container';
import GoalsTable from './GoalsTable';
import AddGoalButton from './AddGoalButton';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Container maxWidth="lg">
      <GoalsTable/>
    </Container>
    <AddGoalButton/>
  </React.StrictMode>
);