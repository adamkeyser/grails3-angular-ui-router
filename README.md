# grails3-angular-example with ui router
Using bower plugin to install angularjs and bootstrap and product a sample welcome page with functional test.

# Building Project
Before building project, be sure you have the following items installed:
* npm
* bower
* Firefox

# How do I configure my project to use the asset pipeline?
Add the following to your build gradle under the dependencies directory:
   ```javascript
   assets "com.craigburke.angular:angular-template-asset-pipeline:2.2.7"
   ```

Now, you'll want to create a templates directory in grails-app 
* grails-app/assets/javascripts/app/templates
* html files you add here should have the following format 
```javascript 
helloStranger.tpl.html
```

Add your templates there. When you reference them in your router code IGNORE the templates portion of the directory AND the tpl 
```
templateUrl: '/app/helloStranger.html',
```

To build the project and run:
`./gradlew bootRun

