import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { FlagOutlined } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function AddGoalForm() {
    const handleSubmit = (event) => {
        const formdata = new FormData(event.currentTarget);
        const data = {
            goal: formdata.get('goal'),
            timeframe: formdata.get('timeframe'),
            date: formdata.get('date'),
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };

        fetch("http://localhost:8000/goal", options)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <FlagOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Add Goal
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="goal"
                        label="Goal"
                        name="goal"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="timeframe"
                        label="Timeframe"
                        id="timeframe"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="date"
                        type="date"
                        id="date"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Add Goal
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
export default AddGoalForm;