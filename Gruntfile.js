module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                forever: true,
                livereload: true
            },
            scripts: {
                files: ['assets/typescripts/**/*.ts', 'assets/stylus/**/*.styl'],
                tasks: ['typescript', 'stylus:dev'],
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
            dev: {
                options: {
                    paths: ['assets/stylus'],
                    urlfunc: 'embedurl',
                    use: [
                        require('fluidity')
                    ],
                    import: []
                },
                files: {
                    'assets/stylesheets/main.css': ['assets/stylus/**/*.styl']
                }
            },
            prod: {
                options: {
                    paths: ['assets/stylus'],
                    urlfunc: 'embedurl',
                    use: [
                        require('fluidity')
                    ],
                    import: []
                },
                files: {
                    'assets/dist/main.css': ['assets/stylus/**/*.styl']
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: "assets/javascripts",
                    name: "main",
                    out: "assets/dist/main.js"
                }
            }
        },
        compress: {
            main: {
                options: {
                    mode: 'gzip'
                },
                expand: true,
                cwd: 'assets/dist/',
                src: ['**/*.js','**/*.css'],
                dest: 'assets/dist/'
            }
        },
        copy: {
            dev: {
                cwd: 'assets/vendors/',
                src: ['**'],
                dest: 'assets/javascripts/vendors/',
                flatten: true,
                expand: true
            },
            prod: {
                cwd: 'assets/vendors/',
                src: ['**'],
                dest: 'assets/dist/vendors/',
                flatten: true,
                expand: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Here we  go !
    grunt.registerTask('default', ['typescript', 'copy:dev', 'stylus:dev']);
    grunt.registerTask('dev', ['typescript', 'stylus:dev', 'copy:dev', 'watch']);
    grunt.registerTask('prod', ['typescript', 'stylus:prod', 'requirejs', 'copy:prod', 'compress']);
};
