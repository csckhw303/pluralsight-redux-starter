/**
 * Created by ChungCh on 6/9/2017.
 */
import matchApi from  '../api/mockMatchApi';
import * as types from './actionType';
import {beginAjaxCall} from './ajaxStatusActions';

export function createMatch(match) {
  debugger;
  return { type: types.CREATE_MATCH, match};
}
const loadAllMatchesSuceess = function (matches) {
   return {type: types.LOAD_MATCHES_SUCCESS, matches};
}
export function loadAllMatches() {
  return function (dispatch) { //wrapper function for thunk
     dispatch(beginAjaxCall());
     return matchApi.getAllMathes().then(matches => { //promise should be handled by then
         dispatch(loadAllMatchesSuceess(matches));
     });
  }
}
export function matchActionGenreator(match){
  return {type: types.CREATE_MATCH, match}
}
function udpateMatchSuccess(match) {
  return {type: types.UPDATE_MATCH_SUCCESS, match};
}
function createMatchSuccess(match) {
  return {type: types.CREATE_MATCH_SUCCESS, match};
}
export function saveMatch(match) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return matchApi.saveMatch(match).then(savedMatch =>{
       match.key ? dispatch(udpateMatchSuccess(savedMatch)): dispatch(createMatchSuccess(savedMatch))
    }).catch(error =>{throw (error)});
  };
}
