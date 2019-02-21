import React, { Component } from "react";
import { connect } from "react-redux";

class NotificationDisplay extends Component {
    state = {
        errorMessage: "",
        successMessage: "",
    };

    componentDidMount() {

    }

    render() {
        // const { errorMessage, successMessage } = this.props;
        const { errorMessage, successMessage } = this.state;


        // this.setState("errorMessage": this.props.errorMessage)

        return (
            <div>
                <p style={{"color":"green"}}>{successMessage}</p>
                <p style={{"color":"#dc3545"}}>{errorMessage}</p>
            </div>
        )
    }
}

const mapStateToProps = ({ notification: { errorMessage, successMessage } }) => ({
    errorMessage,
    successMessage
});

export default connect(mapStateToProps)(NotificationDisplay);
