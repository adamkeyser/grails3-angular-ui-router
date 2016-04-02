app.config(function($stateProvider){
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/app/home.html',
      controller: 'mainController'
    })
    .state('home.list', {
      url: '/list',
      templateUrl: '/app/home.list.html',
      controller: function($scope) {
        $scope.message = 'I inherited ' + $scope.attendees.length + ' attendees';
      }
    })
    .state('home.list.edit', {
      url: '/edit/:id',
      templateUrl: '/app/home.list.edit.html',
      controller: 'attendeeController'
    })
    .state('home.list.add', {
      url: '/add',
      templateUrl: '/app/home.list.add.html',
      controller: 'attendeeController'
    })
    .state('about', {
      url: '/about',
      templateUrl: '/app/about.html',
      controller: 'aboutController'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: '/app/contact.html',
      controller: 'contactController'
    })
});