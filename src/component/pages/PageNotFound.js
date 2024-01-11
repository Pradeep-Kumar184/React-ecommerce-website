import React from "react";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout>
      <div className="not-found">
        <h1>404</h1>
        <h3> Opps!page not found...</h3>
        <Link to="/">Go Back</Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
