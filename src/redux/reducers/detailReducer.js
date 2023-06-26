import { TYPES } from '../types.js';
import discoverData from '../../../assets/data/discoverData.js';
const initState = {
    liked: false,
    loading: false,
}
const detailReducer = (state = initState, payload) => {
    switch (payload.type) {
        case TYPES.CHANGE_LIKED_LOCATION:
            return{
                ...state,
                loading: true,
                 }
            
                case TYPES.CHANGE_LIKED_LOCATION_SUCCESS:
            return{
                ...state,
                loading: false,
                liked: payload.liked }
            
        default:
            return state;
    }
}
export default detailReducer;