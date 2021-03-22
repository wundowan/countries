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

if (process.env.NODE_ENV === "production") {
  // service static content
  // npm run build
  app.use(express.static(path.join(__dirname, "client/build")));
}

// ROUTES

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

app.get("/properties", async (req, res) => {
  try {
    const allData = await pool.query('SELECT * FROM property_details');
    res.json(allData.rows);
  } catch (err) {
    console.log(err.message);
  }
})

app.get("/properties/:id", async (req, res) => {
  try{
    const { id } = req.params;
    const allData = await pool.query('SELECT * FROM property_details WHERE property_no = $1', [
      id,
    ]);
    res.json(allData.rows[0]);
  } catch (err) {
    console.log(err.message)
  }
})


  
  app.listen(5000, () => {
    console.log(`Server is starting on port 5000`);
  });