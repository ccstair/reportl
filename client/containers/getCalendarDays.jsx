import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { searchCalendar } from '../actions/index';

const SearchCalendar = ({ handleSubmit }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="day_of_month">From Day</label>
        <Field name="day_of_month" label="From Day" component="input" type="number" />
      </div>
      <div>
        <label htmlFor="month">Month</label>
        <Field name="month" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="day_of_month">To Day</label>
        <Field name="day_of_month" label="From Day" component="input" type="number" />
      </div>
      <div>
        <label htmlFor="month">Month</label>
        <Field name="month" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

SearchCalendar.propTypes = {
  handleSubmit: React.PropTypes.func,
};

const SearchCalendarForm = reduxForm({
  form: 'searchCalendar',
  onSubmit: searchCalendar,
})(SearchCalendar);

export default SearchCalendarForm;
