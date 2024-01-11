import React, { useState } from "react";
import Layout from "../layout/Layout";
import { Form, FormGroup, Label, Input, Button, Toast } from "reactstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // 3rd step=>
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // 5th step to send on another page=>
  const navigate = useNavigate();
  // 2nd step=>
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("please enter the email", { autoClose: 1000 });
    } else if (!password) {
      toast.error("please enter the password", { autoClose: 1000 });
    } else {
      // 1st way to match data:=>
      // fetch(`http://localhost:3030/users?email=${email}`)
      //   .then((respons) => {
      //     return respons.json();
      //   })
      //   .then((resp) => {
      //     console.log(resp);
      //   });
      // 4th step=>
      // 2nd way to match data
      let result = await fetch(`http://localhost:3030/users?email=${email}`);
      let data = await result.json();
      console.log(data);
      // 6th step to empty box for next entry=>
      setEmail("");
      setPassword("");

      toast.success("login successful", { autoClose: 1000 });
      // for send on another page:=>
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  return (
    // 1st step=>
    <Layout>
      <div className="row ">
        <div className="col-md-9 col-lg-9 col-sm-9">
          <img
            src="../images/ecom.jpg"
            alt=""
            style={{ width: "100%", height: "110%" }}
          />
        </div>
        <div className="col-md-3 col-lg-3 col-sm-3">
          <Form onSubmit={handleSubmit}>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="examplePassword"
                placeholder="enter your password"
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

export default Login;
