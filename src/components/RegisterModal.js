import React, { Fragment, useState } from 'react';

let user = JSON.parse(localStorage.getItem('user'));
if (user) console.log(JSON.stringify(user.token));
function RegisterModal() {
	const [ user, setUser ] = useState({
		names: '',
		email: '',
		password: '',
		pharmacyName: '',
		PhoneNumber: '',
		role: '',
		pharmacyId: ''
	});
	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	};

	const saveUser = async (e) => {
		e.preventDefault();
		try {
			const body = user;
			console.log(body);
			const resp = await fetch(`http://localhost:5000/users/signup`, {
				method: 'POST',
				headers: {
					Authorization: localStorage.getItem('token')
        },
				body: JSON.stringify(body)
      });
			// window.location = '/admin';
			console.log(resp)
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<Fragment>
			<button
				type="button"
				className="btn btn-info border-info add-user"
				data-toggle="modal"
				data-target="#myModal"
			>
				Add User
			</button>

			<div className="modal col-sm-12" id="myModal">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Register new User </h4>
							<button type="button" className="close" data-dismiss="modal">
								&times;
							</button>
						</div>

						<div class="modal-body">
							<div class="form-group">
								<label for="firstname" class="control-label">
									Names*
								</label>
								<input
									type="text"
									class="form-control"
									id="firstname"
									name="names"
									value={user.names}
									onChange={handleChange}
									placeholder="Full Name"
									required
								/>
							</div>
							<div class="form-group">
								<label for="lastname" class="control-label">
									Email*
								</label>
								<input
									type="text"
									class="form-control"
									id="email"
									name="email"
									value={user.email}
									onChange={handleChange}
									placeholder="Email"
									required
								/>
							</div>
							<div class="form-group" id="passwordSection">
								<label for="lastname" class="control-label">
									Password*
								</label>
								<input
									type="password"
									class="form-control"
									id="password"
									name="password"
									value={user.password}
									onChange={handleChange}
									placeholder="Password"
									required
								/>
							</div>
							<div class="form-group">
								<label for="lastname" class="control-label">
									Mobile
								</label>
								<input
									type="text"
									class="form-control"
									id="mobile"
									name="PhoneNumber"
									value={user.PhoneNumber}
									onChange={handleChange}
									placeholder="Mobile"
								/>
							</div>
							<div class="form-group">
								<label for="lastname" class="control-label">
									Pharmacy Name
								</label>
								<input
									type="text"
									class="form-control"
									id="pharmacy_name"
									name="pharmacyName"
									value={user.pharmacyName}
									onChange={handleChange}
									placeholder="Pharmacy Name"
								/>
							</div>
							<div class="form-group">
								<label for="user_type" class="control-label">
									User Type
								</label>
								<div className="d-flex p-3 justify-content-center">
									<div className="form-check">
										<label class="radio-inline px-3">
											<input
												type="radio"
												name="role"
												checked={(user.role = 'standard')}
												onChange={handleChange}
												className="form-check-input"
												id="general"
												value="general"
												required
											/>
											General
										</label>
									</div>
									<div className="form-check">
										<label class="radio-inline px-3">
											<input
												type="radio"
												name="role"
												id="administrator"
												value="administrator"
												checked={(user.role = 'admin')}
												onChange={handleChange}
												className="form-check-input"
												required
											/>
											Administrator
										</label>
									</div>
								</div>
							</div>
						</div>

						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-warning"
								data-dismiss="modal"
								onClick={(e) => saveUser(e)}
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
		</Fragment>
	);
}

export default RegisterModal;
