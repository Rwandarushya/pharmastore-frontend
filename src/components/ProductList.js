import React, {Fragment, useEffect, useState} from 'react';

import EditProduct from './EditProduct'

function ProductList(){

    const [products, setProducts]= useState([]);

    //Delete product
    const deleteProduct = async(id)=>{
        try {
            const deleteProduct= await fetch(`http://localhost:5000/products/${id}`,{
                method: 'DELETE'
            })
            console.log(deleteProduct);

            setProducts(products.filter(pro => pro.id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    const getProducts = async()=>{
        try {
            const response= await fetch('http://localhost:5000/products');
            const jsonData = await response.json();
            
            setProducts(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }
    useEffect(()=>{
        getProducts();
    },[])
    return(
        <Fragment>
            <h1>List of Product</h1>
            <table className="table mt-5 text-center" >
    <thead>
      <tr>
        <th>Product name</th>
        <th>Quantity</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {products.map(pro => (
            <tr key={pro.id}>
                <td>{pro.productName}</td>
                <td>{pro.productType}</td>
                <td>{pro.quantity}</td>
                <td><EditProduct pro={pro}/></td>
                <td><button className='btn btn-danger' onClick={()=>deleteProduct(pro.id)}>Delete</button></td>
            </tr>)
        )}
        {/* <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr> */}
    </tbody>
  </table>
        </Fragment>
    );
}

export default ProductList;