// import { Link } from 'gatsby';
import React from 'react';
import Container from '../components/Container';
import Layout from '../components/Layout';
import stylesContainer from '../components/Container.module.scss';

const IndexPage = () => (
  <Layout>
    <Container>
      <h2 className={stylesContainer.offset}>Changelog</h2>
    </Container>
  </Layout>
);

export default IndexPage;
