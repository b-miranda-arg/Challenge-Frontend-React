import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../src/Reducer'

export default createStore(rootReducer, applyMiddleware(thunk));