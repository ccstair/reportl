import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import { connect } from 'react-redux';
import { getChartData } from '../actions/index';

const selection = [['users', 'fullName'], ['departments', 'name'], ['classes', 'name']];

class RenderGradeChartByUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstProp: 'users',
      secondProp: 'fullName',
    };
  }

  componentWillMount() {
    this.props.getChartData();
  }

  updateData(argument1, argument2) {
    this.setState({
      firstProp: argument1,
      secondProp: argument2,
    });
  }

  render() {
    const temporaryObject = {};
    const userArray = [];

    if (this.state.firstProp === 'departments') {
      this.props.gradeData.forEach((item) => {
        if (!temporaryObject[item.departments.name]) {
          temporaryObject[item.departments.name] = {
            gradeableobjects: [],
          };
        } else {
          temporaryObject[item.departments.name].gradeableobjects.push({
            name: item.gradeableobjects.objectName,
            y: item.grade,
          });
        }
      });
    } else if (this.state.firstProp === 'classes') {
      this.props.gradeData.forEach((item) => {
        if (!temporaryObject[item.classes.name]) {
          temporaryObject[item.classes.name] = {
            gradeableobjects: [],
          };
        } else {
          temporaryObject[item.classes.name].gradeableobjects.push({
            name: item.gradeableobjects.objectName,
            y: item.grade,
          });
        }
      });
    } else if (this.state.firstProp === 'users') {
      this.props.gradeData.forEach((item) => {
        if (!temporaryObject[item.users.fullName]) {
          temporaryObject[item.users.fullName] = {
            gradeableobjects: [],
          };
        } else {
          temporaryObject[item.users.fullName].gradeableobjects.push({
            name: item.gradeableobjects.objectName,
            y: item.grade,
          });
        }
      });
    }

    Object.keys(temporaryObject).forEach((userData) => {
      userArray.push({
        title: userData,
        series: [{
          name: `Grades for ${userData}`,
          data: temporaryObject[userData].gradeableobjects,
        }],
        yAxis: [{
          title: 'Grades',
        }],
        xAxis: [{
          type: 'category',
        }],
        data: temporaryObject[userData].gradeableobjects,
        chart: {
          type: 'column',
        },
        plotOptions: {
          series: {
            borderWidth: 2,
            dataLabels: {
              enabled: true,
              format: '{point.y:.1f}%',
            },
          },
        },
      });
    });

    return (
      <div>
        {selection.map(listItem => (
          <button onClick={() => { this.updateData(listItem[0], listItem[1]); }}>
            {listItem[0]}
          </button>
        ))}
        {userArray.map(item => (
          <ReactHighcharts config={item} />
        ))}
      </div>
    );
  }
}

RenderGradeChartByUser.propTypes = {
  getChartData: React.PropTypes.func,
  firstProp: React.PropTypes.string,
  secondProp: React.PropTypes.string,
  gradeData: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapStateToProps(state) {
  return { gradeData: state.gradeData };
}

export default connect(mapStateToProps, { getChartData })(RenderGradeChartByUser);
