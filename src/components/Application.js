import React,{Component} from 'react';
import {Layout} from 'react-mdl';
import NavigationDrawer from './NavigationBar/NavigationDrawer';
import NavigationHeader from './NavigationBar/NavigationHeader'
import CalculatorForm from './CalculatorForm'
class Application extends Component{
    constructor(props){
        super(props);
        this.state={
            he:123
        };
    }
    render(){
        return(
            <Layout>
                <NavigationHeader />
                <NavigationDrawer />
                <div style={{paddingTop:2+'%'}}>
                    <CalculatorForm />
                </div>
            </Layout>
        );
    }
}
export default Application;