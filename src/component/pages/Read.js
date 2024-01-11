import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const Read = () => {
  // 2nd step create hook to store data in react varible to show on screen
  const [allData, setAllData] = useState([]);
  // 1st step to get data from json ,call in-useeffect
  async function getData() {
    let result = await fetch(`http://localhost:3030/users`);
    let data = await result.json();
    console.log(data);
    setAllData(data);
  }
  useEffect(() => {
    getData();
  }, []);
  async function handleDelete(id) {
    let result = await fetch(`http://localhost:3030/users/${id}`, {
      method: "delete",
    });
    // 7th step use getdata() for stop  manual refresh after delete
    getData();
  }
  //   for local storage created function=>
  let setToLocalStorage = (id, name, email, mobile) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", mobile);
  };

  return (
    // 3rd step to show data in table
    <Layout>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* 4th step to data show with map method start*/}
          {allData.map((value, i) => {
            // destructing of object=>
            let { id, name, email, mobile } = value;
            return (
              <>
                <tr key={i}>
                  {/* we use i=i+1 to menage serial number we we use id then id will be delet with his id num */}
                  <th>{(i = i + 1)}</th>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{mobile}</td>
                  {/* 6th step update delete button functioning  */}
                  <td>
                    <Button
                      className="btn btn-success"
                      //   on click ()=>(setToLocalStorage) we go to next page and update the json data of clicked id on local storage
                      onClick={() => setToLocalStorage(id, name, email, mobile)}
                    >
                      <Link to="/update"> Update</Link>
                    </Button>
                    &nbsp;
                    <Button
                      className="btn btn-danger"
                      onClick={() => {
                        // window method is use for confirmation before delete id
                        if (window.confirm("Are you sure to delete ??")) {
                          handleDelete(id);
                        }
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </>
            );
          })}
          {/* data show map method end */}
        </tbody>
      </table>
    </Layout>
  );
};

export default Read;
// for updata data we will create new update component.....
