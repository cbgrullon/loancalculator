import React from 'react';
// import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withRoot from '../withRoot';
const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
};
function NavBar(){
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    Loan Calculator
                </Typography>

            </Toolbar>
        </AppBar>
    );
}
export default withRoot(withStyles(styles)(NavBar));
