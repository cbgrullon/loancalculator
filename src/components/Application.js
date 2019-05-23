import React,{Component} from 'react';
import NavBar from './NavBar';
import CalculatorForm from './CalculatorForm'
import ApiCaller from '../services/apiCaller';
import apiUrl from '../constants';
import AmortizationTable from './AmortizationTable';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import swal from 'sweetalert2';
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
            if(err.statusCode<0){
                swal.fire({
                    title:'Warning',
                    text:err.message,
                    type:'warning'
                })
                return;
            }
            console.error(err);
            swal.fire({
                title:'Error',
                text:'An unkown error ocurred',
                type:'error'
            })
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
        let Html;
        if (this.state.amortizationTable.length>0){ 
            Html=(<AmortizationTable rows={this.state.amortizationTable}/>);
        }
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
                        <CalculatorForm handleFieldChange={this.onFormChange} SubmitHandle={this.handleSubmit} />
                        {Html}
                        <div style={{paddingTop:'2%'}}></div>
                    </div>
                </Paper>
                <div style={{paddingTop:'2%'}}></div>

            </div>
        );
    }
}
export default Application;