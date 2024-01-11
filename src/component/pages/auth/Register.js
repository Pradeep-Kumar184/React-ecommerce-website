import React, { useState } from "react";
import Layout from "../../layout/Layout";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });
  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    if (!data.name) {
      toast.error("name is requird");
    } else if (!data.email) {
      toast.error("email is requird");
    } else if (!data.password) {
      toast.error("password is requird");
    } else if (!data.mobile) {
      toast.error("mobile num is requird");
    } else {
      fetch(`http://localhost:3030/users `, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(() => {
        toast.success("registration succefull", { autoClose: 1000 });
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      });
    }
    setData({ name: "", email: "", password: "", mobile: "" });
  };

  return (
    <Layout>
      <h1>Register Page</h1>
      <div className="row ">
        <div className="col-md-3 col-lg-3 col-sm-3"></div>
        <div className="col-md-6 col-lg-6 col-sm-6">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <span>*</span>
              <Label for="exampleName">Name</Label>
              <Input
                type="text"
                name="name"
                value={data.name}
                onChange={handleInput}
                id="exampleName"
                placeholder="enter your name"
              />
            </FormGroup>

            <FormGroup>
              <span>*</span>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                value={data.email}
                onChange={handleInput}
                id="exampleEmail"
                placeholder="enter your email"
              />
            </FormGroup>
            <FormGroup>
              <span>*</span>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                value={data.password}
                onChange={handleInput}
                id="examplePassword"
                placeholder="enter your password"
              />
            </FormGroup>

            <FormGroup>
              <span>*</span>
              <Label for="exampleMobile">Mobile</Label>
              <Input
                type="text"
                name="mobile"
                value={data.mobile}
                onChange={handleInput}
                id="exampleMobile"
                placeholder="enter your number"
              />
            </FormGroup>
            <Button color="success" style={{ width: "100%" }}>
              Submit
            </Button>
          </Form>
        </div>
        <div className="col-md-3 col-lg-3 col-sm-3"></div>
      </div>
    </Layout>
  );
};

export default Register;
