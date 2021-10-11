import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableContainer, TableBody, TableRow, TableCell, TableHead } from '@material-ui/core';

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

export default function MaintenanceDetails(props) {
    const { data } = props;
    const classes = useStyles();

    return (
        data.map((data) => (
            <div key={data.ph}>
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
            </div>
        ))
    )
}