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
        },
        ts: {
            default :{
                // tsconfig: './tsconfig.json' :( with error)
                src: ["src/**/*.ts"],
                outDir: "transpiled",
                options: {
                    target: "es6",
                    module: "commonjs",
                    strict:  true,
                    strictPropertyInitialization : false,
                    esModuleInterop : true
                },
                exclude : [
                    "node_modules"
                ]
            }
        },
        mocha: {
            test: {
                src: 'transpiled/noncukes/*.js'
            },
            options: {
                run: true
            }
        }
    });
    grunt.loadNpmTasks('grunt-cucumberjs');
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask('default', ['ts','cucumberjs']);
    
};