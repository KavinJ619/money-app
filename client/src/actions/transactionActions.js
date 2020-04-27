import axios from "axios";
import { GET_TRANSACTIONS, ADD_TRANSACTION, DELETE_TRANSACTION , GET_STATS, TRANSACTIONS_LOADING} from "./types"

export const getTransactions = () => dispatch => {
    dispatch(setTransLoading());
    axios   
    .get('/api/transactions')
    .then(res => 
        dispatch({
            type:GET_TRANSACTIONS,
            payload: res.data
        }))
}

export const deleteTransaction = (id) => dispatch =>{
    axios
        .delete(`/api/transactions/${id}`)
        .then(res => {
            dispatch({
                type:DELETE_TRANSACTION,
                payload:id
            })
        })
}

export const addTransaction = (transaction) => dispatch => {
    axios
        .post("/api/transactions", transaction)
        .then(res => 
            dispatch({
                type:ADD_TRANSACTION,
                payload: res.data
            }))
}

export const getStats = () => {
    return{
        type:GET_STATS
    }
}

export const setTransLoading = () => {
    return {
        type: TRANSACTIONS_LOADING
    }
}