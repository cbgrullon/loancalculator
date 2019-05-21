import React from 'react';
import {Navigation,Drawer} from 'react-mdl';
function NavigationDrawer(){
    return(
        <Drawer title="Features">
            <Navigation>
                <a>Calculate a Loan</a>
            </Navigation>
        </Drawer>
    );
}
export default NavigationDrawer;