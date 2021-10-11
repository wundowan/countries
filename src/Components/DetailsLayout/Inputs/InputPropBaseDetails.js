import React from 'react';
import { Backdrop, Modal } from '@material-ui/core';
import { Fragment } from 'react';
import { useState } from 'react';


export default function InputPropBaseDetails() {
    const [inputs, setInputs] = useState({
        ph: "",
        town: "", 
        parish: "",
        property_name: "",
        address: "",
        post_code: "",
        deanery: "",
        deanery_no: "",
        description: "",
        property_type: "",
        land_area: "",
        land_area_units: "",
        interest: "",
        date_acquired: "",
        purchase_price: "",
        date_sold: "",
        property_no: ""
    });

    const { ph, town, parish, property_name, address, post_code, deanery, deanery_no, description, property_type, land_area, land_area_units, interest, date_acquired, purchase_price, date_sold, property_no } = inputs;

    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { ph, town, parish, property_name, address, post_code, deanery, deanery_no, description, property_type, land_area, land_area_units, interest, date_acquired, purchase_price, date_sold, property_no };
            const response = await fetch("http://localhost:5000/properties/property-details", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            const parseRes = response.json();
            console.log(parseRes)

        } catch (err) {
            console.log(err.message)            
        }
    }

    return(
          
            <Fragment>
                <h1 className="text-center mt-5">Input New Property</h1>
                <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                    <input
                    type="text"
                    name="ph"
                    className="form-control"
                    value={ph}
                    onChange={(e) => onChange(e)}
                    />
                    <input
                    type="text"
                    name="town"
                    className="form-control"
                    value={town}
                    onChange={e => onChange(e)}
                    />
                    <input
                    type="text"
                    name="parish"
                    className="form-control"
                    value={parish}
                    onChange={e => onChange(e)}
                    />
                    <input
                    type="text"
                    name="property_name"
                    className="form-control"
                    value={property_name}
                    onChange={e => onChange(e)}
                    />
                    <input
                    type="text"
                    name="address"
                    className="form-control"
                    value={address}
                    onChange={e => onChange(e)}
                    />
                    <input
                    type="text"
                    name="post_code"
                    className="form-control"
                    value={post_code}
                    onChange={e => onChange(e)}
                    />
                    <input
                    type="text"
                    name="deanery"
                    className="form-control"
                    value={deanery}
                    onChange={e => onChange(e)}
                    />
                    <input
                    type="text"
                    name="deanery_no"
                    className="form-control"
                    value={deanery_no}
                    onChange={e => onChange(e)}
                    />
                    <input
                    type="text"
                    name="description"
                    className="form-control"
                    value={description}
                    onChange={e => onChange(e)}
                    />
                    <input
                    type="text"
                    name="property_type"
                    className="form-control"
                    value={property_type}
                    onChange={e => onChange(e)}
                    />
                    <input
                    type="text"
                    name="land_area"
                    className="form-control"
                    value={land_area}
                    onChange={e => onChange(e)}
                    />
                    <input
                    type="text"
                    name="land_area_units"
                    className="form-control"
                    value={land_area_units}
                    onChange={e => onChange(e)}
                    />
                    <input
                    type="text"
                    name="interest"
                    className="form-control"
                    value={interest}
                    onChange={e => onChange(e)}
                    />
                    <input
                    type="text"
                    name="date_acquired"
                    className="form-control"
                    value={date_acquired}
                    onChange={e => onChange(e)}
                    />
                    <input
                    type="text"
                    name="purchase_price"
                    className="form-control"
                    value={purchase_price}
                    onChange={e => onChange(e)}
                    /><input
                    type="text"
                    name="date_sold"
                    className="form-control"
                    value={date_sold}
                    onChange={e => onChange(e)}
                    /><input
                    type="text"
                    name="property_no"
                    className="form-control"
                    value={property_no}
                    onChange={e => onChange(e)}
                    />
    
                    <button className="btn btn-success">Add</button>
                </form>
            </Fragment>
         
    );
}