import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Grid, Paper, Toolbar, Typography, Box } from '@material-ui/core';
import SideBar from './SideBar';
import {  useParams } from 'react-router-dom';

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
    root: {
        flexgrow: 1,
       
    }, 
    paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 60,
    },
    boxHeader: {
        padding: theme.spacing(2),
        textAlign: 'center',
        height: 30,
        boxShadow: '0 3px 5px 2px rgba(192, 192, 192, .3)',
    },
    gridContainer: {
        padding: theme.spacing(5),
        
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },

}))


export default function CountryDash(props) {
    const [propes, setPropes] = useState([]);
    const [loading, setLoading] = useState([]);
    const [country, setCountry] = useState([]);

    const classes = useStyles();    
   

    const { type } = useParams();
    

  

    useEffect(() => {
        setLoading(true);
        if(country) {
            axios
            .get(`http://localhost:5000/properties/${country}`)
            .then((res) => {                               
                setPropes(res.data);
                setLoading(false);                
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }, []); 

      useEffect(() => {
        const searchedCountry = type;
        setCountry(searchedCountry);
    }, []);

    useEffect(() => {
        console.log(propes)
    }, [propes])

    return (
        <div>
            <AppBar position='static' className={classes.appBar} >
                <Toolbar>
                    <Typography>
                        Country Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <SideBar />
            <div className={classes.root} >
               {propes.map((prope) => (   
                <div key={prope.property_no}>
                    <div> 
                    <Box className={classes.boxHeader}>
                        Country Dashboard
                    </Box>                   
                    <Grid container spacing={3} className={classes.gridContainer} justify="center" >
                        <Grid item xs={3} spacing={3} className={classes.grid} >
                            <Paper className={classes.paper}>
                                <div>
                                Name: {prope.property_name}
                                </div> 
                                <div>
                                Name: {prope.ph_no}
                                </div>
                            </Paper>                            
                        </Grid>
                        <Grid item xs={3} spacing={3} >
                            <Paper className={classes.paper}>
                                Population: {prope.property_no}
                            </Paper>
                        </Grid>
                    </Grid>
                    </div>
                    <div>                 
                    <Grid container spacing={3} justify="center" >
                        <Grid item xs={3} spacing={3} className={classes.grid} >
                            <Paper className={classes.paper}>
                                Hello 
                            </Paper>
                        </Grid>
                        <Grid item xs={3} spacing={3} >
                            <Paper className={classes.paper}>
                                Hello 2 {prope.town}
                            </Paper>
                        </Grid>
                    </Grid>
                    </div>
                </div>
                ))
            }</div>
        </div>
    )


}