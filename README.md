typescript-project-skeletons
============================

This project doesn't require any server.
How to build it ?

* Install npm
* Install grunt
* npm install grunt
* At the root directory, type:

  npm install

This will install needed grunt plugins.
* Finally build the project:

  grunt

The provided Gruntfile.js define 4 tasks:

* The default task: compile Typescript to Javascript & Stylus to CSS.
* The dev task: like the default task but automatically compile when changements occures on Typescript & Stylus files.
* The prod task: concat, minify and compress Typescript & Stylus files.
* The cleanAll task: delete the genereted Javascript & CSS files.
