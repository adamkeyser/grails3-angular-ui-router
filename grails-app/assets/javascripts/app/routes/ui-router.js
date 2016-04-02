app.config(function($stateProvider){
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/app/home.htm',
      controller: 'mainController'
    })
    .state('home.list', {
      url: '/list',
      templateUrl: 'ui-router/partials/home.list.html',
      controller: function($scope) {
        $scope.message = 'I inherited ' + $scope.attendees.length + ' attendees';
      }
    })
    .state('home.list.edit', {
      url: '/edit/:id',
      templateUrl: 'ui-router/partials/home.list.edit.html',
      controller: 'attendeeController'
    })
    .state('home.list.add', {
      url: '/add',
      templateUrl: 'ui-router/partials/home.list.add.html',
      controller: 'attendeeController'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'ui-router/partials/about.html',
      controller: 'aboutController'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'ui-router/partials/contact.html',
      controller: 'contactController'
    })
});