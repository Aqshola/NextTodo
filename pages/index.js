import Todo from "../components/todo";
import Auth from "../components/auth";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "../redux/actions/auth";

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(loadUser());
  }, [loadUser]);

  return state.islogged ? <Todo /> : <Auth />;
}
