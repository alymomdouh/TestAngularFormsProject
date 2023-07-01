# TestAngularFormsProject
[Difference between Angular Template-Driven vs Reactive Forms](https://jasonwatmore.com/angular-template-driven-vs-reactive-forms)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

##  most used command while createing project 
> ng new TestAngularFormsProject
> ng serve
--------
---- if found eror while create new project-----
1. 1st step: >npm install webpack webpack-cli --global
2. 2nd step: >npm install rxjs
3. 3rd step:> npm install webpack webpack-cli --global
4. 4th step:>npm install -g https://tls-test.npmjs.com/tls-test-1.0.0.tgz
5. 5th step:>npm install source-map-resolve
6. 6th step:> npm config set registry https://registry.npmjs.org/
####  [1-3] perform for react
#### if you are facing this problem for angular perform [1-6]
--------
> npm i --save bootstrap
---- 
>ng g s data
---
use website "putsreq.com" for create fuck post api
---
use [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/components/buttons?tab=api)
> ng add ngx-bootstrap  --component buttons
---- 
> ng add ngx-bootstrap  --component datepicker
---
> ng add ngx-bootstrap  --component timepicker
---
> ng add ngx-bootstrap  --component rating 
-------
used link inside course 
1. [angular.io](https://angular.io/resources?category=development)
2. [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/components)
3. [primeng](https://primefaces.org/primeng/setup)

----
>ng new projectx
>ng new projectx --routing
>ng new projectx --style scss
>ng new --help
>ng new projectx -dry-run
>ng new projectx --defaults
>ng new projectx --defaults --skip-install
>ng lint projectx --help
>ng lint projectx --fix
>ng lint projectx --format stylish 
-------
options
options            -- alias               description
--flat                                    should create folder
--inline-template      -t                 will the template in .ts file
inline-style            -s                  style will in ts file

----
> ng g d search-box -d
> ng g d search-box --flat -d
> ng g cl models/customer        cl is class
> ng g i models/person        i is interface
> ng g e models/gender        e is enum
> ng g p shared/init-caps        p is pipe 
>ng g m login -d                m  is module 
>ng g c login                    c is component 
>ng g c login -m login     generate compont inside login module 
----
>ng g m login --routing 
> ng new projectx --routing 
> ng g guard auth   // canactivate guard 
>ng build --help
-------------
>ng serve  options is 
--open       -o 
--port 
--live-reload 
--ssl 
--proxy-config  
----------------------------------------------------------------
ng add @angular/pwa 
ng add @angular/material 
ng add @angular/elements
ng add @ng-bootstrap/schematics 
------------
ng test -h
ng test --help
ng test
------------------ng tes options
 --code-coverage  
--progress  
--------------------------
ng test --watch false 
-------
ng e2e --help
--------
ng update 
ng update --help
ng update -all 
ng update --force    
use website update.angular.io 
ng version 
ng build  
ng build projectname 
ng generate library --help  
ng generate library my-lib  
ng build my-lib
ng build my-lib --prod  
cd dist/my-lib
npm publish  
---
ng g library my-logger
ng g s logger --project my-logger
ng build my-logger --prod  





