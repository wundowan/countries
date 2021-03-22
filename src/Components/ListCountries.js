import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Countries from './Countries';
import SideBar from './SideBar';

import { AppBar, Toolbar, Typography } from '@material-ui/core';
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

  const classes = useStyles();
    
  const handleChange = (e) => {
      setSearch(e.target.value)
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/properties")
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
        country.property_name.toLowerCase().includes(search.toLowerCase())
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
                        placeholder='Search Countries'
                        onChange={handleChange}
                    />
                </Toolbar>
            </AppBar>
            <SideBar/>
          
          {filteredCountries.map((country, idx, property_no) => (
              <Countries key={idx} {...country} />
            

          ))}

      </div>
  );




}