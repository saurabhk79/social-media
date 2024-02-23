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

const Login = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography>Welcome back!</Typography>
        <Typography>Let&apos;s get back you online!</Typography>
        <Stack>
          <TextField type="text" label="Username" variant="outlined" />
          <TextField type="text" label="Password" variant="outlined" />
          <Button variant={"contained"}>Login</Button>
        </Stack>
        <Box>
          <Typography>
            New user? <br /> click here to <Link to={"/signup"}>signup</Link>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Login;
