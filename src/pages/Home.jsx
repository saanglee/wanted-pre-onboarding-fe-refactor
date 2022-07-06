import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserState } from '../store/auth/provider';
import Layout from '../layout';
import Feeds from '../components/feed/Feeds';
import Axios from 'axios';

const Home = () => {
  const [feeds, setFeeds] = useState();
  const path = `${process.env.PUBLIC_URL}/data/feedData.json`;

  useEffect(() => {
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
