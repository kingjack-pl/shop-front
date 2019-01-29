import React, { Component } from "react";

import requireIsLogin from "./requireIsLogin";

class SecretPage extends Component {
    render() {
        return <h1>Secret Page</h1>
    }
}

export default requireIsLogin(SecretPage);
