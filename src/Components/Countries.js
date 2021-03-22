import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Countries(props) {
    const { property_name, idx, property_no } = props;

    return (
        <div key={idx} >
            <Link to={`/dashboard/${property_no}`} >
                {property_name}
            </Link>
        </div>
    )
}