import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { signUp } from "../../actions";
import { Link } from "react-router-dom";

import Loader from "../Loader";

class SignUpForm extends Component {
	state = { loading: false };

	onSubmit = values => {
		this.setState({ loading: true });
		this.props.signUp(values, () => {
			this.setState({ loading: false });
			this.props.history.push("/");
		});
	};

	renderField = field => (
		<div className="form-group">
			<input
				className={field.meta.touched && field.meta.error ? "form-control is-invalid" : "form-control"}
				placeholder={field.placeholder}
				type={field.type}
				{...field.input}
			/>
			<span />
			<div className="invalid-feedback">
				{field.meta.touched ? field.meta.error : ""}
			</div>
		</div>
	);

	render() {
		const { handleSubmit, errorMessage } = this.props;

		return (
			<div className="fullPage">
				<Loader loading={this.state.loading}/>
				<form onSubmit={handleSubmit(this.onSubmit)} className="login-form">
					<h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
					<Field
						name="login"
						type="text"
						placeholder="Login"
						component={this.renderField}
					/>
					<Field
						name="password"
						type="password"
						placeholder="Password"
						component={this.renderField}

					/>
					<div className="invalid-feedback">
						{errorMessage}
					</div>
					<p>Do you have an shopFront account? <Link to="/signin">Sign In</Link>.</p>
					<button className="btn btn-lg btn-primary btn-block">Sign up</button>
				</form>
			</div>
		);
	}
}

const validate = ({ login, password }) => {
	const errors = {};

	if (!login) {
		errors.login = 'Please complete login field!'
	}

	if (!password) {
		errors.password = 'Please complete password field!'
	}

	return errors
};

const mapStateToProps = ({ auth: { errorMessage } }) => ({
	errorMessage
});

export default compose(
	reduxForm({validate, form: "SignUp"}),
	connect(mapStateToProps, { signUp })
)(SignUpForm);
