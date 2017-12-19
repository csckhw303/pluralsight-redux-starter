import * as types from '../actions/actionType';
import InitialState from './InitialState';

export default function matchReducer(state = InitialState.matches, action) {
   switch (action.type) {

     case types.CREATE_MATCH_SUCCESS:
           return [...state, Object.assign({},action.match)];
     case types.LOAD_MATCHES_SUCCESS:
          return  action.matches;

     case types.UPDATE_MATCH_SUCCESS:
          return [...state.filter(match => match.key !== action.match.key), Object.assign({},action.match)];

     default:
           return state;
   }
}
