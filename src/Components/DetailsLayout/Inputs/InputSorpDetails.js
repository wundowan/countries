import React, { useState, Fragment } from 'react'


export default function InputInsuranceDetails() {
    const [inputs, setInputs] = useState({
        ph: "",
        property_no: "",
        sorp_asset_status: "",
        sorp_valuation_method: "",
        sorp_market_value: "",
        sorp_valn_date: "",
        purpose_of_property: "",
        qi_quinquennial_inspection: "",
        qi_report_by: "",
        other_surveys: "",
        cdm_plans: "",
        other_plans: "",
        schemes: ""
    })

    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { ph, town, parish, property_name, address, post_code, deanery, deanery_no, description, property_type, land_area, land_area_units, interest, date_acquired, purchase_price, date_sold, property_no };
            const response = await fetch("http://localhost:5000/properties/maintenance-details", {
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
                name="sorp_asset_status"
                className="form-control"
                value={sorp_asset_status}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="sorp_valuation_method"
                className="form-control"
                value={sorp_valuation_method}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="sorp_market_value"
                className="form-control"
                value={sorp_market_value}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="sorp_valn_date"
                className="form-control"
                value={sorp_valn_date}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="purpose_of_property"
                className="form-control"
                value={purpose_of_property}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="qi_quinquennial_inspection"
                className="form-control"
                value={qi_quinquennial_inspection}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="qi_report_by"
                className="form-control"
                value={qi_report_by}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="other_surveys"
                className="form-control"
                value={other_surveys}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="cdm_plans"
                className="form-control"
                value={cdm_plans}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="other_plans"
                className="form-control"
                value={other_plans}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="schemes"
                className="form-control"
                value={schemes}
                onChange={e => onChange(e)}
                />      

                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )
}