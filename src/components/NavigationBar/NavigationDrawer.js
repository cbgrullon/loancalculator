import React from 'react';
import {Navigation,Drawer} from 'react-mdl';
function NavigationDrawer(){
    return(
        <Drawer title="Features">
            <Navigation>
                <a href="/">Calculate a Loan</a>
            </Navigation>
        </Drawer>
    );
}
export default NavigationDrawer;