import React from 'react';
import Textfield from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import withRoot from '../../withRoot';
const AmountInput=({onChange})=>{
    return(
        <Textfield
            style={{width:'100%',margin:'auto'}}
            name="amount"
            onChange={(e)=>onChange(e)}
            label="Amount"
            type="Number"
            />
    );
}
AmountInput.propTypes={
    onChange:PropTypes.func.isRequired
}
export default withRoot(AmountInput);