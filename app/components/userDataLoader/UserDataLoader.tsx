'use client'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { fetchUserData } from "@/app/state/slices/userSlice";

export const UserDataLoader = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.user);
  if (error) console.log(error)

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return null; // This component only fetches data
};
