import React from "react";
import Main from "../components/Main/Main";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFavoritesTotal } from "../store/slices/navMenuSlice";

const Home = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.data);

  useEffect(() => {
    dispatch(setFavoritesTotal(favorites.length));
  }, [dispatch, favorites]);
  
  return (
    <>
      <Main />
    </>
  );
};

export { Home };
