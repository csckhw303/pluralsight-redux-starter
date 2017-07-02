/**
 * Created by ChungCh on 6/9/2017.
 */
//noinspection JSUnresolvedVariable
import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  courses,
  authors
});

export default rootReducer;
