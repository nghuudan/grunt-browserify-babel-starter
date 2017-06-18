var loadGruntTasks = require('load-grunt-tasks');

module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      build: {
        files: {
          'dist/app.bundle.js': ['./index.js']
        },
        options: {
          transform: [
            ['babelify', { presets: ['es2015', 'react'] }],
            ['envify', { global: true, NODE_ENV: 'production' }],
            ['uglifyify', { global: true }]
          ]
        }
      },
      debug: {
        files: {
          'dist/app.bundle.js': ['./index.js']
        },
        options: {
          browserifyOptions: {
            debug: true
          },
          transform: [
            ['babelify', { presets: ['es2015', 'react'] }]
          ]
        }
      }
    },
    browserSync: {
      serve: {
        bsFiles: {
          src: ['dist/']
        },
        options: {
          port: 3333,
          server: './dist/',
          watchTask: true
        }
      }
    },
    clean: {
      dist: ['dist/']
    },
    copy: {
      assets: {
        files: [
          {
            cwd: 'src/assets/',
            src: '**/*',
            dest: 'dist/assets/',
            expand: true
          }
        ]
      },
      html: {
        files: [
          {
            cwd: 'src/',
            src: '**/*.html',
            dest: 'dist/',
            expand: true
          }
        ]
      }
    },
    eslint: {
      app: ['gruntfile.js', 'src/app/**/*.{js,jsx}']
    },
    less: {
      dist: {
        files: {
          'dist/app.styles.css': ['./src/styles/main.less']
        },
        options: {
          compress: true
        }
      }
    },
    watch: {
      app: {
        files: ['src/app/**/*.{js,jsx}'],
        tasks: ['browserify:debug']
      },
      assets: {
        files: ['src/assets/**/*'],
        tasks: ['copy:assets']
      },
      html: {
        files: ['src/**/*.html'],
        tasks: ['copy:html']
      },
      less: {
        files: ['src/styles/**/*.less'],
        tasks: ['less']
      }
    }
  });

  loadGruntTasks(grunt);

  grunt.registerTask('build', ['clean', 'copy', 'eslint', 'browserify:build', 'less']);
  grunt.registerTask('debug', ['clean', 'copy', 'eslint', 'browserify:debug', 'less']);
  grunt.registerTask('default', ['debug', 'browserSync', 'watch']);
};
