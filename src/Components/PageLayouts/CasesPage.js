import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import SideBar from '../NavComponents/SideBar'
import axios from 'axios'
import { AppBar, makeStyles, Grid, Paper, Toolbar, Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    main: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
      },
    table: {
        minWidth: 650,
    },
    paper: {
        margin: '10px',
        //height: '120px',
        padding: '10px',
    },
    grid: {
        padding: '20px',
        margin: '10px',
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
        font: 'bold',
        fontSize: '20px',
        borderRight: '1px solid #ddd',

    },
    tableCell: {
        borderRight: '1px solid #ddd',
    },
    
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),      
    },
}))

export default function CasesPage() {
    const [caseData, setCaseData] = useState([]);
    const [newCase, setNewCase] = useState([]);
    const [filteredCases, setFilteredCases] = useState([]);

    const classes = useStyles();

    const { type } = useParams();
    console.log(type)    

    useEffect(() => {
        const searchedCase = type;
        setNewCase(searchedCase);
        console.log(newCase)
    }, []); 

    useEffect(() => {

        
        console.log(newCase)
         
            axios
            .get(`http://localhost:5000/cases`)
            .then((res) => { 
                console.log(res.data)               
                setCaseData(res.data);                                             
            })
            .catch((err) => {
                console.log(err);
            });
        
    }, []); 

    useEffect(() => {
        console.log(caseData)
        
    }, [caseData])

    useEffect(() => {
        console.log(caseData);
        console.log(newCase);
        const number = newCase;
        setFilteredCases(
            caseData.filter((data) => 
                data.case_no == number
            
            )
        )
    }, [caseData])

    useEffect(() => {
        console.log(filteredCases)
    }, [filteredCases])

    

    return (
        <div>
            <AppBar position='static' className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography>
                        Cases
                    </Typography>
                    
                </Toolbar>
            </AppBar>            
            <SideBar/>                      
            {filteredCases.map((data) => (
                <div key={data.property_name} className={classes.main}>
                    
                    <Grid container spacing={3}>
                        <Grid item xs={12} spacing={3} className={classes.grid}>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableBody>
                                        <TableRow >
                                            <TableCell className={classes.tableHead}>Case No: {data.case_no}</TableCell>
                                            <TableCell className={classes.tableHead}>Property Name: {data.property_name}</TableCell>
                                            <TableCell className={classes.tableHead}>Parish No: {data.ph_no}</TableCell>
                                            <TableCell className={classes.tableHead}>Manager: {data.manager}</TableCell>
                                            <TableCell className={classes.tableHead}>Property No: {data.property_no}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>

                           
                        </Grid>
                        
                        <Grid item xs={6} spacing={3} className={classes.grid}>
                            <Paper className={classes.paper}>
                                <TableContainer component={Paper}>
                                    <Table>
                                        <TableHead>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell className={classes.tableCell} align='left'>Enquiry:</TableCell>
                                                <TableCell align='right'>{data.enquiry}</TableCell>                                           
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className={classes.tableCell} align='left'>Date In:</TableCell>
                                                <TableCell align='right'>{data.date_in}</TableCell>                                                                                          
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className={classes.tableCell} align='left'>Date Out:</TableCell>
                                                <TableCell align='right'>{data.date_out}</TableCell>                                                                                          
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className={classes.tableCell} align='left'>Category:</TableCell>
                                                <TableCell align='right'>{data.category}</TableCell>                                           
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className={classes.tableCell} align='left'>Contact:</TableCell>
                                                <TableCell align='right'>{data.contact}</TableCell>                                           
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className={classes.tableCell} align='left'>Parish:</TableCell>
                                                <TableCell align='right'>{data.parish}</TableCell>                                           
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className={classes.tableCell} align='left'>Town:</TableCell>
                                                <TableCell align='right'>{data.town}</TableCell>                                           
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>                          
                        </Grid>
                        <Grid item xs={4} spacing={3}>
                            <img src='https://www.w3schools.com/images/w3schools_green.jpg'></img>
                        </Grid>
                        <Grid item xs={12} spacing={3} className={classes.grid}>
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
                            
                        </Grid>                                           
                        <Grid item xs={12} spacing={3} className={classes.grid}>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align='center'>Other details:</TableCell>                                            
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align='left'>Deeds Out:</TableCell>
                                            <TableCell align='left'>{data.deeds_out}</TableCell>                                           
                                            <TableCell align='left'>Deeds Acknowledged:</TableCell>
                                            <TableCell align='left'>{data.deeds_acknowledged}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align='left'>Deeds In:</TableCell>
                                            <TableCell align='left'>{data.deeds_in}</TableCell>
                                            <TableCell align='left'>B-F:</TableCell>
                                            <TableCell align='left'>{data.b_f}</TableCell>                                          
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align='left'>Allocated From:</TableCell>
                                            <TableCell align='left'>{data.allocated_from}</TableCell>    
                                            <TableCell align='left'>Strategy Team:</TableCell>
                                            <TableCell align='left'>{data.strategy_team}</TableCell>                                       
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align='left'>Solicitor:</TableCell>
                                            <TableCell align='left'>{data.solicitor}</TableCell>
                                            <TableCell align='left'>Agents:</TableCell>
                                            <TableCell align='left'>{data.agents}</TableCell>                                                
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                    
                </div>
            ))}
        
        </div>

    )

}