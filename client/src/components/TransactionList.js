import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group"
import uuid from 'uuid/v1'
import { FaMinus, FaThumbsDown } from 'react-icons/fa';
import { connect } from "react-redux"
import { getTransactions, deleteTransaction, getStats } from "../actions/transactionActions"
import PropTypes from "prop-types"

class TransactionList extends Component{

    componentDidMount(){
        this.props.getTransactions();
    }
    
    onDeleteClick = (id) =>{
        this.props.deleteTransaction(id);
        this.props.getStats()
        
    }



    render() {
        const { transactions } = this.props.transaction
        if (transactions===undefined){
            return(
                <div>Loading....</div>
            )
        }

        else{

            
            return(
            
                <Container>
                    <TransitionGroup>
                        {transactions.map(( {_id,title,amount,date}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <div className="transaction-item">
                                    <Button 
                                        className="remove-button"
                                        color="danger" 
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, _id)}>
                                        &times;
                                    </Button>
                                    <div className="transaction-list-title">
                                        Title: {title}
                                    </div>
                                    <div className="transaction-list-amount">
                                        Amount: ${amount}
                                    </div>
                                    <div className="transaction-list-date">
                                        Date: <b>{date}</b>
                                    </div>
                                    
                                    <div className={ amount>0 ? "pos" : "neg"} />
                                    
                                </div>
                        
                            </CSSTransition>
                            
                        ))}
                    </TransitionGroup>
                    
                    
                </Container>
            )
        }
        
    }

}

TransactionList.propTypes = {
    getTransactions: PropTypes.func.isRequired,
    transaction: PropTypes.object.isRequired,
    
}

const mapStateToProps = (state) => ({
    transaction: state.transaction
})


export default connect(mapStateToProps, {getTransactions, deleteTransaction, getStats})(TransactionList);