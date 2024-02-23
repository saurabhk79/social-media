import { Card, CardContent, Divider, Stack, Typography } from "@mui/material";

const Profile = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography>Friends</Typography>
        <Divider />
        <Stack>
          <Typography>No friends</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Profile;
