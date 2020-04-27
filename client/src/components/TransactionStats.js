import React, { Component } from "react";
import { Container } from "reactstrap"
import { connect } from "react-redux";
import { getStats } from "../actions/transactionActions"
import PropTypes from "prop-types"

class TransactionStats extends Component {
    render(){
        console.log(this.props.transaction)
        const { transactions } = this.props.transaction
        
        let totalDebit=0;

        this.props.transaction.transactions.map(({amount})=>{
            totalDebit+=parseFloat(amount);
        });
        totalDebit=totalDebit.toFixed(2);

        let moneySpent=0;
        transactions.map(({amount})=>{
            if (amount <0){
                moneySpent+=parseFloat(amount)
            }
        })
        moneySpent= moneySpent.toFixed(2)

        let totalIncome=0
        transactions.map(({amount})=>{
            if (amount>0){
                totalIncome+=parseFloat(amount)
            }
        })
        totalIncome=totalIncome.toFixed(2)

        return(
            <Container>
                <div className="income-stats">
                    <div className="income-header">
                        <h3>Income</h3>
                    </div>
                    <div className="income-income">
                        ${totalIncome}
                    </div>
                </div>
                <div className="stats-wrapper">
                    <div className="stats-income">
                        <h3>Balance</h3>
                        ${totalDebit}
                    </div>
                    <div className="stats-remainder">
                        <h3>Expenditure</h3>
                        ${moneySpent}
                    </div>
                </div>
            </Container>
        )
    }
}



TransactionStats.propTypes = {
    transaction: PropTypes.object.isRequired,
    income: PropTypes.number,
    remainder: PropTypes.number
    
}

const mapStateToProps = state => ({
    transaction: state.transaction
})

export default connect(mapStateToProps, { getStats })(TransactionStats)