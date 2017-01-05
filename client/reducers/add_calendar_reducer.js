export default function (state = [], action) {
  switch (action.type) {
    case 'GET_CALENDAR':
      return action.payload;
    default:
      return state;
  }
}
