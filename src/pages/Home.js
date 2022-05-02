import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../components/Nav";
import ProfileCard from "../components/ProfileCard";
import Repository from "../components/Repository";
import Search from "../components/Search";

import {
  fetchProfileAction,
  fetchReposAction,
} from "../redux/features/postSlice";

import { UserAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = UserAuth();
  const { reloadUserInfo } = user;
  const userName = reloadUserInfo.screenName;

  const [inputText, setInputText] = useState("");
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };
  //dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReposAction(userName));
    dispatch(fetchProfileAction(userName));
  }, [dispatch, userName]);

  //get data from store
  const store = useSelector((state) => state?.repos);

  const { loading, reposList, profile, error } = store;
  return (
    <div>
      <Nav reposList={reposList} />
      <ProfileCard loading={loading} error={error} profile={profile} />
      <Search inputHandler={inputHandler} />
      <Repository reposList={reposList} inputText={inputText} />
    </div>
  );
};

export default Home;
