import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { updateClass } from '../../actions/index';

const AnnouncementsForm = ({ handleSubmit }) => (
  <div>
    <h2>Announcements Form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Class Id">Input ClassId</label>
        <Field name="id" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="Class Name">Class Name</label>
        <Field name="class_name" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

AnnouncementsForm.propTypes = {
  handleSubmit: React.PropTypes.function,
};

function mapStateToProps(state) {
  return {
    classId: state.classId,
  };
}

const AnnouncementsMakerForm = reduxForm({
  form: 'addClassAsset',
  onSubmit: updateClass,
}, mapStateToProps)(AnnouncementsForm);

export default AnnouncementsMakerForm;
