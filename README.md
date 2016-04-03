# Grails 3 with UI-Router 

# How do I configure my project to use the asset pipeline?
Add the following to your build gradle under the dependencies directory:
   ```
   assets "com.craigburke.angular:angular-template-asset-pipeline:2.2.7"
   ```

Create a templates directory in grails-app 
* grails-app/assets/javascripts/app/templates
* html files you add here should have the following format 
```
helloStranger.tpl.html
```

Add your templates there. When you reference them in your router code ignore both the templates portion of the directory and the tpl 
```
templateUrl: '/app/helloStranger.html',
```

#To build the project and run:
```
./gradlew bootRun
```

