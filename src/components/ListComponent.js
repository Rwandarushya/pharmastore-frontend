import React from 'react'

import ProductList from "../components/ProductList";
import AddToList from "../components/AddToList";

const ListComponent= ()=>{
    return(
        <div>
        <AddToList />
        <ProductList />
        </div>
    );
}

export default ListComponent;