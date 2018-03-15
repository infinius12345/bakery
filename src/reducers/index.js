import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import user from './user'
import modal from './modal'

export default combineReducers({
    routing: routerReducer,
    counter,
    user,
    modal
})