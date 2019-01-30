import React, { Component } from "react";
import { connect } from "react-redux";

class NotificationDisplay extends Component {
    render() {
        const { errorMessage, successMessage } = this.props;

        return (
            <div>
                <p style={{"color":"green"}}>{successMessage}</p>
                <p style={{"color":"red"}}>{errorMessage}</p>
            </div>
        )
    }
}

const mapStateToProps = ({ notification: { errorMessage, successMessage } }) => ({
    errorMessage,
    successMessage
});

export default connect(mapStateToProps)(NotificationDisplay);
