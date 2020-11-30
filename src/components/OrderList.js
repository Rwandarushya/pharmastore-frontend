import React, {Fragment, useEffect, useState} from 'react';
import xlsx from 'xlsx'
import {saveAs} from 'file-saver'

import EditProduct from './EditProduct'

function OrderList(){

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
            const user = JSON.parse(localStorage.getItem("user")) 
            const email=user.email;
            const response= await fetch(`http://localhost:5000/products/${email}`);
            const jsonData = await response.json();
            
            setProducts(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }
    useEffect(()=>{
        getProducts();
    },[]);

    // const wb= ;
    // const wbOut=;
  
  const s2ab=(s)=>{
    const buf= new ArrayBuffer(s.length);
    const view= new Uint8Array(buf);
    for (var i=0; i<s.length; i++) view[i]=s.charCodeAt(i) & 0xFF;
    return buf
  }


    
    return(
        <Fragment>
            <h5>List of Product</h5>

            <button id="button-a" className="btn-export mt-5 float-left btn-outline-success"
            onClick={()=>{
                saveAs(new Blob([s2ab(xlsx.write(xlsx.utils.table_to_book(document.getElementById('myTable'),{sheet:"Sheet JS"}), {bookType:'xlsx', bookSST:true, type:'binary'}))],{type:"application/octet-stream"}), 'test.xlsx');
                }}
            > Export to excel</button>
            <table id="myTable" className="table table-responsive-sm text-center" >
    <thead style={{backgroundColor:'#fff'}}>
      <tr>
        <th>Product name</th>
        <th>Description</th>
        <th>Quantity</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody style={{backgroundColor:'#fff'}}>
        {products.map(pro => (
            <tr key={pro.id}>
                <td>{pro.productName}</td>
                <td>{pro.description}</td>
                <td>{pro.quantity}</td>
                <td><EditProduct pro={pro}/></td>
                <td><button className='btn btn-danger btn-sm' onClick={()=>deleteProduct(pro.id)}>Delete</button></td>
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

export default OrderList;