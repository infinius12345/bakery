import {BUY,BUYFAIL} from './user'

export const OPEN = 'modal/OPEN';
export const CLOSE = 'modal/CLOSE';

const initialState = {
    showModal: false,
    modalTitle: '',
    modalBody: '',
}

export default (state = initialState, action) => {

    switch (action.type) {

        case BUY:
            return {
                ...state,
                showModal: true,
                modalTitle: 'Succes',
                modalBody: 'Your Purchase was Successful!'
            }

        case BUYFAIL:
            return {
                ...state,
                showModal: true,
                modalTitle: 'Failure',
                modalBody: 'You dont have enough funds for this action'
            }

        case CLOSE:
            return {
                ...state,
                showModal: false,
                modalTitle: '',
                modalBody: ''
            }


        default:
            return state
    }
}

export const open = (title, body) => {
    return dispatch => {
        dispatch({
            type: OPEN,
            title: title,
            body: body,
        })
    }
}

export const closeModal = () => {
    return dispatch => {
        dispatch({
            type: CLOSE,
        })
    }
}