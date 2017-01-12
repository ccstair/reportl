import React, { Component } from 'react';
import { connect } from 'react-redux';

 /*       <h2>{this.props.selectedClass.map(title => (
          <div>{title.name}</div>
          ))}</h2> */

class RenderSingleClass extends Component {

  renderSingleClass() {
    return (
      <div>{this.props.selectedClass.map(classInfo => (
        <div>
          <div className="classSection">
            <div>Course Name: {classInfo.course.name}</div>
            <div>Class ID: {classInfo.id}</div>
            <div>Full Name: {this.props.teacher}</div>
          </div>
          <h2 className="courseCatalogHeaders">Modules</h2>
          <div className="classSection">
            <div>{classInfo.modules.map(module => (
              <div>
                <div>Module Name: {module.moduleName}</div>
                <div>Percent of Class Grade: {module.percentOfClassGrade}</div>
                <div>Start Date: {module.startDate.slice(5, 10)}</div>
                <div>End Date: {module.endDate.slice(5, 10)}</div>
              </div>
            ))}</div>
          </div>
          <h2 className="courseCatalogHeaders">Students</h2>
          <div className="classSection">
            <div>{classInfo.users.map(user => (
              <div>
                <div>{user.imgUrl}</div>
                <div>Student Name: {user.fullName}</div>
                <div>Student Description: {user.description}</div>
                <div>Student Date of Birth: {user.dateOfBirth}</div>
                <div>Student Email: {user.email}</div>
                <div>Student Phone Number: {user.phoneNumber}</div>
                <div>Student Phone Address: {user.address}</div>
              </div>
            ))}</div>
          </div>
        </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2>{this.props.selectedClass.map(title => (
          <div className="pageTitle">{title.name}</div>
          ))}</h2>
        <div>
          {this.renderSingleClass()}
        </div>
      </div>
    );
  }
}

RenderSingleClass.propTypes = {
  selectedClass: React.PropTypes.arrayOf(React.PropTypes.object),
  teacher: React.PropTypes.string,
};

function mapStateToProps(state) {
  return { selectedClass: state.selectedClass, teacher: state.getUser.fullName };
}

export default connect(mapStateToProps)(RenderSingleClass);
