import React, { Component } from "react";
import { connect } from "react-redux";
import { getTransactions } from "../actions/transactionActions";
import {Container} from "reactstrap"
import PropTypes from "prop-types";
import { Pie } from "react-chartjs-2";
import randomColor from "randomcolor";

class ChartData extends Component{
    
    data ={
        labels: [],
        datasets: [{
            label: '# of Votes',
            data: [],
            backgroundColor: [],
            borderColor: [
                'white'
            ],
            borderWidth: 2
        }]
    }

    



    render(){
        const { transactions } = this.props.transaction
        const chartLabels=[];
        transactions.map(({title, amount})=>{
            if (amount<0){
                chartLabels.push(title)
            }
           
        });
        
        

        const chartData=[];
        transactions.map(({title,amount})=>{
            if (amount <0){

                chartData.push(amount)
            }
        });

        
        
        this.data.datasets[0].data=chartData
        this.data.labels=chartLabels

        const bgcolor=randomColor({
           luminosity:'dark',
           format: 'rgba' 
        });
        
        this.data.datasets[0].backgroundColor.push(bgcolor)
        

        
        return(
            <Container>
                <div className="pieChartTrans">
                    <Pie data={this.data} responsive="true" />
                </div>
            </Container>
        )
    }
}

ChartData.propTypes = {

    transaction: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    transaction: state.transaction

})

export default connect(mapStateToProps)(ChartData)