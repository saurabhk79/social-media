import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Avatar,
  Stack,
  Divider,
} from "@mui/material";

const Profile = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Avatar alt={"name"} src="#" />
        <Typography>Saurabh</Typography>
        <Typography>This is my description!</Typography>
        <Stack direction={"row"}>
          <Stack>
            <Typography>Followers</Typography>
            <Typography>199</Typography>
          </Stack>
          <Divider orientation="vertical"></Divider>
          <Stack>
            <Typography>Following</Typography>
            <Typography>199</Typography>
          </Stack>
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small">Logout</Button>
      </CardActions>
    </Card>
  );
};

export default Profile;
