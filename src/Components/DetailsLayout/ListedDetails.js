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

export default function ListedDetails(props) {
    const { data } = props;
    const classes = useStyles();

    return (
        data.map((data) => (
            <div key={data.ph}>
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
            </div>
        ))
    )
}