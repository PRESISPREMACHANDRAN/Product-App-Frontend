import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

const ViewAll = () => {
  const [data, changeData] = useState({
    products: [],
    total: 100,
    skip: 0,
    limit: 30,
  });

  const fetchData = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      changeData(response.data);
    });


  };

  useEffect(()=>{fetchData()},[])
  return (
    <div>
      <Header />

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              {data.products.map((value, index) => {
                return (
                  <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex allign-items-stretch">
                    <div class="card">
                      <img
                        src={value.thumbnail}
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">{value.title}</h5>
                        <p class="card-text">{value.description}</p>
                        <p class="card-text">Price: {value.price}</p>
                        <p class="card-text">Brand: {value.brand}</p>
                        <p class="card-text">category:{value.category}</p>
                        <p class="card-text">
                          discount Percentage: {value.discountPercentage}
                        </p>
                        <p class="card-text">Rating : {value.rating}</p>
                        <p class="card-text">stock: {value.stock}</p>
                        <img
                          src={value.images[0]}
                          class="card-img-top"
                          alt="image1"
                        />
                        <img
                          src={value.images[1]}
                          class="card-img-top"
                          alt="image2"
                        />
                        <img
                          src={value.images[2]}
                          class="card-img-top"
                          alt="image3"
                        />
                        <img
                          src={value.images[3]}
                          class="card-img-top"
                          alt="image4"
                        />
                        <img
                          src={value.images[4]}
                          class="card-img-top"
                          alt="image5"
                        />
                        <a href="#" class="btn btn-primary">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
