import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import SideBar from '../NavComponents/SideBar';
import {  useParams } from 'react-router-dom';
import SorpDetails from '../DetailsLayout/SorpDetails';
import MaintenanceDetails from '../DetailsLayout/MaintenanceDetails';
import InsuranceDetails from '../DetailsLayout/InsuranceDetails';
import ListedDetails from '../DetailsLayout/ListedDetails';
import TenancyDetails from '../DetailsLayout/TenancyDetails';
import QiDetails from '../DetailsLayout/QiDetails';
import PropBaseDetails from '../DetailsLayout/PropBaseDetails';
import PropertyHeaderBar from '../NavComponents/PropertyHeaderBar';

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        position: 'relative',
      },
    main: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
      },
    tableTitle: {                 
        
        //paddingTop: '20px'
    },
    paper: {
        //margin: '10px',
        //height: '120px',
        //padding: '10px',
    },
    grid: {
        //padding: '20px',
        margin: '5px',
    },
    box: {
      paddingTop: '0px',
      paddingBottom: '20px',       
    },

    tableMenu: {
        //paddingTop: '20px',
        alignContent: 'left',
        border: 'solid'   
    },
    button: {
      margin: theme.spacing(1)
    },
    tableHead: {
        fontWeight: 'bold',
        //fontSize: '15px',
        borderRight: '1px solid #ddd',

    },
    tableCell: {
        border: '0.5px solid #ddd',
        
    },
    
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),      
    },
}))


export default function CountryDash(props) {
    const [propes, setPropes] = useState([]);
    // const [loading, setLoading] = useState([]);
    const [country, setCountry] = useState([]);
    const [filteredProps, setFilteredProps] = useState([]);

    const classes = useStyles();    
   

    const { type } = useParams();
    
    

    useEffect(() => {
        const searchedCountry = type;
        setCountry(searchedCountry);
    }, [type]);

    useEffect(() => {
        // setLoading(true);
        if(country) {
            axios
            .get(`http://localhost:5000/allproperties`)
            .then((res) => {         
                console.log(country)                      
                setPropes(res.data);
                // setLoading(false);                
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }, []);     

    useEffect(() => {
        console.log(propes)
        setFilteredProps(            
            propes.filter((prope) => 
                prope.property_no == country
            )
        )
    }, [propes]) 

    return (
        <div>
            <AppBar position='static' className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography>
                        Dashboard
                    </Typography>
                    
                </Toolbar>
            </AppBar>            
            <SideBar/>                      
            {filteredProps.map((data) => (
                <div key={data.property_name} className={classes.main}>
                    
                    <Grid container spacing={3}>
                        <Grid item xs={12} spacing={3} >
                              <PropertyHeaderBar data={filteredProps} />                         
                        </Grid>                        
                        <Grid item xs={6} spacing={3} className={classes.grid}>
                            <PropBaseDetails data={filteredProps} />                        
                        </Grid>
                        <Grid item xs={4} spacing={3}>
                            <img src='https://www.w3schools.com/images/w3schools_green.jpg'></img>
                        </Grid>
                        {/*<Grid item xs={12} spacing={3} className={classes.grid}>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align='center'>Comments</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>{data.comments}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            
                        </Grid> */}                                          
                        
                    </Grid>
                    <Grid container spacing={3}>                        
                        <Grid item md={12} spacing={1} className={classes.grid}>
                            <SorpDetails data={filteredProps} /> 
                        </Grid>                        
                    </Grid>
                    <Grid container spacing={3}>                       
                        <Grid item xs={12} spacing={1} className={classes.grid}>
                            <QiDetails data={filteredProps} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>                       
                        <Grid item xs={12} spacing={1} className={classes.grid}>
                            <TenancyDetails data={filteredProps} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>                       
                        <Grid item xs={12} spacing={1} className={classes.grid}>
                            <ListedDetails data={filteredProps} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>                       
                        <Grid item xs={12} spacing={1} className={classes.grid}>
                            <InsuranceDetails data={filteredProps} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>                       
                        <Grid item xs={12} spacing={1} className={classes.grid}>
                            <MaintenanceDetails data={filteredProps} />
                        </Grid>                        
                    </Grid>
                </div>
            ))}
        
        </div>

    )


}