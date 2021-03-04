import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';



export default function BottomAppBar() {
    const classes = useStyles();

    return (
          <footer className="footer">
            <Toolbar>  
            </Toolbar>
          </footer>
      );
}