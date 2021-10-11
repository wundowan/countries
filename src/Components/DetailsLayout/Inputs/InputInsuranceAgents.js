import React, { useState, Fragment } from 'react'


export default function InputInsuranceDetails() {
    const [inputs, setInputs] = useState({
        ph: "",
        property_no: "",
        vacant: "",
        date_vacated: "",
        insurance_value: "",
        insurance_date:"",
        insurance_comment: "",
        title_sch: "",
        trust: "",
        allocation: "",
        agent: "",
        documented: ""
    })

    const { ph, property_no, vacant, date_vacated, insurance_value, insurance_date, insurance_comment, title_sch, trust, allocation, agent, documented } = inputs;

    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { ph, property_no, vacant, date_vacated, insurance_value, insurance_date, insurance_comment, title_sch, trust, allocation, agent, documented };
            const response = await fetch("http://localhost:5000/properties/insurance-agents", {
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
                name="vacant"
                className="form-control"
                value={vacant}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="date_vacated"
                className="form-control"
                value={date_vacated}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="insurance_value"
                className="form-control"
                value={insurance_value}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="insurance_date"
                className="form-control"
                value={insurance_date}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="insurance_comment"
                className="form-control"
                value={insurance_comment}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="title_sch"
                className="form-control"
                value={title_sch}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="trust"
                className="form-control"
                value={trust}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="allocation"
                className="form-control"
                value={allocation}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="agent"
                className="form-control"
                value={agent}
                onChange={e => onChange(e)}
                />
                <input
                type="text"
                name="documented"
                className="form-control"
                value={documented}
                onChange={e => onChange(e)}
                />

                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )
}