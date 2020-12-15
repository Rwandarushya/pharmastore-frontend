import React, { Fragment, useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

import NavBar from './NavBar';

function CreateProduct() {

	const filterOptions = createFilterOptions({
		limit:6
		
	});

	const [ productList, setProductList ] = useState([]);
	const getProducts = async () => {
		try {
			const response = await fetch('http://localhost:5000/list');
			const jsonData = await response.json();

			setProductList(jsonData);
		} catch (err) {
			console.error(err.message);
		}
	};
	useEffect(() => {
		getProducts();
	}, []);

	const [ product, setProduct ] = useState({
		productName: '',
		quantity: 0,
		description: '',
		email: localStorage.getItem('email')
	});



	const handleChange = (e) => {
		setProduct({
			...product,
			[e.target.name]: e.target.value
		});
	};

	//update quantity function
	const saveProduct = async (e) => {
		e.preventDefault();
		try {
			const body = product;
			const resp = await fetch(`http://localhost:5000/products`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body)
			});
			window.location = '/order';
		} catch (err) {
			console.error(err.message);
		}
	};

	// console.log(localStorage.getItem('user'));

	return (
		<Fragment>
			<NavBar />
			<h3 className="text-centern mt-5">Make a list of all Pharmaceutical Products you want to order</h3>
			<div className="d-flex mt-5">
				<Autocomplete
					onChange={(event, newValue) => {
						if (typeof newValue === 'string') {
							setProduct({
								...product,
								productName: newValue
							});
						} else if (newValue && newValue.inputValue) {
							// Create a new value from the user input
							setProduct({
								...product,
								productName: newValue.inputValue
							});
						} else {
							setProduct(newValue);
						}
					}}
					filterOptions={filterOptions}
					selectOnFocus
					clearOnBlur
					handleHomeEndKeys
					id="free-solo-with-text-demo"
					options={productList.map((option) => option.productName)}
					style={{ width: '80vw' }}
					freeSolo
					renderInput={(params) => <TextField 
						{...params} 
						label="Enter product name" 
						variant="outlined" 
						value={product.productName}
						onChange={handleChange}
						name="productName"
						/>}
				/>

				{/* <input
          type="text"
          className="form-control"
          value={product.productName}
          onChange={handleChange}
          name="productName"
        /> */}

				<button type="button" className="btn btn-primary add-btn" data-toggle="modal" data-target="#myModal">
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
								<button type="button" className="btn btn-danger" data-dismiss="modal">
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
