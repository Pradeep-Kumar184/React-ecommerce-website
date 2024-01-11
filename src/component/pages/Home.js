import React, { useState } from "react";
import Layout from "../layout/Layout";
import { Button } from "reactstrap";
import Categories from "../Categories";
const Home = () => {
  const [data, setData] = useState(Categories);
  const filterResult = (item, i) => {
    // console.log(item);
    let newData = Categories.filter((values, i) => {
      return values.category === item;
    });
    setData(newData);
  };
  return (
    <Layout>
      <div className="row pt-3">
        <div className=" col-md-3 ">
          <Button
            className="btn btn-warning w-100 mt-2"
            onClick={() => filterResult("Men")}
          >
            Men
          </Button>
          <Button
            className="btn btn-warning w-100 mt-2"
            onClick={() => filterResult("Women")}
          >
            Women
          </Button>
          <Button
            className="btn btn-warning w-100 mt-2"
            onClick={() => filterResult("Shirts")}
          >
            Shirts
          </Button>
          <Button
            className="btn btn-warning w-100 mt-2"
            onClick={() => setData(Categories)}
          >
            All
          </Button>
        </div>
        <div className="col-md-9">
          <div className="row">
            {data.map((values, i) => {
              let { id, title, price, category, image } = values;
              return (
                <>
                  <div className="col-md-4">
                    {/* card start */}
                    <div className="card" style={{ width: "18rem" }}>
                      <img src={image} className="card-img-top" alt="..." />
                      <div classNames="card-body">
                        <h6 className="card-title">{title}</h6>
                        <h5>Category:{category}</h5>
                        <p>Price:{price}</p>
                        <a href="#" className="btn btn-primary">
                          BUY NOW
                        </a>
                      </div>
                    </div>
                    {/* card end */}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
