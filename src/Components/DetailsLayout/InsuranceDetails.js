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

export default function InsuranceDetails(props) {
    const { data } = props;
    const classes = useStyles();

    return (
        data.map((data) => (
            <div key={data.ph}>
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
            </div>
        ))
    )
}