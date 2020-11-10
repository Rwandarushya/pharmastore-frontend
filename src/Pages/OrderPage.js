import React, {Fragment} from 'react'

//Order pages components

import CreateProduct from '../components/CreateProduct'
import ProductList from '../components/ProductList';

function OrderPage() {
    return (
      <div className="App">
        <Fragment>
          <div className="container">
          <CreateProduct/>
          <ProductList/>
          </div>
        </Fragment>
      </div>
    );
  }
  
  export default OrderPage;
