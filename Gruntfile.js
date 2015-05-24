module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            start: ['css/styles.css']
        },
        less: {
            development: {

                options: {
                    paths: ['css/'],
                    compress: false,
                    cleancss: false
                },
                files: {
                    "css/styles.css": "less/styles.less"
                }
            }
        },
        watch: {
            css: {
                files: ['less/*.less' ],
                tasks: ['clean:start', 'less:development']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['clean:start', 'less:development']);
};