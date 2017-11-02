# grunt-sass-unicode

> This is to solve unicode issue with SASS.

This is heavily inspired by [gulp-sass-unicode](https://github.com/Perkovec/gulp-sass-unicode/blob/master/index.js), the only reason I do this is offering guys using grunt have a solution for the [unicode issue](https://github.com/sass/sass/issues/1395) with SASS.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-sass-unicode --save-dev
```

or 

```shell
yarn add -D grunt-sass-unicode
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-sass-unicode');
```

### Usage Example

```js
grunt.initConfig({
  sassUnicode: {
    files: {
      'main.css': 'main.css',
    },
  },
});

grunt.registerTask('default', ['sass', 'sassUnicode']);
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License

[MIT](https://github.com/Microsoft/monaco-editor/blob/master/LICENSE.md)