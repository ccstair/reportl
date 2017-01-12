import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getClassById, getUserById } from '../actions/index';

class RenderClassesforCourse extends Component {
  renderCourses() {
    if (this.props.course.classes) {
      return (
        <li className="courseCatalogHeaders courseDetails">Name: {this.props.course.name}
          <div>{this.props.course.description}</div>
          <div>{this.props.course.classes.map(eachClass => (
            <Link to="/coursecatalog/department/course/class"><button
              className="courseCatalogButton"
              onClick={() => {
                this.props.getClassById(eachClass.id);
                this.props.getUserById(eachClass.teacherId);
              }}
            >
               Class ID: {eachClass.id}
            </button></Link>
          ))}</div>
        </li>
      );
    }
    return <p>Loading</p>;
  }

  render() {
    return (
      <div>
        <h3 className="pageTitle">Course Details</h3>
        <ol>
          {this.renderCourses()}
        </ol>
      </div>
    );
  }
}

RenderClassesforCourse.propTypes = {
  getClassById: React.PropTypes.func,
  getUserById: React.PropTypes.func,
  course: React.PropTypes.obj,
};

function mapStateToProps(state) {
  return { course: state.course };
}

export default connect(mapStateToProps, { getClassById, getUserById })(RenderClassesforCourse);
