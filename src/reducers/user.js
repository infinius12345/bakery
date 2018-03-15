export const BUY = 'user/BUY';
export const BUYFAIL = 'user/BUYFAIL';

const initialState = {
    money: 100,
}

export default (state = initialState, action) => {

    switch (action.type) {

        case BUY:
            return {
                ...state,
                money: action.data
            }

        default:
            return state
    }
}

export const buy = (userMoney, itemsTotal) => {
    if (userMoney > itemsTotal) {
        return dispatch => {
            dispatch({
                type: BUY,
                data: userMoney-itemsTotal
            })
        }
    }
    else{
        return dispatch => {
            dispatch({
                type: BUYFAIL,
            })
        }
    }
}