import React from "react";
import { useNavigate } from "react-router-dom";

function HighOrderFunction({ Component }) {
    const navigate = useNavigate();
    console.log("HOC Props", navigate);
    return <Component navigate={navigate} />;
}

export default HighOrderFunction;
