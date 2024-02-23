import {
    Avatar,
    Button,
    Card,
    CardContent,
    Divider,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";

const CreatePostCard = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
        <Typography>Create a post</Typography>
        <Divider />
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        />

        <Button variant="contained">Post now!</Button>
    </CardContent>
  </Card>
  )
}

export default CreatePostCard