import React, { Component } from "react";

import requireAuth from "./requireAuth";

class SecretPage extends Component {
    render() {
        return <h1>Secret Page</h1>
    }
}

export default requireAuth(SecretPage);
