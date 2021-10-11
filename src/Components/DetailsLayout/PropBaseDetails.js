import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Table, TableContainer, TableBody, TableRow, TableCell, TableHead } from '@material-ui/core';

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

export default function PropBaseDetails(props) {
    const { data } = props;
    const classes = useStyles();

    return(
        data.map((data) => (
            <div key={data.ph}>
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
                                <TableCell className={classes.tableCell} align='left'>Town</TableCell>
                                <TableCell align='left'>{data.town}</TableCell>                                           
                            </TableRow>
                            <TableRow>
                                <TableCell className={classes.tableCell} align='left'>Postcode</TableCell>
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
            </div>
        ))
    )
}