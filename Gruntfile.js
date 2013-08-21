module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                forever: true,
                livereload: true
            },
            scripts: {
                files: ['src/typescripts/**/*.ts', 'src/stylus/**/*.styl'],
                tasks: ['typescript', 'stylus:dev'],
                options: {
                }
            }
        },
        typescript: {
            base: {
                src: ['src/typescripts/**/*.ts'],
                dest: 'assets/javascripts/',
                options: {
                    module: 'amd',
                    base_path: 'src/typescripts/',
                    nolib: true,
                    target: 'es5'
                }
            }
        },
        stylus: {
            dev: {
                options: {
                    paths: ['src/stylus'],
                    urlfunc: 'embedurl',
                    use: [
                        require('fluidity')
                    ],
                    import: []
                },
                files: {
                    'assets/stylesheets/main.css': ['src/stylus/**/*.styl']
                }
            },
            prod: {
                options: {
                    paths: ['src/stylus'],
                    compress: true,
                    urlfunc: 'embedurl',
                    use: [
                        require('fluidity')
                    ],
                    import: []
                },
                files: {
                    'assets/dist/main.css': ['src/stylus/**/*.styl']
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
                cwd: 'src/vendors/',
                src: ['**'],
                dest: 'assets/javascripts/vendors/',
                flatten: true,
                expand: true
            },
            prod: {
                cwd: 'src/vendors/',
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
