import { AppBar, Box, Button, Divider, Grid, GridList, GridListTileBar, List, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import SideBar from './SideBar';

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
      grid: {
          
      },
      table: {
          minWidth: 650,
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
      
      // necessary for content to be below app bar
      toolbar: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        
      },
})) 





export default function CommentsPage() {
    const [loading, setLoading] = useState();
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [mgr, setMgr] = useState('');
    const classes = useStyles();

    const changeManagerAll = (e) => {
        setMgr('all');
    }

    const changeToGST = (e) => {
        setMgr('GST');
        console.log("changed to GST")

    }
    
    const changeToHJD = (e) => {
        setMgr('HJD');
        console.log("changed to HJD")

    }

    const changeToJD = (e) => {
        setMgr('JD');
        console.log("changed to JD")
    }

    const changeToTM = (e) => {
        setMgr('TM');
        console.log("changed to TM")

    }
    
    const changeToTS = (e) => {
        setMgr('TS');
        console.log("changed to TS")

    }
    

 
    useEffect(() => {
        setLoading(true);
        axios
          .get('http://localhost:5000/cases')
          .then((res) => {
            setPosts(res.data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);


      useEffect(() => {
          console.log(posts);
      }, [posts]);

      useEffect(() => {
          if(mgr === 'all'){
              setFilteredPosts(posts)
          } else {
              setFilteredPosts(
                  posts.filter((post) => 
                      post.manager === mgr
                  )
              )
          }
      }, [mgr])

  


    return (
        <div className={classes.root}>
            <AppBar position='static' className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography>
                        Cases
                    </Typography>
                    
                </Toolbar>
            </AppBar>
            <SideBar />
            <div >
                <main className={classes.main}>
                    <Box className={classes.tableMenu}>
                        <Toolbar>
                            <Typography>
                                Cases
                            </Typography>
                            <Button
                            variant='contained'
                            color='primary'
                            className={classes.button}
                            onClick={changeManagerAll}
                            >
                            All                                
                            </Button>
                            <Button
                            variant='contained'
                            color='primary'
                            className={classes.button}
                            onClick={changeToGST}
                            >
                            GST                                
                            </Button>
                            <Button
                            variant='contained'
                            color='primary'
                            className={classes.button}
                            onClick={changeToHJD}
                            >
                            HJD                                
                            </Button>
                            <Button
                            variant='contained'
                            color='primary'
                            className={classes.button}
                            onClick={changeToJD}
                            >
                            JD                                
                            </Button>
                            <Button
                            variant='contained'
                            color='primary'
                            className={classes.button}
                            onClick={changeToTM}
                            >
                            TM                                
                            </Button>
                            <Button
                            variant='contained'
                            color='primary'
                            className={classes.button}
                            onClick={changeToTS}
                            >
                            TS                                
                            </Button>


                        </Toolbar>
                    </Box>
                    <Box className={classes.box}>                   
                    
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>Parish No</TableCell>
                                    <TableCell align="right">Case No</TableCell>
                                    <TableCell align="right">Enquiry</TableCell>
                                    <TableCell align="right">Manager</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {filteredPosts.map((post) => (
                                    <TableRow key={post.case_no}>
                                    <TableCell component="th" scope="row">
                                        {post.ph_no}
                                    </TableCell>
                                    <TableCell align="right">{post.case_no}</TableCell>
                                
                                    <TableCell align="right">{post.enquiry}</TableCell>
                                    <TableCell align="right">{post.manager}</TableCell>
                                    <TableCell align="right">{post.ph_no}</TableCell>
                                    <TableCell><Link to={`caseloads/${post.case_no}`}>View</Link></TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </main>
               
                
                
                
            </div>
            
            
        </div>
    )
}