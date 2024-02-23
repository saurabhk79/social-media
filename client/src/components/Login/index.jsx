import {
  Card,
  CardContent,
  TextField,
  Stack,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../services/login-user-slice";

const Login = () => {
  const dispatch = useDispatch();

  const [userDetail, setUserDetail] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      await dispatch(loginUser(userDetail)).unwrap();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography>Welcome back!</Typography>
        <Typography>Let&apos;s get back you online!</Typography>
        <Stack>
          <TextField
            type="text"
            label="Username"
            variant="outlined"
            value={userDetail.username}
            onChange={(e) =>
              setUserDetail({ ...userDetail, username: e.target.value })
            }
          />
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            value={userDetail.password}
            onChange={(e) =>
              setUserDetail({ ...userDetail, password: e.target.value })
            }
          />
          <Button variant={"contained"} onClick={handleLogin}>Login</Button>
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
