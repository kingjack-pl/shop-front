import React, { Component } from "react";
import { connect } from "react-redux";

export default ChildComponent => {
	class ComposedComponent extends Component {
		componentDidMount() {
			this.shouldNavigateAway();
		}

		componentDidUpdate() {
			this.shouldNavigateAway();
		}

		shouldNavigateAway() {
			if (!this.props.isAdmin) {
				this.props.history.push("/");
			}
		}

		render() {
			return <ChildComponent {...this.props} />;
		}
	}

	const mapStateToProps = ({ auth: { isAdmin } }) => ({
		isAdmin
	});

	return connect(mapStateToProps)(ComposedComponent);
};
