import { Component } from "react";
import { connect } from "react-redux";
import { signOut } from "../../actions";

class SignOut extends Component {
	componentDidMount() {
		this.props.signOut(() => (
			this.props.history.push("/")
		));
	}

	render() {
		return null;
	}
}

export default connect(
	null,
	{ signOut }
)(SignOut);
