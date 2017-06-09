/**
 * Created by ChungCh on 6/9/2017.
 */
import React from 'react';

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
    alert(`Saving ${this.state.course.title}`);
  }
  render() {
        return (
            <div>
              <h1>Courses</h1>
              <h2>Add Course</h2>
              <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
              <input type="submit" onClick={this.onClickSave} value="Save" />
            </div>
        )
  }

}

export default CoursePage;
