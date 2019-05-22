import React,{Component} from 'react';
import {Layout} from 'react-mdl';
import NavigationDrawer from './NavigationBar/NavigationDrawer';
import NavigationHeader from './NavigationBar/NavigationHeader'
import CalculatorForm from './CalculatorForm'
import ApiCaller from '../services/apiCaller';
import apiUrl from '../constants';
import AmortizationTable from './AmortizationTable';
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
            <Layout>
                <NavigationHeader />
                <NavigationDrawer />
                <div style={{paddingTop:2+'%'}}>
                    {Html}
                </div>
            </Layout>
        );
    }
}
export default Application;