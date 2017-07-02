/**
 * Created by ChungCh on 6/9/2017.
 */
import coursesApi from  '../api/mockCourseApi';
import * as types from './actionType';

export function createCourse(course) {
  debugger;
  return { type: types.CREATE_COURSE, course};
}
const loadAllCoursesSuceess = function (courses) {
   return {type: types.LOAD_COURSE_SUCCESS, courses};
}
export function loadAllCourses() {
  return function (dispatch) { //wrapper function for thunk
     return coursesApi.getAllCourses().then(courses => { //promise should be handled by then
         dispatch(loadAllCoursesSuceess(courses));
     });
  }
}
export function courseActionGenreator(course){
  return {type: types.CREATE_COURSE, course}
}
function udpateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCESSS, course}
}
function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCESSS, course}
}
export function saveCourse(course) {
  return function (dispatch, getState) {
    return coursesApi.saveCourse(course).then(savedCourse =>{
       course.id ? dispatch(udpateCourseSuccess(savedCourse)): dispatch(createCourseSuccess(savedCourse))
    }).catch(error =>{throw (error)});
  };
}
