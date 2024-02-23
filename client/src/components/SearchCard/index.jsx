import { Card, CardContent, Divider, Stack, TextField } from "@mui/material";

const SearchCard = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <TextField type="text" placeholder="Type to search..." />
        <Divider />
        <Stack>
            No searches...
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SearchCard;
