import React from "react";
import Layout from "../layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="row">
        <div className="col-md-6">
          {" "}
          <img src="../images/contactus.jpg" alt="" />
        </div>
        <div
          className="col-md-6"
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h1>
            Email:aptron@gmail.com <br />
            Contact:+917690035208 <br />
            Address:Noida sec-15
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
