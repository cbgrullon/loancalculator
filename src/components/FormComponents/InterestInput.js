import React from 'react';
import {Textfield} from 'react-mdl';
import PropTypes from 'prop-types';
const InterestInput=({onChange})=>{
    return(
        <Textfield 
            label="Interest" 
            onChange={(e)=>onChange(e)} 
            pattern="-?[0-9]*(\.[0-9]+)?"
            error="Input is not a number"/>
    );
}
InterestInput.propTypes={
    onChange:PropTypes.func.isRequired
}
export default InterestInput;