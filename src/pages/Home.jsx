import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserState } from '../store/auth/provider';
import Layout from '../layout';
import Feeds from '../components/feed/Feeds';
import Axios from 'axios';
import PullToRefresh from 'react-simple-pull-to-refresh';

const Home = () => {
  const [feeds, setFeeds] = useState();
  const path = `${process.env.PUBLIC_URL}/data/feedData.json`;

  const fetchData = async () => {
    try {
      const result = await Axios(path);
      setFeeds(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="main">
        <PullToRefresh onRefresh={() => fetchData()}>
          <Feeds data={feeds} />
        </PullToRefresh>
      </div>
    </Layout>
  );
};

export default Home;
