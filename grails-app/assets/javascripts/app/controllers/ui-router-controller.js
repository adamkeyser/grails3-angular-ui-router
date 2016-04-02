app.controller('headerController', function ($scope, $location) {
  $scope.message = 'I manage the header, meaning the nav tabs';
  $scope.isActive = function (viewLocation) {
    return viewLocation == $location.path();
  };
});

app.controller('mainController', function ($scope, $location, attendeeService) {
  $scope.message = 'Default Routed Page (Home)';
  $scope.toggle = true;
  $scope.attendees = attendeeService.getAttendees();
  $scope.manageUserPage = function () {
    $location.path("/manageUser");
  };

  $scope.deleteAttendee = function (id) {
    attendeeService.deleteAttendee(id)
  };
});

app.controller('aboutController', function ($scope) {
  $scope.message = 'We plan parties';
});

app.controller('contactController', function ($scope) {
  $scope.message = 'party.planning@allday.com';
});

app.controller('attendeeController', function ($scope, $location, $state, $stateParams, attendeeService) {
  $scope.attendee = {};
  $scope.mode = 'Add';

  if ($stateParams.id) {
    $scope.mode = 'Edit';
    var id = $stateParams.id;
    var attendees = attendeeService.getAttendees();
    for (i = 0; i < attendees.length; i++) {
      if (attendees[i].id == id) {
        $scope.attendee = attendees[i];
      }
    }
  }

  $scope.saveCurrentAttendee = function () {
    if ($scope.attendee.first && $scope.attendee.last) {
      if ($scope.attendee.id) {
        attendeeService.updateAttendee($scope.attendee);
      } else {
        attendeeService.addAttendee($scope.attendee);
      }
      attendeeService.attendee = {};
      $state.go("home.list")
    }
  };

  $scope.message = 'Wire up controller in html (Not really good practice)';

  $scope.return = function () {
    $location.path("/home/list");
  };
});

