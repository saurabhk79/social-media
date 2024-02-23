import { Card, CardContent, Divider, Stack, Typography } from "@mui/material";

const PostsCard = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography>Friends</Typography>
        <Divider />
        <Stack>
          <Typography>No Posts available! Start by following!</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PostsCard;
