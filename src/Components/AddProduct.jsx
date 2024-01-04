import React, { useState } from 'react'
import Header from './Header'

const AddProduct = () => {

  
  const [input, changeInput] = useState({
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    thumbnail: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: ""
  });

  const readValue=(e)=>{
    changeInput({...input,[e.target.name]:e.target.value})
  }

  const submitValue=()=>{
    console.log(input)
  }
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col-col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={input.title}
                  onChange={readValue}
                />
              </div>
              <div className="col-col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  value={input.description}
                  onChange={readValue}
                />
              </div>
              <div className="col-col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  value={input.price}
                  onChange={readValue}
                />
              </div>
              <div className="col-col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Discount Percentage
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="discountPercentage"
                  value={input.discountPercentage}
                  onChange={readValue}
                />
              </div>
              <div className="col-col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Brand
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="brand"
                  value={input.brand}
                  onChange={readValue}
                />
              </div>
              <div className="col-col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Category of the product
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="category"
                  value={input.category}
                  onChange={readValue}
                />
              </div>

              <div className="col-col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Rating
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="rating"
                  value={input.rating}
                  onChange={readValue}
                />
              </div>
              <div className="col-col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Stock
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="stock"
                  value={input.stock}
                  onChange={readValue}
                />
              </div>
              <div className="col-col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Add Thumbnail image
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="thumbnail"
                  value={input.thumbnail}
                  onChange={readValue}
                />
              </div>
              <div className="col-col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Add image 1
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="image1"
                  value={input.image1}
                  onChange={readValue}
                />
              </div>
              <div className="col-col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Add image 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="image2"
                  value={input.image2}
                  onChange={readValue}
                />
              </div>
              <div className="col-col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Add image 3
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="image3"
                  value={input.image3}
                  onChange={readValue}
                />
              </div>
              <div className="col-col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Add image 4
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="image4"
                  value={input.image4}
                  onChange={readValue}
                />
              </div>
              <div className="col-col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Add image 5
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="image5"
                  value={input.image5}
                  onChange={readValue}
                />
              </div>
              <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={submitValue}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct