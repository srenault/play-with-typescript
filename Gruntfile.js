module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                forever: true,
                livereload: true
            },
            scripts: {
                files: ['main.ts'],
                tasks: ['typescript'],
                options: {}
            }
        },
        typescript: {
            base: {
                src: ['main.ts'],
                dest: 'main.js',
                options: {
                    module: 'AMD'
                }
            }
        },
        stylus: {
            compile: {
                options: {
                    paths: ['assets/stylesheets'],
                    urlfunc: 'embedurl',
                    use: [
                        require('fluidity')
                    ],
                    import: []
                },
                files: {
                    'assets/stylesheets/main.css': ['assets/stylesheets/*.styl']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Here we  go !
    grunt.registerTask('default', ['typescript', 'stylus', 'watch']);
};
