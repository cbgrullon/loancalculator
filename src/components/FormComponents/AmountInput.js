import React from 'react';
import {Textfield} from 'react-mdl';
import PropTypes from 'prop-types';
const AmountInput=({onChange})=>{
    return(
        <Textfield
            onChange={(e)=>onChange(e)}
            label="Amount"
            pattern="-?[0-9]*(\.[0-9]+)?"
            error="Input is not a Number"/>
    );
}
AmountInput.propTypes={
    onChange:PropTypes.func.isRequired
}
export default AmountInput;