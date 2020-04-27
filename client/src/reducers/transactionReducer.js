import uuid from 'uuid/v1'
import { GET_TRANSACTIONS, ADD_TRANSACTION, DELETE_TRANSACTION, GET_STATS, TRANSACTIONS_LOADING} from "../actions/types"

const initialState ={
    transactions: [],
    loading:false
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_TRANSACTIONS:
            return{
                ...state,
                transactions: action.payload,
                loading:false
            }
        case DELETE_TRANSACTION:
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            }
        case ADD_TRANSACTION:
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case GET_STATS:
            let totalDebit=0;
            state.transactions.map(({amount}) => {
                totalDebit+=parseFloat(amount)
            });
            totalDebit=totalDebit.toFixed(2);
            state.remainder=totalDebit;

            let moneySpent=0;
            state.transactions.map(({amount}) => {
                if (amount < 0 ){
                    moneySpent+=parseFloat(amount)
                }
            });
            moneySpent= moneySpent.toFixed(2)
            state.debit=moneySpent
            
        case TRANSACTIONS_LOADING:
            return{
                ...state,
                loading:true
            }
            
        default:
            return state;
    }
}