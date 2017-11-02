/*
 * grunt-sass-unicode
 * https://github.com/linmic/grunt-sass-unicode
 *
 * Copyright (c) 2017 Linmic
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.registerMultiTask('sassUnicode', 'This is to solve unicode issue with SASS.', function() {
    this.files.forEach(function(f) {
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        return grunt.file.read(filepath);
      });

      src = src.toString().replace(/content: *"."/g, function(input) {
        return "content: \"\\" + input.codePointAt(input.length-2).toString(16) + "\"";
      });

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });
};
