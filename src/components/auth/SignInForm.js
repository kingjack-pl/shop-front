import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { signIn } from "../../actions";
import { Link } from "react-router-dom";

import Loader from "../Loader";
import NotificationDisplay from "../NotificationDisplay";

class SignInForm extends Component {
	state = { loading: false };

	onSubmit = values => {
		this.setState({ loading: true });
		this.props.signIn(values, () => {
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
		return (
			<div className="fullPage">
				<Loader loading={this.state.loading}/>
				<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="login-form">
					<NotificationDisplay />
					<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
					<Field
						name="username"
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
					<p>New to shopFront? <Link to="/signup">Create an account</Link>.</p>
					<button className="btn btn-lg btn-primary btn-block">Sign in</button>
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

export default compose(
	reduxForm({validate, form: "SignIn"}),
	connect(null, { signIn })
)(SignInForm);
