import React from 'react'
import Layout from '../component/layout/layout'
import { useAuth } from '../context/auth';
const Homepage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Best offers "}>
      <h1>HomePage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};


export default Homepage