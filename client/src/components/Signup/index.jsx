import {
  Card,
  CardContent,
  TextField,
  Stack,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography>Welcome</Typography>
        <Typography>Let&apos;s get started by signing you up!</Typography>
        <Stack>
          <TextField type="text" label="Username" variant="outlined" />
          <TextField type="text" label="Email" variant="outlined" />
          <TextField type="text" label="Password" variant="outlined" />
          <Button>Signup</Button>
        </Stack>
        <Box>
          <Typography>
            Want to login? <br /> click here to <Link to={"/login"}>login</Link>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Signup;
