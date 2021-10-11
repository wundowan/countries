import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableContainer, TableBody, TableRow, TableCell } from '@material-ui/core';

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

export default function PropertyHeaderBar(props) {
    const { data } = props;
    const classes = useStyles();

    return (
        data.map((data) => (
            <div key={data.ph}>
                <TableContainer className={classes.tableTitle} component={Paper} >
                    <Table >
                        <TableBody>
                            <TableRow >
                                <TableCell className={classes.tableHead}>Parish: {data.parish}</TableCell>                                       
                                <TableCell className={classes.tableHead}>Property Name: {data.property_name}</TableCell>
                                <TableCell className={classes.tableHead}>Parish No: {data.ph}</TableCell>                                            
                                <TableCell className={classes.tableHead}>Property No: {data.property_no}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        ))
    )
}