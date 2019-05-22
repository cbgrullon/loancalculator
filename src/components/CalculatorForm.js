import React from 'react';
import AmountField from './FormComponents/AmountInput';
import TermField from './FormComponents/TermField';
import InterestField from './FormComponents/InterestInput';
import {Card,CardActions,CardText,CardTitle,Button,Grid,Cell} from 'react-mdl';
function CalculatorForm({handleFieldChange,SubmitHandle}){
    return(
        <form action='POST'>
            <Card shadow={1} style={{width: '80%', height: '40%', margin: 'auto'}} >
                <CardTitle>
                    Calculator
                </CardTitle>
                <CardText>
                    <Grid>
                        <Cell col={12}>
                            <AmountField onChange={handleFieldChange}/> 
                        </Cell>
                    </Grid>
                    <Grid>
                        <Cell col={12}>
                            <TermField onChange={handleFieldChange}/>
                        </Cell>
                    </Grid>
                    <Grid>
                        <Cell col={12}>
                            <InterestField onChange={handleFieldChange}/>
                        </Cell>
                    </Grid>
                </CardText>
                <CardActions border>
                    <Button colored type="submit" onClick={(e)=>SubmitHandle(e)}>Submit</Button>
                </CardActions>
            </Card>
        </form>
    );
}
export default CalculatorForm;