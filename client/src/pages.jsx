import { Stack } from "@mui/material";
import Profile from "./components/Profile";
import PostsCard from "./components/PostsCard";
import FriendsList from "./components/FriendsList";
import SearchCard from "./components/SearchCard";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  useEffect(()=> {
    const user = localStorage.getItem("user");

    if (!user) navigate("/login")
  })
  return (
    <>
      <Stack direction={"row"}>
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

export const SignupPage = () => {
  return (
    <div className="page">
        <Signup />
    </div>
  );
};

export const LoginPage = () => {
    return (
      <div className="page">
          <Login />
      </div>
    );
  };
  