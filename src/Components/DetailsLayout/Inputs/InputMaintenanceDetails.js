import React, { useState, Fragment } from 'react'


export default function InputInsuranceDetails() {
    const [inputs, setInputs] = useState({
        ph: "",
        property_no: "",
        esos: "",
        asb_audit_date: "",
        hs_ausit_date: "",
        cementery: "",
        ltning_cndct_test_date: "",
        fire_risk_asses_date: "",
        gas_cert_issue_date: "",
        fixed_wire_certificate_date: "",
        epc_rating: "",
        epc_score: "",
        epc_date: "",
        dda_audit_date: "",
        access_ramp: "",
        full_facilities: ""
    })

    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { ph, property_no, esos, asb_audit_date, hs_audit_date, cementery, ltning_cndct_test_date, fire_risk_asses_date, gas_cert_issue_date, fixed_wire_certificate_date, epc_rating, epc_score, epc_date, dda_audit_date, access_ramp, full_facilities };
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
                name="esos"
                className="form-control"
                value={esos}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="asb_audit_date"
                className="form-control"
                value={asb_audit_date}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="hs_audit_date"
                className="form-control"
                value={hs_audit_date}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="ltning_cndct_test_date"
                className="form-control"
                value={ltning_cndct_test_date}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="fire_risk_asses_date"
                className="form-control"
                value={fire_risk_asses_date}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="gas_cert_issue_date"
                className="form-control"
                value={gas_cert_issue_date}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="fixed_wire_certificate_date"
                className="form-control"
                value={fixed_wire_certificate_date}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="epc_rating"
                className="form-control"
                value={epc_rating}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="epc_score"
                className="form-control"
                value={epc_score}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="epc_date"
                className="form-control"
                value={epc_date}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="dda_audit_date"
                className="form-control"
                value={dda_audit_date}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="access_ramp"
                className="form-control"
                value={access_ramp}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="full_facilities"
                className="form-control"
                value={full_facilities}
                onChange={e => onChange(e)}
                />

                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )
}