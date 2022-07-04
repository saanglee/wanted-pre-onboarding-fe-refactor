import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/base/Layout";
import Feeds from "../components/feed/Feeds";
import Axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [feeds, setFeeds] = useState();
  const path = `${process.env.PUBLIC_URL}/data/feedData.json`;

  useEffect(() => {
    if (!localStorage.getItem("email")) {
      alert("로그인 해주세요.");
      navigate("/login");
    }

    const fetchData = async () => {
      try {
        const result = await Axios(path);
        setFeeds(result.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="main">
        <Feeds data={feeds} />
      </div>
    </Layout>
  );
};

export default Home;
