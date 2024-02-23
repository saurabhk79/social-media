import { Stack } from "@mui/material";
import Profile from "./components/Profile";
import PostsCard from "./components/PostsCard";
import FriendsList from "./components/FriendsList";
import SearchCard from "./components/SearchCard";

export const HomePage = () => {
  return (
    <>
      <Stack>
        <Profile />
        <PostsCard />

        <Stack>
          <FriendsList />
          <SearchCard />
        </Stack>
      </Stack>
    </>
  );
};
