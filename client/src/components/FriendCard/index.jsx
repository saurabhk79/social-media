/* eslint-disable react/prop-types */
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

const FriendCard = ({ isFriend }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Stack direction={"row"}>
          <Stack direction={"row"}>
            <Avatar alt={"name"} src="#" />
            <Typography>Name</Typography>
          </Stack>
          {!isFriend ? <Button variant="contained">Make friend</Button> : <></>}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default FriendCard;
