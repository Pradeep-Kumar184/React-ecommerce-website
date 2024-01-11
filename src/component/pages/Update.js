import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Update = () => {
  // we use state for get data from local storage to store in hook variable
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();
  // we use useeffect insted of function
  useEffect(() => {
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setMobile(localStorage.getItem("mobile"));
    setId(localStorage.getItem("id"));
  }, []);
  const handleUpdate = async (e) => {
    // update new information on update form
    e.preventDefault();
    fetch(`http://localhost:3030/users/${id}`, {
      method: "put",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        password: password,
        email: email,
        mobile: mobile,
      }),
    });
    toast.success("update successful", { autoClose: 1000 });
    setTimeout(() => {
      navigate("/read");
    }, 1000);
  };
  return (
    <Layout>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <Form onSubmit={handleUpdate}>
            <FormGroup>
              <span>*</span>
              <Label for="exampleName">Name</Label>
              <Input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                id="exampleMobile"
                placeholder="enter your number"
              />
            </FormGroup>
            <Button color="success" style={{ width: "100%" }}>
              Submit
            </Button>
          </Form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </Layout>
  );
};

export default Update;
