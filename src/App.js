import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./component/Posts";
import Pagination from "./component/Pagination";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [curPage, setCurPage] = useState(1);
  const [curPosts, setCurPosts] = useState([]);
  const [postsPerPage] = useState(10);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://jsonplaceholder.typicode.com/posts");
      console.log("res", res);
      setPosts(res.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const indexOfLastPost = curPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPostsArr = posts.slice(indexOfFirstPost, indexOfLastPost);
    setCurPosts(currentPostsArr);
  }, [curPage, postsPerPage, posts]);

  return (
    <div className="container">
      <h1 className="title">Blogs</h1>
      <Posts curPosts={curPosts} loading={loading}></Posts>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        curPage={curPage}
        setCurPage={setCurPage}
      ></Pagination>
    </div>
  );
};

export default App;
