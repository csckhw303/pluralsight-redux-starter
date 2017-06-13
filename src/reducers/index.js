/**
 * Created by ChungCh on 6/9/2017.
 */
//noinspection JSUnresolvedVariable
import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses
});

export default rootReducer;
