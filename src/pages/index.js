import React from "react";
import { css } from 'emotion';

import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <div style={{height: 2000, backgroundColor: 'blue', padding: 40}}>
        <div className={css`
          padding-top: 0;
          @media screen and (min-width: 768px) {
            padding-top: 60px;
          }
          @media screen and (min-width: 1024px) {
            padding-top: 120px;
          }
          `}
          style={{fontSize: 40, color: 'white'}}>
          <h1>Title</h1>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage
