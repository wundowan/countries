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



export default function SorpDetails(props) {

    const { data } = props;
    console.log(data)

    const classes = useStyles();
    
    

    return (
        <div>
            {data.map((data) => (
                <div key={data.ph}>
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
                                    <TableCell align='left'>{/*data.sorp_valuation_method*/}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align='left'>Market Value:</TableCell>
                                    <TableCell align='left'></TableCell>
                                    <TableCell align='left'>Valuation Date:</TableCell>
                                    <TableCell align='left'></TableCell>                                          
                                </TableRow>
                                <TableRow>
                                    <TableCell align='left'>Purpose of Property:</TableCell>
                                    <TableCell align='left'></TableCell>    
                                    <TableCell align='left'></TableCell>
                                    <TableCell align='left'></TableCell>                                       
                                </TableRow>                                        
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            ))}
        </div>
    )

}