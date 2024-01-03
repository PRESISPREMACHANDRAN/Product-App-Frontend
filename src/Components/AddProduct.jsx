import React from 'react'
import Header from './Header'

const AddProduct = () => {
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
                <input type="text" className="form-control" />
              </div>
              <div className="col-col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Description
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Price
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">Discount Percentage</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Brand
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Category of the product
                </label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">Rating</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">Stock</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct