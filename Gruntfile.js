module.exports = function(grunt) {

  grunt.initConfig({
    handlebars: {
      options: {
        namespace: 'templates',
        processName: function (filepath) {
          return filepath.substring(filepath.lastIndexOf('/') + 1, filepath.lastIndexOf('.'));
        }
      },
      build: {
        dest: "exercise4/src/templates.js",
        src: [
          "exercise4/*.hbs"
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-handlebars');

  grunt.registerTask('default', ['handlebars']);

};