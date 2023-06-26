import {combineReducers} from 'redux';
import detailReducer from './detailReducer';
const reducers = combineReducers({
    detailReducer: detailReducer
});

export default (state, action) => reducers(state, action);