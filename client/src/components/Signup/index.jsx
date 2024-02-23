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
import { signupUser } from "../../services/signup-user-slice";

const Signup = () => {
  const dispatch = useDispatch();

  const [userDetail, setUserDetail] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSignup = async () => {
    try {
      await dispatch(signupUser(userDetail)).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography>Welcome</Typography>
        <Typography>Let&apos;s get started by signing you up!</Typography>
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
            type="email"
            label="Email"
            variant="outlined"
            value={userDetail.email}
            onChange={(e) =>
              setUserDetail({ ...userDetail, email: e.target.value })
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
          <Button variant="contained" onClick={handleSignup}>
            Signup
          </Button>
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
