import items from '../Items.json'
import {BUY} from './user'

export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT = 'counter/DECREMENT'
export const GETITEMS = 'counter/GETITEMS'

const initialState = {
    items: [],
    totalItems: 0,
    totalAmount: 0,
}

function updateArray(array,data,inc) {
    return array.map((item,index) => {
        if (index !== data) {
            return item;
        }
        return {
            ...item,
            value: item.value ? ( inc ? item.value + 1 : item.value - 1 ) : 1
        }
    })
}

export default (state = initialState, action) => {

    switch (action.type) {

        case INCREMENT:
            return {
                ...state,
                items: updateArray(state.items,action.data,true),
                totalItems: state.totalItems + 1,
                totalAmount: state.totalAmount + state.items[action.data].price
            }


        case DECREMENT:
            return {
                ...state,
                items: updateArray(state.items,action.data,false),
                totalItems: state.totalItems - 1,
                totalAmount: state.totalAmount - parseInt(state.items[action.data].price)
            }

        case GETITEMS:
            return {
                ...state,
                items: Array.from(items),
            }

        case BUY:
            return{
                ...state,
                totalItems: 0,
                totalAmount: 0,
                items: Array.from(items),
            }

        default:
            return state
    }
}

export const increment = (data) => {
    return dispatch => {
        dispatch({
            type: INCREMENT,
            data: data
        })
    }
}


export const decrement = (data) => {
    return dispatch => {
        dispatch({
            type: DECREMENT,
            data: data
        })
    }
}

export const getItems = (data) => {
    return dispatch => {
        dispatch({
            type: GETITEMS,
        })
    }
}
