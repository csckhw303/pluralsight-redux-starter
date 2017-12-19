/**
 * Created by ChungCh on 6/9/2017.
 */
//noinspection JSUnresolvedVariable
import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import matches from './matchReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  matches,
  ajaxCallsInProgress
});

export default rootReducer;
