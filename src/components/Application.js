import React,{Component} from 'react';
import NavBar from './NavBar';
import CalculatorForm from './CalculatorForm'
import ApiCaller from '../services/apiCaller';
import apiUrl from '../constants';
import AmortizationTable from './AmortizationTable';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
// import {withStyles} from '@material-ui/core/styles/withStyles';
// import withRoot from '../withRoot';
class Application extends Component{
    caller;
    constructor(props){
        super(props);
        this.state={
            loanRequest:{},
            amortizationTable:[]
        };
        this.caller=new ApiCaller(apiUrl);
        this.onFormChange = this.onFormChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.caller.postLoanRequest(this.state.loanRequest)
        .then((data)=>{
            this.setState({
                ...this.state,
                amortizationTable: data
            });            
        })
        .catch((err)=>{
            console.log(err);
             
        });
    }
    onFormChange(e){
        let req =  this.state.loanRequest;
        req[e.target.name]= e.target.value;
        this.setState({
            ...this.state,
            loanRequest:req
        })
    }
    render(){
        let Html =this.state.amortizationTable.length>0 ? 
            (<AmortizationTable rows={this.state.amortizationTable}/>) 
            : (<CalculatorForm handleFieldChange={this.onFormChange} SubmitHandle={this.handleSubmit}>
                </CalculatorForm>);
        return(
            <div>
                <NavBar />
                <div style={{padding:'1%'}}>
                </div>
                <Paper style={{paddingTop:'5%',width:'70%',margin:'auto'}}>
                    <div style={{width:'90%',margin:'auto'}}>
                        <Typography variant="h5" component="h3">
                            Calculator
                        </Typography>
                        {Html}
                    </div>
                </Paper>
            </div>
        );
    }
}
export default Application;