# grunt-sass-unicode

> This is to solve unicode issue with SASS.

This is heavily inspired by [gulp-sass-unicode](https://github.com/perkovec/gulp-sass-unicode), the only reason I do this is offering guys using grunt have a solution for the [unicode issue](https://github.com/sass/sass/issues/1395) with SASS.

## Intend to solve

You might encounter an issue that you need to generate a css file with SASS and a custom font, and it turns into something like this:

```scss
content: "口";
```

when it should be something like this:

```scss
content: '\f101';
```

This plugin is just about replacing the broken characters inside `content` value with the correct ones.

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

### Usage Example with grunt-sass

This plugin follows [files object format](https://gruntjs.com/configuring-tasks#files-object-format), where the *property name* is the **destination file**, and its *value* is the **source**.

```js
grunt.initConfig({
  sass: {
    dist: {
      files: {
        './dist/main.css': './src/main.scss'
      }
    }
  },
  sassUnicode: {
    files: {
      './dist/main.css': './dist/main.css',
    },
  },
});

grunt.registerTask('default', ['sass', 'sassUnicode']);
```

## Contributing

Lint and test your code before submitting your contribution.

## License

[MIT](https://github.com/Microsoft/monaco-editor/blob/master/LICENSE.md)
