import React, {Fragment, useState} from 'react'

function EditProduct({pro}){

    const [quantity, setQuantity]= useState(pro.quantity)

    //update quantity function
    const updateQuantity = async (e)=>{
        e.preventDefault();
        try {
           const body= {quantity};
           const resp= await fetch(`http://localhost:5000/products/${pro.id}`,{
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
           }) 
           window.location='/';
        } catch (err) {
            console.error(err.message);
        }
    }

    return(
        <Fragment>

<button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${pro.id}`}>
  Edit Product
</button>

{/* -- The Modal -- */}
<div className="modal" id={`id${pro.id}`}>
  <div className="modal-dialog">
    <div className="modal-content">

      {/* -- Modal Header --*/}
      <div className="modal-header">
        <h4 className="modal-title">Edit Product</h4>
        <button type="button" className="close" data-dismiss="modal" onClick={()=>setQuantity(pro.quantity)}>&times;</button>
      </div>

      
      <div className="modal-body">
        <input 
            type='text' 
            className='form-control' 
            value={quantity} 
            onChange={e=>setQuantity(e.target.value)}/>
      </div>

      {/* - Modal footer --> */}
      <div className="modal-footer">
        <button 
            type="button" 
            className="btn btn-warning" 
            data-dismiss="modal"
            onClick={e => updateQuantity(e)}
        >Save</button>
        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={()=>setQuantity(pro.quantity)}>Close</button>
      </div>

    </div>
  </div>
</div>
        </Fragment>
    );
}

export default EditProduct;
