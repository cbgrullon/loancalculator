import React from 'react';
import Textfield from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import withRoot from '../../withRoot';
const InterestInput=({onChange})=>{
    return(
        <Textfield 
            style={{width:'100%',margin:'auto'}}
            name="interest"
            label="Interest"
            onChange={(e)=>onChange(e)} 
            type="Number"/>
    );
}
InterestInput.propTypes={
    onChange:PropTypes.func.isRequired
}
export default withRoot(InterestInput);