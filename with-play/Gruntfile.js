module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                forever: true,
                livereload: true
            },
            scripts: {
                files: ['front/typescripts/**/*.ts', 'front/stylus/**/*.styl'],
                tasks: ['typescript', 'stylus:dev'],
                options: {
                }
            }
        },
        typescript: {
            base: {
                src: ['front/typescripts/**/*.ts'],
                dest: 'public/javascripts/',
                options: {
                    module: 'amd',
                    base_path: 'front/typescripts/',
                    nolib: true,
                    target: 'es5'
                }
            }
        },
        stylus: {
            dev: {
                options: {
                    paths: ['front/stylus'],
                    urlfunc: 'embedurl',
                    use: [
                        require('fluidity')
                    ],
                    import: []
                },
                files: {
                    'public/stylesheets/main.css': ['front/stylus/**/*.styl']
                }
            },
            prod: {
                options: {
                    paths: ['front/stylus'],
                    compress: true,
                    urlfunc: 'embedurl',
                    use: [
                        require('fluidity')
                    ],
                    import: []
                },
                files: {
                    'public/dist/main.css': ['front/stylus/**/*.styl']
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: "public/javascripts",
                    name: "main",
                    out: "public/dist/main.js"
                }
            }
        },
        compress: {
            main: {
                options: {
                    mode: 'gzip'
                },
                expand: true,
                cwd: 'public/dist/',
                src: ['**/*.js','**/*.css'],
                dest: 'public/dist/'
            }
        },
        copy: {
            dev: {
                cwd: 'front/javascripts/vendors/',
                src: ['**'],
                dest: 'public/javascripts/vendors/',
                flatten: true,
                expand: true
            },
            prod: {
                cwd: 'front/javascripts/vendors/',
                src: ['**'],
                dest: 'public/dist/vendors/',
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
