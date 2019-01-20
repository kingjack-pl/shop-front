import React from "react";
import { PulseLoader } from "react-spinners";

export default ({ loading }) => {
    if (!loading) {
        return null;
    }

    return (
        <div className="sweetLoading">
            <PulseLoader
                className="override"
                sizeUnit={"px"}
                size={15}
                color={"#B22222"}
                loading={loading}
            />
        </div>
    );
};
