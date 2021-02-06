import Todo from "../components/todo";
import Auth from "../components/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
export default function Home() {
  const state = useSelector((state) => state.auth);

  return state.islogged ? <Todo /> : <Auth />;
}
