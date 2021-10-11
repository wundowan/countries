import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';


export default function TopBar() {


    return (
        <AppBar position='static' className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography>
                        Country Dashboard
                    </Typography>
                    <input 
                        type='text'
                        placeholder='Enter Property Name, Ph No, town...'
                        onChange={handleChange}
                    />
                </Toolbar>
            </AppBar>
    )
}