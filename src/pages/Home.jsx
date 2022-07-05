import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserState } from '../store/auth/provider';
import Layout from '../components/base/Layout';
import Feeds from '../components/feed/Feeds';
import Axios from 'axios';

const Home = () => {
  const { token } = useUserState();
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

  // TODO: Routes 폴더에서 라우팅 처리해주기
  return (
    <>
      {!token && <Navigate to="/login" replace={true} />}
      <Layout>
        <div className="main">
          <Feeds data={feeds} />
        </div>
      </Layout>
    </>
  );
};

export default Home;
