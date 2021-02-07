import Todo from "../components/todo";
import Auth from "../components/auth";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "../redux/actions/auth";
import Head from "next/head";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(loadUser());
  }, [loadUser]);

  return (
    <>
      <Head>
        <title>Todo Next</title>
        <meta
          name="description"
          content="Todo Next || Todo List created using Next.js"
        />
      </Head>
      {state.islogged ? <Todo /> : <Auth />}
    </>
  );
};

export default Home;
