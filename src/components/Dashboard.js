import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import UserComponet from '../components/UserComponent';
import ListComponent from '../components/ListComponent';

function AdminMenu() {
	const [ state, setState ] = useState({
		currentPanel: 'userPannel'
	});

	const goToListPannel = () => {
		setState({
			currentPanel: 'listPannel'
		});
	};

	const goToUserPannel = () => {
		setState({
			currentPanel: 'userPannel'
		});
	};


	return (
		<Fragment>
			<div className="jumbotron">
				<div className="row w-100">
					<div className="col-md-6">
						<div className="card border-info mx-sm-1 p-3" onClick={goToUserPannel}>
							<div className="card border-info shadow text-info p-3 my-card">
								<span className="fa fa-users" aria-hidden="true" />
							</div>
							<div className="text-info text-center mt-3">
								<h4>Users</h4>
							</div>
							<div className="text-info text-center mt-2">
								<h1>234</h1>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="card border-success mx-sm-1 p-3" onClick={goToListPannel}>
							<div className="card border-success shadow text-success p-3 my-card">
								<span className="fa fa-syringe" aria-hidden="true" />
							</div>
							<div className="text-success text-center mt-3">
								<h4>Products</h4>
							</div>
							<div className="text-success text-center mt-2">
								<h1>9332</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				{state.currentPanel === 'userPannel' ? (
					<UserComponet />
				) :
					<ListComponent />}
			</div>
		</Fragment>
	);
}

export default AdminMenu;
