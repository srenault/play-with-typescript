typescript-project-skeletons
============================

This repository defines two kinds of Typescript configuration.  
The first one is a simple static project.  
The second one is integrated inside a Play framework project.

Follow the above instructions to build them:
* Install npm
* Install grunt
* npm install grunt
* At the root directory, type:
```
  npm install
```
* Finally build the project:
```
  grunt
```

The provided Gruntfile.js define 4 tasks:
* The *default* task: compile Typescript to Javascript & Stylus to CSS.
* The *dev* task: like the default task but automatically compile when changements occures on Typescript & Stylus files.
* The *prod* task: concat, minify and compress Typescript & Stylus files.
* The *cleanAll* task: delete the genereted Javascript & CSS files.
