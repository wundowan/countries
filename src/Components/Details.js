import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Grid, Paper, Toolbar, Typography, Box, Table, TableContainer, TableBody, TableRow, TableCell, TableHead } from '@material-ui/core';
import SideBar from './SideBar';

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

export default function Details(props) {
    const classes = useStyles();

    return (
        <div>
            <div>
            <Grid item xs={6} spacing={3} className={classes.grid}>
                            <Paper className={classes.paper}>
                                <TableContainer component={Paper}>
                                    <Table>
                                        <TableHead>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell className={classes.tableCell} align='left'>Property:</TableCell>
                                                <TableCell align='left'>{data.property_name}</TableCell>                                           
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className={classes.tableCell} align='left'>Address:</TableCell>
                                                <TableCell align='left'>{data.address}</TableCell>                                                                                          
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className={classes.tableCell} align='left'></TableCell>
                                                <TableCell align='left'>{data.town}</TableCell>                                           
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className={classes.tableCell} align='left'></TableCell>
                                                <TableCell align='left'>{data.postcode}</TableCell>                                                                                          
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className={classes.tableCell} align='left'>Deanery:</TableCell>
                                                <TableCell align='left'>{data.deanery} ({data.deanery_no})</TableCell>                                           
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className={classes.tableCell} align='left'>Description:</TableCell>
                                                <TableCell align='left'>{data.descrption}</TableCell>                                           
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className={classes.tableCell} align='left'>Type:</TableCell>
                                                <TableCell align='left'>{data.property_type}</TableCell>                                           
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className={classes.tableCell} align='left'>Interest:</TableCell>
                                                <TableCell align='left'>{data.interest}</TableCell>                                           
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className={classes.tableCell} align='left'>Date Acquired:</TableCell>
                                                <TableCell align='left'>{data.date_acquired}</TableCell>                                           
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className={classes.tableCell} align='left'>Purchase Price:</TableCell>
                                                <TableCell align='left'>{data.purchase_price}</TableCell>                                           
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className={classes.tableCell} align='left'>Current Lease:</TableCell>
                                                <TableCell align='left'>{data.current_lease}</TableCell>                                           
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>                          
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
                        
                    
                    <Grid container spacing={3}>
                        
                        <Grid item md={12} spacing={1} className={classes.grid}>
                            <TableContainer component={Paper}>
                                <Table className={classes.table}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className={classes.tableHead} align='center'>SORP</TableCell>                                            
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align='left'>Asset Status:</TableCell>
                                            <TableCell align='left'>{data.sorp_asset_status}</TableCell>                                           
                                            <TableCell align='left'>Valuation Method:</TableCell>
                                            <TableCell align='left'>{data.sorp_valuation_method}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align='left'>Market Value:</TableCell>
                                            <TableCell align='left'>{data.sorp_market_value}</TableCell>
                                            <TableCell align='left'>Valuation Date:</TableCell>
                                            <TableCell align='left'>{data.sorp_valn_date}</TableCell>                                          
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align='left'>Purpose of Property:</TableCell>
                                            <TableCell align='left'>{data.purpose_of_property}</TableCell>    
                                            <TableCell align='left'></TableCell>
                                            <TableCell align='left'></TableCell>                                       
                                        </TableRow>                                        
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        
                        
                    </Grid>
                    
                           
                    <Grid container spacing={3}>                       
                        <Grid item xs={12} spacing={1} className={classes.grid}>
                            <TableContainer component={Paper}>
                                <Table >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className={classes.tableHead} align='center'>QI's</TableCell>                                            
                                                                                    
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align='left'>Last QI:</TableCell>
                                            <TableCell align='left'>{data.qi_quinquennial_inspection}</TableCell>                                           
                                            <TableCell align='left'>QI Report by:</TableCell>
                                            <TableCell align='left'>{data.qi_report_by}</TableCell>
                                        </TableRow>                                                                                  
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>                       
                        <Grid item xs={12} spacing={1} className={classes.grid}>
                            <TableContainer component={Paper}>
                                <Table >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className={classes.tableHead} align='center'>Tenanacy Details</TableCell>                                            
                                                                                    
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align='left'>Tenant:</TableCell>
                                            <TableCell align='left'>{data.tenant}</TableCell>                                           
                                            <TableCell align='left'>Type of Tenancy:</TableCell>
                                            <TableCell align='left'>{data.type_tenancy}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align='left'>Contact Tel:</TableCell>
                                            <TableCell align='left'>{data.contact_tel}</TableCell>                                           
                                            <TableCell align='left'>Length of Tenancy:</TableCell>
                                            <TableCell align='left'>{data.length_tenancy}</TableCell>
                                        </TableRow>  
                                        <TableRow>
                                            <TableCell align='left'>First Occupation:</TableCell>
                                            <TableCell align='left'>{data.first_occupation}</TableCell>                                           
                                            <TableCell align='left'>Start Date:</TableCell>
                                            <TableCell align='left'>{data.start_date}</TableCell>
                                        </TableRow>  
                                        <TableRow>
                                            <TableCell align='left'>Expiry Date:</TableCell>
                                            <TableCell align='left'>{data.expiry_date}</TableCell>                                           
                                            <TableCell align='left'>Rent Review:</TableCell>
                                            <TableCell align='left'>{data.rent_review}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align='left'>Nature of next event:</TableCell>
                                            <TableCell align='left'>{data.nature_of_event}</TableCell>                                           
                                            <TableCell align='left'>Date of next event:</TableCell>
                                            <TableCell align='left'>{data.date_of_next_event}</TableCell>
                                        </TableRow>   
                                        <TableRow>
                                            <TableCell align='left'>Current Rent p/a:</TableCell>
                                            <TableCell align='left'>{data.current_rent_pa}</TableCell>                                           
                                            <TableCell align='left'>Frequency of Rent:</TableCell>
                                            <TableCell align='left'>{data.rent_frequency}</TableCell>
                                        </TableRow>                                                                           
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>                       
                        <Grid item xs={12} spacing={1} className={classes.grid}>
                            <TableContainer component={Paper}>
                                <Table >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className={classes.tableHead} align='center'>Listed Details</TableCell>                                            
                                                                                    
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align='left'>Listed Grade:</TableCell>
                                            <TableCell align='left'>{data.listed_grade}</TableCell>                                           
                                            <TableCell align='left'>Conservation Area:</TableCell>
                                            <TableCell align='left'>{data.conservation_area}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align='left'>Local Listing:</TableCell>
                                            <TableCell align='left'>{data.local_listing}</TableCell>                                           
                                            <TableCell align='left'>TPO No:</TableCell>
                                            <TableCell align='left'>{data.tpo_no}</TableCell>
                                        </TableRow>  
                                        <TableRow>
                                            <TableCell align='left'>Local Authority:</TableCell>
                                            <TableCell align='left'>{data.local_authority}</TableCell>                                           
                                            <TableCell align='left'>Year Built:</TableCell>
                                            <TableCell align='left'>{data.year_built}</TableCell>
                                        </TableRow>  
                                        <TableRow>
                                            <TableCell align='left'>HCC Copy:</TableCell>
                                            <TableCell align='left'>{data.hcc_copy}</TableCell>                                           
                                            <TableCell align='left'>Architect:</TableCell>
                                            <TableCell align='left'>{data.architect}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align='left'>Date Consecrated:</TableCell>
                                            <TableCell align='left'>{data.date_consecrated}</TableCell>                                           
                                            <TableCell align='left'>Rating Details:</TableCell>
                                            <TableCell align='left'>{data.rating_details}</TableCell>
                                        </TableRow>   
                                        <TableRow>
                                            <TableCell align='left'>Rating Authority:</TableCell>
                                            <TableCell align='left'>{data.rating_authority}</TableCell>                                           
                                            <TableCell align='left'>Council Tax Band:</TableCell>
                                            <TableCell align='left'>{data.council_tax_band_reveal_1991}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align='left'>Band Range:</TableCell>
                                            <TableCell align='left'>{data.band_range}</TableCell>                                           
                                            <TableCell align='left'></TableCell>
                                            <TableCell align='left'></TableCell>
                                        </TableRow>                                                                            
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>                       
                        <Grid item xs={12} spacing={1} className={classes.grid}>
                            <TableContainer component={Paper}>
                                <Table >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className={classes.tableHead} align='center'>Insurance Details</TableCell>                                            
                                                                                    
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align='left'>Vacant:</TableCell>
                                            <TableCell align='left'>{data.vacant}</TableCell>                                           
                                            <TableCell align='left'>Date Vacated:</TableCell>
                                            <TableCell align='left'>{data.date_vacated}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align='left'>Insurance Value:</TableCell>
                                            <TableCell align='left'>{data.insurance_value}</TableCell>                                           
                                            <TableCell align='left'>Insurance Date:</TableCell>
                                            <TableCell align='left'>{data.insurance_date}</TableCell>
                                        </TableRow>  
                                        <TableRow>
                                            <TableCell align='left'>Insurance Comment:</TableCell>
                                            <TableCell align='left'>{data.insurance_comment}</TableCell>                                           
                                            <TableCell align='left'>Title Schedule:</TableCell>
                                            <TableCell align='left'>{data.title_sch}</TableCell>
                                        </TableRow>  
                                        <TableRow>
                                            <TableCell align='left'>Trust:</TableCell>
                                            <TableCell align='left'>{data.trust}</TableCell>                                           
                                            <TableCell align='left'>Allocation:</TableCell>
                                            <TableCell align='left'>{data.allocation}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align='left'>Agent:</TableCell>
                                            <TableCell align='left'>{data.agent}</TableCell>                                           
                                            <TableCell align='left'>Documented:</TableCell>
                                            <TableCell align='left'>{data.documented}</TableCell>
                                        </TableRow>                                                                                                                    
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>                       
                        <Grid item xs={12} spacing={1} className={classes.grid}>
                            <TableContainer component={Paper}>
                                <Table >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className={classes.tableHead} align='center'>Maintenance Details</TableCell>                                            
                                                                                    
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align='left'>ESOS:</TableCell>
                                            <TableCell align='left'>{data.esos}</TableCell>                                           
                                            <TableCell align='left'>ASB Audit Date:</TableCell>
                                            <TableCell align='left'>{data.asb_audit_date}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align='left'>HS Audit Date:</TableCell>
                                            <TableCell align='left'>{data.hs_audit_date}</TableCell>                                           
                                            <TableCell align='left'>Cemetery:</TableCell>
                                            <TableCell align='left'>{data.cemetery}</TableCell>
                                        </TableRow>  
                                        <TableRow>
                                            <TableCell align='left'>Lightning Conduct Test Date:</TableCell>
                                            <TableCell align='left'>{data.ltning_cndct_test_date}</TableCell>                                           
                                            <TableCell align='left'>Fire Risk Assessment Date:</TableCell>
                                            <TableCell align='left'>{data.fire_risk_asses_date}</TableCell>
                                        </TableRow>  
                                        <TableRow>
                                            <TableCell align='left'>Gas Certificate Issue Date:</TableCell>
                                            <TableCell align='left'>{data.gas_cert_issue_date}</TableCell>                                           
                                            <TableCell align='left'>Fixed Wire Certificate Date:</TableCell>
                                            <TableCell align='left'>{data.fixed_wire_certificate_date}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align='left'>EPC Rating:</TableCell>
                                            <TableCell align='left'>{data.epc_rating}</TableCell>                                           
                                            <TableCell align='left'>EPC Score:</TableCell>
                                            <TableCell align='left'>{data.epc_score}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align='left'>EPC Date:</TableCell>
                                            <TableCell align='left'>{data.epc_date}</TableCell>                                           
                                            <TableCell align='left'>DDA Audit Date:</TableCell>
                                            <TableCell align='left'>{data.dda_audit_date}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align='left'>Access Ramp:</TableCell>
                                            <TableCell align='left'>{data.access_ramp}</TableCell>                                           
                                            <TableCell align='left'>Full Facilites:</TableCell>
                                            <TableCell align='left'>{data.full_facilities}</TableCell>
                                        </TableRow>                                                                                                                   
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
            </div>
        </div>
    )
}