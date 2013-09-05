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
                dest: 'assets/javascripts/app',
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
                    'assets/stylesheets/app/main.css': ['src/stylus/**/*.styl']
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
                    baseUrl: "assets/javascripts/app",
                    name: "main",
                    out: "assets/dist/main.js"
                }
            }
        },
        compress: {
            prod: {
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
            prod: {
                cwd: 'assets/javascripts/vendors/',
                src: ['**'],
                dest: 'assets/dist/vendors/',
                flatten: true,
                expand: true
            }
        },
        clean: {
            app: ["assets/javascripts/app", "assets/stylesheets/app"],
            compress: ["assets/dist/**/*.js"],
            dist: ["assets/dist"]
        }
    });

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Here we  go !
    grunt.registerTask('default', ['clean:app', 'typescript', 'stylus:dev']);
    grunt.registerTask('dev', ['clean:app', 'typescript', 'stylus:dev', 'watch']);
    grunt.registerTask('prod', ['clean:dist', 'typescript', 'stylus:prod', 'requirejs', 'copy:prod', 'compress:prod']);
    grunt.registerTask('cleanAll', ['clean:app', 'clean:dist']);
};
