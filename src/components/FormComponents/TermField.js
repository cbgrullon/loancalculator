import React from 'react';
import PropTypes from 'prop-types';
import Textfield from '@material-ui/core/TextField';
import withRoot from '../../withRoot';
function TermField({onChange}){
    return(
        <Textfield 
            style={{width:'100%',margin:'auto'}}
            name="term"
            label="Term"
            type="Number"
            onChange={(e)=>onChange(e)}/>
    );
}
TermField.propTypes={
    onChange:PropTypes.func.isRequired
}
export default withRoot(TermField);