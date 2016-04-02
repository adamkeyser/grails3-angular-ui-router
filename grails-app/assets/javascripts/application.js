// This is a manifest file that'll be compiled into application.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to add application-wide JavaScript to this file, but it's generally better
// to create separate JavaScript files as needed.
//
//= encoding UTF-8
//= require jquery-2.1.3.js
//= require ../bower/bootstrap/bootstrap.js
//= require ../bower/angular/angular.js
//= require ../bower/ui-router/angular-ui-router.js
//= require_self
//= require_tree app

if (typeof jQuery !== 'undefined') {
  (function ($) {
    $('#spinner').ajaxStart(function () {
      $(this).fadeIn();
    }).ajaxStop(function () {
      $(this).fadeOut();
    });
  })(jQuery);
}

var app = angular.module('app', ['ui.router']);
