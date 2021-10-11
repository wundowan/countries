const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");

const PORT = 5000;

// process.env.NODE_ENV => production or undefined

// middleware
app.use(cors());
app.use(express.json()); // req.body
app.use(express.urlencoded({ extended: true }))


if (process.env.NODE_ENV === "production") {
  // service static content
  // npm run build
  app.use(express.static(path.join(__dirname, "client/build")));
}

// ROUTES

// Authentication routes

app.use("/auth", require("./routes/jwtAuth"));

app.use("/dashboard", require("./routes/dashboard"));

// get all cases

app.get("/cases", async (req, res) => {
  try {
    const allData = await pool.query("SELECT * from cases");
    res.json(allData.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a case
app.get("/cases/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await pool.query("SELECT * FROM cases WHERE case_no = $1", [
      id,
    ]);
    res.json(data.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/base-prop-details", async (req, res) => {
  try {
    const allData = await pool.query('SELECT * FROM property_details');
    res.json(allData.rows);

  } catch (err) {
    console.log(err.message)
    
  }
})

app.get("/allproperties", async (req, res) => {
  try {
    const allData = await pool.query('SELECT * FROM property_details INNER JOIN maintenance ON maintenance.property_no = property_details.property_no INNER JOIN insurance_agents i ON maintenance.property_no = i.property_no INNER JOIN listed_details l ON maintenance.property_no = l.property_no INNER JOIN sorp_qi s ON maintenance.property_no = s.property_no INNER JOIN tenancy_details t ON maintenance.property_no = t.property_no');
    res.json(allData.rows);
  } catch (err) {
    console.log(err.message);
  }
})

app.get("/properties/:id", async (req, res) => {
  try{
    const { id } = req.params;
    const allData = await pool.query('SELECT * FROM property_details INNER JOIN maintenance ON property_no = $1', [
      id,
    ]);
    res.json(allData.rows[0]);
  } catch (err) {
    console.log(err.message)
  }
})

// POST request for property base details

app.post("/properties/property-details", async (req, res) => {
  try {
    const { ph, town, parish, property_name, address, post_code, deanery, deanery_no, description, property_type, land_area, land_area_units, interest, date_acquired, purchase_price, date_sold, property_no } = req.body;

    const newPropDetails = await pool.query(
      "INSERT INTO property_details (ph, town, parish, property_name, address, post_code, deanery, deanery_no, description, property_type, land_area, land_area_units, interest, date_acquired, purchase_price, date_sold, property_no) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING *", [ph, town, parish, property_name, address, post_code, deanery, deanery_no, description, property_type, land_area, land_area_units, interest, date_acquired, purchase_price, date_sold, property_no]
    );

    const newListedDetails = await pool.query(
      "INSERT INTO listed_details (ph, property_no) VALUES ($1, $2) RETURNING *", [ph, property_no]
    );

    const newInsuranceAgents = await pool.query(
      "INSERT INTO insurance_agents (ph, property_no) VALUES ($1, $2) RETURNING *", [ph, property_no]
    );

    const newMaintenanceDetails = await pool.query(
      "INSERT INTO maintenance (ph, property_no) VALUES ($1, $2) RETURNING *", [ph, property_no]
    );

    const newSorpDetails = await pool.query(
      "INSERT INTO sorp_qi (ph, property_no) VALUES ($1, $2) RETURNING *", [ph, property_no]
    );

    const newTenancyDetails = await pool.query(
      "INSERT INTO listed_details (ph, property_no) VALUES ($1, $2) RETURNING *", [ph, property_no]
    );

    res.json(newPropDetails.rows[0])
  } catch (err) {
    console.log(err.message)    
  }
})

// POST request for insurance agents

app.post("/properties/insurance-agents", async (req, res) => {
  try {
    const { ph, property_no, vacant, date_vacated, insurance_value, insurance_date, insurance_comment, title_sch, trust, allocation, agent, documented } = req.body;

    const newInsDetails = await pool.query("INSERT INTO insurance_details (ph, property_no, vacant, date_vacated, insurance_value, insurance_date, insurance_comment, title_sch, trust, allocation, agent, documented) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *", [ph, property_no, vacant, date_vacated, insurance_value, insurance_date, insurance_comment, title_sch, trust, allocation, agent, documented]
    );
    res.json(newInsDetails.rows[0])

  } catch (err) {
    console.log(err.message)
    
  }
})

// POST request for listed_details

app.post("/properties/listed-details", async (req, res) => {
  try {
    const { ph, property_no, listed_grade, conservation_area, local_listing, tpo_no, local_authority, year_built, hcc_copy, architect, date_consecrated, rating_details, rating_authority, council_tax_band_reveal_1991, band_range } = req.body;

    const newListedDetails = await pool.query("INSERT INTO listed_details (ph, property_no, listed_grade, conservation_area, local_listing, tpo_no, local_authority, year_built, hcc_copy, architect, date_consecrated, rating_details, rating_authority, council_tax_band_reveal_1991, band_range) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *", [ph, property_no, listed_grade, conservation_area, local_listing, tpo_no, local_authority, year_built, hcc_copy, architect, date_consecrated, rating_details, rating_authority, council_tax_band_reveal_1991, band_range])
    res.json(newListedDetails.rows[0])

  } catch (err) {
    console.log(err.message)
    
  }
})

// POST request for maintenance details

app.post("/properties/maintenance-details", async (req, res) => {
  try {
    const { ph, property_no, esos, asb_audit_date, hs_audit_date, cementery, ltning_cndct_test_date, fire_risk_asses_date, gas_cert_issue_date, fixed_wire_certificate_date, epc_rating, epc_score, epc_date, dda_audit_date, access_ramp, full_facilities } = req.body;

    const newMaintenanceDetails = await pool.query("INSERT INTO maintenance (ph, property_no, esos, asb_audit_date, hs_audit_date, cementery, ltning_cndct_test_date, fire_risk_asses_date, gas_cert_issue_date, fixed_wire_certificate_date, epc_rating, epc_score, epc_date, dda_audit_date, access_ramp, full_facilities) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *", [ph, property_no, esos, asb_audit_date, hs_audit_date, cementery, ltning_cndct_test_date, fire_risk_asses_date, gas_cert_issue_date, fixed_wire_certificate_date, epc_rating, epc_score, epc_date, dda_audit_date, access_ramp, full_facilities]
    );
    res.json(newMaintenanceDetails.rows[0])
  } catch (err) {
    console.log(err.message)    
  }
})

// POST request for SORP QI 

app.post("/properties/sorp-qi", async (req, res) => {
  try {
    const { ph, property_no, sorp_asset_status, sorp_valuation_method, sorp_market_value, sorp_valn_date, purpose_of_property, qi_quinquennial_inspection, qi_report_by, other_surveys, cdm_plans, other_plans, schemes } = req.body;

    const newSorpDetails = await pool.query("INSERT INTO sorp_qi (ph, property_no, sorp_asset_status, sorp_valuation_method, sorp_market_value, sorp_valn_date, purpose_of_property, qi_quinquennial_inspection, qi_report_by, other_surveys, cdm_plans, other_plans, schemes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *", [ph, property_no, sorp_asset_status, sorp_valuation_method, sorp_market_value, sorp_valn_date, purpose_of_property, qi_quinquennial_inspection, qi_report_by, other_surveys, cdm_plans, other_plans, schemes]
    );
    res.json(newSorpDetails.rows[0]);
  } catch (err) {
    console.log(err.message)
  }
})

// POST request for tenancy details

app.post("/properties/tenancy-details", async (req, res) => {
  try {
    const { property_no, current_lease, canonical_agreement, occupied_by_ro, tenant, contact_tel, type_tenancy, length_tenancy, first_occupation, start_date, expiry_date, rent_review, date_of_next_event, nature_of_event, current_rent_pa, rent_frequency, ph } = req.body;
    
    const newTenancyDetails = await pool.query("INSERT INTO tenancy_details (property_no, current_lease, canonical_agreement, occupied_by_ro, tenant, contact_tel, type_tenancy, length_tenancy, first_occupation, start_date, expiry_date, rent_review, date_of_next_event, nature_of_event, current_rent_pa, rent_frequency, ph) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING *", [property_no, current_lease, canonical_agreement, occupied_by_ro, tenant, contact_tel, type_tenancy, length_tenancy, first_occupation, start_date, expiry_date, rent_review, date_of_next_event, nature_of_event, current_rent_pa, rent_frequency, ph]
    );

    res.json(newTenancyDetails.rows[0]);

  } catch (err) {
    console.log(err.message)    
  }
})

  
app.listen(5000, () => {
  console.log(`Server is starting on port 5000`);
});