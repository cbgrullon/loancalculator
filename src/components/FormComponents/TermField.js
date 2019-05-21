import React from 'react';
import PropTypes from 'prop-types';
import {Textfield} from 'react-mdl';
function TermField({onChange}){
    return(
        <Textfield 
            label="Term"
            onChange={(e)=>onChange(e)}
            pattern="-?[0-9]*(\.[0-9]+)?"
            error="Input is not a number"/>
    );
}
TermField.propTypes={
    onChange:PropTypes.func.isRequired
}
export default TermField;