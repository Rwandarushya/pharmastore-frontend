import React, { useState,useEffect} from 'react'

import EditProduct from './EditProduct'

function AdminBody(){

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
		<div>
            <h1>List of all Pharmastore users</h1>
            <table className="table mt-5 text-center" >
    <thead>
      <tr>
        <th>Product name</th>
        <th>Description</th>
        <th>Quantity</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {products.map(pro => (
            <tr key={pro.id}>
                <td>{pro.productName}</td>
                <td>{pro.description}</td>
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
        </div>
    );
}

export default AdminBody
