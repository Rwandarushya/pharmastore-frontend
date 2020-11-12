import React, { Fragment, useState } from "react";

import NavBar from "./NavBar";
import AutoComplete from './Autocomplete'

function CreateProduct() {
  const [product, setProduct] = useState({
    productName: "",
    quantity: 0,
    description: "",
  });
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  //update quantity function
  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      const body = product;
      const resp = await fetch(`http://localhost:5000/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/order";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <NavBar />
      <h5 className="text-centern mt-5">
        Add Pharmaceutical Product you want to order
      </h5>
      <div className="d-flex mt-5">
        <AutoComplete
        />
        {/* <input
          type="text"
          className="form-control"
          value={product.productName}
          onChange={handleChange}
          name="productName"
        /> */}

        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#myModal"
        >
          Add
        </button>

        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add new Pharmaceutical Product</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <label>Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  value={product.quantity}
                  onChange={handleChange}
                  name="quantity"
                />

                <label>Product Description</label>
                <input
                  type="text"
                  className="form-control"
                  value={product.description}
                  onChange={handleChange}
                  name="description"
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-dismiss="modal"
                  onClick={(e) => saveProduct(e)}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CreateProduct;
