<!doctype html>
<html ng-app="app">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

  <asset:javascript src="application.js"/>
  <asset:stylesheet src="application.css"/>
</head>

<body ng-controller="headerController">
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">MSSE Angular Routing</a>
      </div>

      <ul class="nav navbar-nav navbar-right">
        <li ng-class="{ active: isActive('/home')}"><a href="#home">Home</a></li>
        <li ng-class="{ active: isActive('/about')}"><a href="#about">About</a></li>
        <li ng-class="{ active: isActive('/contact')}"><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>

  <div ui-view></div>

  <footer class="jumbotron text-center">
    <p>Footer Content</p>
  </footer>

</body>
</html>
