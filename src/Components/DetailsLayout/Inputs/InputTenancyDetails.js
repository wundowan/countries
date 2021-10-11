import React, { useState, Fragment } from 'react'


export default function InputInsuranceDetails() {
    const [inputs, setInputs] = useState({
        property_no: "",
        current_lease: "",
        canonical_agreement: "",
        occupied_by_ro: "",
        tenant: "",
        contact_tel: "",
        type_tenancy: "",
        length_tenancy: "",
        first_occupation: "",
        start_date: "",
        expiry_date: "",
        rent_review: "",
        date_of_next_event: "",
        nature_of_event: "",
        current_rent_pa: "",
        rent_frequency: "",
        ph: ""
    })

    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { property_no, current_lease, canonical_agreement, occupied_by_ro, tenant, contact_tel, type_tenancy, length_tenancy, first_occupation, start_date, expiry_date, rent_review, date_of_next_event, nature_of_event, current_rent_pa, rent_frequency, ph };
            const response = await fetch("http://localhost:5000/properties/property_details", {
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
                name="property_no"
                className="form-control"
                value={property_no}
                onChange={(e) => onChange(e)}
                />
                <input
                type="text"
                name="current_lease"
                className="form-control"
                value={current_lease}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="canonical_agreement"
                className="form-control"
                value={canonical_agreement}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="occupied_by_ro"
                className="form-control"
                value={occupied_by_ro}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="tenant"
                className="form-control"
                value={tenant}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="contact_tel"
                className="form-control"
                value={contact_tel}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="type_tenancy"
                className="form-control"
                value={type_tenancy}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="length_tenancy"
                className="form-control"
                value={length_tenancy}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="first_occupation"
                className="form-control"
                value={first_occupation}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="start_date"
                className="form-control"
                value={start_date}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="expiry_date"
                className="form-control"
                value={expiry_date}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="rent_review"
                className="form-control"
                value={rent_review}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="date_of_next_event"
                className="form-control"
                value={date_of_next_event}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="nature_of_event"
                className="form-control"
                value={nature_of_event}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="current_rent_pa"
                className="form-control"
                value={current_rent_pa}
                onChange={e => onChange(e)}
                /><input
                type="text"
                name="rent_frequency"
                className="form-control"
                value={rent_frequency}
                onChange={e => onChange(e)}
                /><input
                type="text"
                name="ph"
                className="form-control"
                value={ph}
                onChange={e => onChange(e)}
                />

                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )
}