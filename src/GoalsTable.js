import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';

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
    <div style={{height: 200, width: '100%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooter={true}
        checkboxSelection
      />
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooter={true}
        checkboxSelection
      />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <DataGrid
            rows={rows}
            columns={columns}
            hideFooter={true}
            checkboxSelection
          />
        </Grid>
        <Grid item xs={3}>
          <DataGrid
            rows={rows}
            columns={columns}
            hideFooter={true}
            checkboxSelection
          />
        </Grid>
        <Grid item xs={3}>
          <DataGrid
            rows={rows}
            columns={columns}
            hideFooter={true}
            checkboxSelection
          />
        </Grid>
        <Grid item xs={3}>
          <DataGrid
            rows={rows}
            columns={columns}
            hideFooter={true}
            checkboxSelection
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default GoalsTable;