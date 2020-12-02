import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppProvider';

function NavBar() {
	const { state } = useContext(AppContext);
	const url = null;

	let user = JSON.parse(localStorage.getItem('user'));
	const [showMenu, setShowMenu ] = useState(false);

	let menu;

	if (showMenu) {
		menu = (
			<div className="position-absolute bg-white top-20 right-0 w-50">
				<nav className="text-center" role="navigation">
					<ul className="">
						<li className="active my-4">
							<Link to="/home">Home</Link>
						</li>
						<li className="active my-4">
							<Link to="/order">Order</Link>
						</li>
						<li className="active my-4">
							{state.currentUser && (
								<Link
									to="/"
									onClick={() => {
										window.location.href = '/';
										localStorage.clear();
									}}
								>
									Logout
								</Link>
							)}
						</li>
					</ul>
				</nav>
			</div>
		);
	}

	return (
		<div className="site-navbar py-2">
			<div className="container">
				<div className="d-flex align-items-center justify-content-between">
					<div className="logo">
						<div className="site-logo">
							<Link to="/home" className="js-logo-clone">
								<strong className="text-primary">Pharma</strong>Store
							</Link>
						</div>
					</div>
					<div className="main-nav d-none d-lg-block">
						<nav className="site-navigation text-right text-md-center" role="navigation">
							<ul className="site-menu js-clone-nav d-none d-lg-block">
								<li className="active">
									<Link to="/home">Home</Link>
								</li>
								<li>
									<Link to="/order">Order</Link>
								</li>

								{/* <li>
                  <Link to="/list">Product List</Link>
                </li> */}

								<li>
									{state.currentUser && (
										<Link
											to="/"
											onClick={() => {
												window.location.href = '/';
												localStorage.clear();
											}}
										>
											Logout
										</Link>
									)}
								</li>
							</ul>
						</nav>
					</div>
					<div className="icons">
						{state.currentUser &&(
							user.role=== 'admin' && (
								<Link to="/admin" className="icons-btn d-inline-block bag">
								<span>
									<i className="fas fa-users-cog" />
								</span>
								<span className="number">1</span>
							</Link>
							)
						)}
						
						<a href={url} className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none">
							<span className="icon-menu" onClick={()=>setShowMenu(!showMenu)} />
						</a>
					</div>
				</div>
			</div>
			{menu}
		</div>
	);
}

export default NavBar;
