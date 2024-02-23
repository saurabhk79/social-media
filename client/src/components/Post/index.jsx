import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

const Post = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Stack>
          <Avatar alt={"name"} src="#" />
          <Typography>Name</Typography>
        </Stack>

        <Typography>Post is here!</Typography>
      </CardContent>
      <CardActions>
        <Stack>
          <Button>Like</Button>
          <Button>Dislike</Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default Post;
