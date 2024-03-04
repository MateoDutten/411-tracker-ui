import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {FlagOutlined} from "@mui/icons-material";
import {createStyles} from "@mui/material";

function AddGoalForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    fetch('http://localhost:3000/goals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        goal: data.get('goal'),
        timeframe: data.get('timeframe'),
        date: data.get('date'),
      }),
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  const styles = {
    container_box: {
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: 1,
      backgroundColor: 'secondary.main',
    },
    container_box_box: {
      mt: 1
    },
    container_box_box_button: {
      mt: 3,
      mb: 2
    }
  }

  return (
    <Container component="main" maxWidth="xs" role='form'>
      <Box sx={styles.container_box}>
        <Avatar sx={styles.avatar}>
          <FlagOutlined/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Goal
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={styles.container_box_box}>
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
            label="Date"
            id="date"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={styles.container_box_box_button}
          >
            Save Goal
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default AddGoalForm;
