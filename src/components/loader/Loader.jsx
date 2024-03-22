import React from "react";
import { PropagateLoader } from "react-spinners"
export const Loader = () => {
    return (
        <div style={{textAlign: "center", marginTop: "5rem"}}>
            <PropagateLoader
                color="#0f1452"
            />
        </div>

    )
}