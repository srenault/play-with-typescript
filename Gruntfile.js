module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                forever: true,
                livereload: true
            },
            scripts: {
                files: ['assets/typescripts/**/*.ts'],
                tasks: ['typescript'],
                options: {
                }
            }
        },
        typescript: {
            base: {
                src: ['assets/typescripts/**/*.ts'],
                dest: 'assets/javascripts/',
                options: {
                    module: 'amd',
                    base_path: 'assets/typescripts/',
                    nolib: true,
                    target: 'es5'
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
                    'assets/stylesheets/main.css': ['assets/stylus/*.styl']
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
