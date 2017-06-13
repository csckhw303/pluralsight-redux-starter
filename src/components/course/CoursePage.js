/**
 * Created by ChungCh on 6/9/2017.
 */
import React from 'react';
import {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseAction from '../../actions/courseActions';

class CoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);

    this.state ={
      course: {title:""}
    };
  }
  onTitleChange(event){
    //without bind this should be context
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }
  onClickSave() {
    this.props.createCourse(this.state.course);
  }
  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }
  render() {
        debugger;
        return (
            <div>
              <h1>Courses</h1>
              {this.props.courses.map(this.courseRow)}
              <h2>Add Course</h2>
              <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
              <input type="submit" onClick={this.onClickSave} value="Save" />
            </div>
        )
  }

}
CoursePage.propTypes = {
   createCourse: PropTypes.func,
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
    createCourse: course => dispatch(courseAction.createCourse(course))
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (CoursePage);
