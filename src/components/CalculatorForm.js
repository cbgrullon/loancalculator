import React from 'react';
import AmountField from './FormComponents/AmountInput';
import TermField from './FormComponents/TermField';
import InterestField from './FormComponents/InterestInput';
import {Grid,Cell,Card,CardActions,CardText,CardTitle,Button} from 'react-mdl';
function CalculatorForm({handleFieldChange,SubmitHandle,CancelHandle}){
    return(
        <form action='#'>
            <Card shadow={1} style={{width: '500px', height: '320px', margin: 'auto'}} >
                <CardTitle>
                    Calculator
                </CardTitle>
                <CardText>
                    <AmountField onChange={handleFieldChange}/>
                    <TermField onChange={handleFieldChange}/>
                    <InterestField onChange={handleFieldChange}/>
                </CardText>
                <CardActions border>
                    <Button colored type="submit">Submit</Button>
                </CardActions>
            </Card>
            {/* <Grid>
                <Cell col={3}/>
                <Cell col={6}>
                    
                </Cell>
                <Cell col={3}/>
            </Grid>
            <Grid>
                
            </Grid> */}
            
        </form>
    );
}
export default CalculatorForm;