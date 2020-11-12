import React, {Fragment} from 'react'
import NavBar from '../components/NavBar'
import ProductList from '../components/ProductList'
import AddToList from '../components/AddToList'

function ListPage(){
    return(
        <Fragment>
            <NavBar/>
            <AddToList/>
            <ProductList/>
        </Fragment>
    );
}

export default ListPage;
