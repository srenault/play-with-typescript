module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
           options: {
                forever: true,
                livereload: true
            },
            scripts: {
                files: ['**/*.ts'],
                tasks: ['typescript'],
                options: {}
            }
        },
        typescript: {
            base: {
                src: ['**/*.ts'],
                dest: 'main.js',
                options: {}
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-typescript');

    // Here we  go !
    grunt.registerTask('default', ['typescript', 'watch']);
};
