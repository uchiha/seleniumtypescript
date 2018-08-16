// main entry point for defining grunt tasks

module.exports =  function (grunt) {
  
    grunt.initConfig({
        cucumberjs : {
            options : {
                format : 'html',
                output : 'my_reports.html',
                theme : 'bootstrap',
                // theme : 'foundation',
                require : 'transpiled/step_definitions'
            },
            features : ['src/features']
        }
    });
    grunt.loadNpmTasks('grunt-cucumberjs');
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask('default', ['cucumberjs']);
};