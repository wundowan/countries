import React, { useState, Fragment } from 'react'


export default function InputInsuranceDetails() {
    const [inputs, setInputs] = useState({
        ph: "",
        property_no: "",
        listed_grade: "",
        conservation_area: "",
        local_listing: "",
        tpo_no: "",
        local_authority: "",
        year_built: "",
        hcc_copy: "",
        architect: "",
        date_consecrated: "",
        rating_details: "",
        rating_authority: "",
        council_tax_band_reveal_1991: "",
        band_range: ""
    })

    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { ph, property_no, listed_grade, conservation_area, local_listing, tpo_no, local_authority, year_built, hcc_copy, architect, date_consecrated, rating_details, rating_authority, council_tax_band_reveal_1991, band_range };
            const response = await fetch("http://localhost:5000/properties/listing-details", {
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
                name="property_no"
                className="form-control"
                value={property_no}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="listed_grade"
                className="form-control"
                value={listed_grade}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="conservaiton_area"
                className="form-control"
                value={conservaiton_area}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="local_listing"
                className="form-control"
                value={local_listing}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="tpo_no"
                className="form-control"
                value={tpo_no}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="local_authority"
                className="form-control"
                value={local_authority}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="year_built"
                className="form-control"
                value={year_built}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="hcc_copy"
                className="form-control"
                value={hcc_copy}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="architect"
                className="form-control"
                value={architect}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="date_consecrated"
                className="form-control"
                value={date_consecrated}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="rating_details"
                className="form-control"
                value={rating_details}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="rating_authority"
                className="form-control"
                value={rating_authority}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="council_tax_band_reveal_1991"
                className="form-control"
                value={council_tax_band_reveal_1991}
                onChange={e => onChange(e)}
                />
                

                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )
}