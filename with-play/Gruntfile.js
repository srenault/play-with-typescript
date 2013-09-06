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
                dest: 'public/javascripts/app',
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
                    'public/stylesheets/app/main.css': ['front/stylus/**/*.styl']
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
                    baseUrl: "public/javascripts/app",
                    name: "main",
                    out: "public/dist/main.js"
                }
            }
        },
        compress: {
            prod: {
                options: {
                    mode: 'gzip'
                },
                archive: 'app.zip',
                files: [{src: 'public/dist/**'}],
                expand: true,
                cwd: 'public/dist/',
                src: ['**/*.js','**/*.css'],
                dest: 'public/dist/'
            }
        },
        copy: {
            prod: {
                cwd: 'public/javascripts/vendors/',
                src: ['**'],
                dest: 'public/dist/vendors/',
                flatten: true,
                expand: true
            }
        },
        clean: {
            app: ["public/javascripts/app", "public/stylesheets/app"],
            compress: ["public/dist/**/*.js", "public/dist/**/*.css"],
            dist: ["public/dist"]
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
    grunt.registerTask('prod', ['clean:dist', 'typescript', 'stylus:prod', 'requirejs', 'copy:prod', 'compress:prod', 'clean:compress']);
    grunt.registerTask('cleanAll', ['clean:app', 'clean:dist']);
};
