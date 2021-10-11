import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';
import Countries from './Countries';
import SideBar from '../NavComponents/SideBar';

import { AppBar, Table, TableBody, TableContainer, TableRow, Toolbar, Typography, TableCell, TableHead } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      // necessary for content to be below app bar
      toolbar: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
      },
})) 



export default function ListCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [name, setName] = useState("");


  const classes = useStyles(); 
    
  const handleChange = (e) => {
      setSearch(e.target.value)
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/base-prop-details")
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.property_name.toLowerCase().includes(search.toLowerCase()) || country.ph == search.toLowerCase() || country.town.toLowerCase().includes(search.toLowerCase()) || (country.parish && country.parish.toLowerCase().includes(search.toLowerCase()))
      )
    );
  }, [search, countries]);

  return (
      <div>
          <AppBar position='static' className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography>
                        Country Dashboard
                    </Typography>
                    <input 
                        type='text'
                        placeholder='Enter Property Name, Ph No, town...'
                        onChange={handleChange}
                    />
                </Toolbar>
            </AppBar>
            <SideBar/>

            <TableContainer className={classes.appBar}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Ph No.</TableCell>
                    <TableCell align='left'>Property</TableCell>
                    <TableCell align='left'>Town</TableCell>

                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          
          {filteredCountries.map((country, idx, property_no) => (
              <Countries key={idx} {...country} />            

          ))}

      </div>
  );




}
//

{/* <div key={idx} className={classes.appBar}> 
              <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>{country.ph}</TableCell>
                    <TableCell align='left'><Link to={`/dashboard/${property_no}`}>{country.property_name}</Link></TableCell>
                    <TableCell align='left'>{country.town}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            </div> */}