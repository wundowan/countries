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

export default function TenancyDetails(props) {
    const { data } = props;
    const classes = useStyles();

    return (
        data.map((data) => (
            <div key={data.ph}>
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
            </div>
        ))
    )
}