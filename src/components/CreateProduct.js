import React, {Fragment, useState} from 'react';

function CreateProduct(){

    const [productName, setProductName]= useState('');

    const onSubmitForm = async(e)=>{
        e.preventDefault();
        try {
            const body={productName};

            const response = await fetch("http://localhost:5000/products", {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
            
        } catch (err) {
            console.error(err.message)
        }
    }

    return(
        <Fragment>
            <h1 className='text-centern mt-5'>Create Product</h1>
            <form className='d-flex mt-5' onSubmit= {onSubmitForm}>
                <input 
                    type='text' 
                    className='form-control' 
                    value={productName} 
                    onChange={ e =>setProductName(e.target.value)} />
                <button className='btn btn-success'>Add Product</button>
            </form>
        </Fragment>
        
    )
}

export default CreateProduct;