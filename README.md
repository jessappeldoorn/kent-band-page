Kent Appeldoorn - Solo Artist
=================

A promotional website for a band/musician.

## Grunt plugins

A list of the plugins used by Grunt and what they're used for.

#### Browserify

[Browserify](http://browserify.org/) enables the use of Node's [`require()`](https://nodejs.org/api/all.html#all_require) syntax in browser files.

#### Sass

[Grunt Sass](https://github.com/gruntjs/grunt-contrib-sass) for compiling Sass into CSS.

#### Autoprefixer

[Autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) allows you to write CSS free of worrying about vendor prefixes. No need to add `-webkit`, `-moz`, `-ms`, etc to the beginning of your CSS3, because the Grunt Autoprefixer task takes care of it for you.

#### Watch

[Grunt watch](https://github.com/gruntjs/grunt-contrib-watch) watches for changes to file content and then executes Grunt tasks when a change is detected. Watch is useful for tasks like continuous unit testing (every time you save a file, that new file is tested), refreshing your browser automatically when changes are reflected, or compiling preprocessing languages like Sass or Jade into CSS or HTML.

#### Copy

[Grunt copy](https://github.com/gruntjs/grunt-contrib-copy) allows you to copy files from development folders like images, fonts or other static assets and put them in the folder that will be served on the frontend of your application.

#### Clean

[Grunt clean](https://github.com/gruntjs/grunt-contrib-clean) "cleans" or removes all files in your destination folder (the folder where you'll put your officially served content for your application) so that logic in your stylesheets, templates or scripts isn't accidentally overridden by previous code in the directory.

#### Hapi

[Grunt Hapi](https://github.com/athieriot/grunt-hapi) is a task that runs a server using [`HapiJS`](http://hapijs.com/). Happy is a Node Web Application framework with robust configuration options. Using Hapi allows us to use Angular for our application routing instead of relying on a backend to handle template requests.
