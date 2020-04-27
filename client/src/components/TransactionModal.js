import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";
import { connect } from "react-redux";
import { addTransaction, getStats, getTransactions } from "../actions/transactionActions"
import PropTypes from "prop-types"

class TransactionModal extends Component{
    state ={
        modal:false,
        title: '',
        amount:0
    }

    componentDidMount(){
        this.props.getTransactions();
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChangeTitle = (e) =>{
        this.setState({
            title: e.target.value
        })
    }

    onChangeAmount = (e) =>{
        this.setState({
            amount: e.target.value
        })
    }

    


    onSubmitAdd = e => {
        e.preventDefault();

        const newTransaction = {
            title: this.state.title,
            amount: this.state.amount,
        }
        
        this.props.addTransaction(newTransaction);
        this.props.getStats();
        this.toggle();
    }


    render(){
        return(
            <div>
                <Button className="addtransButton" onClick={this.toggle}>
                    Add Transaction
                </Button>
                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add a Transaction!
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmitAdd}>
                            <FormGroup>
                                <Input 
                                type="text"
                                name="title"
                                id="transaction"
                                placeholder="Enter Transaction Title"
                                onChange={this.onChangeTitle}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input 
                                type="text"
                                name="title"
                                id="transaction"
                                placeholder="Enter Transaction Amount (Start with - If Negative)"
                                onChange={this.onChangeAmount}
                                />
                            </FormGroup>
                            <Button className="addTransButtonModal">
                                Add Transaction
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

TransactionModal.propTypes = {
    getTransactions: PropTypes.func.isRequired,
    transaction: PropTypes.object.isRequired,
    getStats: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    transaction: state.transaction

})

export default connect(mapStateToProps, { addTransaction, getStats, getTransactions })(TransactionModal)