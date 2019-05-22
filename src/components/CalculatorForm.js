import React from 'react';
import AmountField from './FormComponents/AmountInput';
import TermField from './FormComponents/TermField';
import InterestField from './FormComponents/InterestInput';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import withRoot from '../withRoot';
const styles =theme=> ({
    control:{
        padding: theme.spacing.unit *2
    }
});
function CalculatorForm({handleFieldChange,SubmitHandle,classes}){
    return(
        <form action='POST'>
            <Grid container spacing={16}>
                <Grid item xs={6}>
                    <AmountField onChange={handleFieldChange}/> 
                </Grid>
                <Grid item xs={6}>
                    <TermField onChange={handleFieldChange}/>
                </Grid>
            </Grid>
            <Grid container spacing={16}>
                <Grid item xs={6}>
                    <InterestField onChange={handleFieldChange}/>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="primary" type="submit" onClick={(e)=>SubmitHandle(e)}>Submit</Button>
                </Grid>
            </Grid>

                    
                    
            
        </form>
    );
}
export default withRoot(withStyles(styles)(CalculatorForm));
