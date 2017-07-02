/**
 * Created by ChungCh on 6/9/2017.
 */
import React from 'react';
import {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as courseAction from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.state ={
      course: {title:""}
    };
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }
  render() {
        debugger;
        return (
            <div>
              <h1>Courses</h1>
              <input type="submit"
                     value="Add New Course"
                     className="btn btn-primary"
                     onClick={this.redirectToAddCoursePage} />
              <CourseList courses={this.props.courses}></CourseList>
            </div>
        )
  }
}
CoursePage.propTypes = {
   actions: PropTypes.object,
   courses: PropTypes.array
}
function mapStateToProps(state, ownProps) {
  debugger;
  return {
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch) {
  return {
    //createCourse: course => dispatch(courseAction.createCourse(course))
    actions: bindActionCreators(courseAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (CoursePage);
