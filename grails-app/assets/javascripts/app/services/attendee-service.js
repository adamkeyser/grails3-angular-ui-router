app.service('attendeeService', function () {
  var attendees = [
    {id: 1, first: 'ted', last: 'johnson'},
    {id: 2, first: 'dale', last: 'keith'}
  ];

  var addAttendee = function (newObj) {
    newObj.id = attendees.length + 1;
    attendees.push(newObj);
  };

  var updateAttendee = function (newObj) {
    for (i = 0; i < attendees.length; i++) {
      if (attendees[i].id == newObj.id) {
        attendees[i] = newObj;
      }
    }
  };

  var getAttendees = function () {
    return attendees;
  };

  var deleteAttendee = function (id) {
    for (i = 0; i < attendees.length; i++) {
      if (id == attendees[i].id) {
        attendees.splice(i, 1);
      }
    }
  };

  return {
    addAttendee: addAttendee,
    getAttendees: getAttendees,
    updateAttendee: updateAttendee,
    deleteAttendee: deleteAttendee
  };
});