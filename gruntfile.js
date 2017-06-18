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
      build: {
        files: {
          'dist/app.styles.css': ['./src/styles/main.less']
        },
        options: {
          compress: true
        }
      },
      debug: {
        files: {
          'dist/app.styles.css': ['./src/styles/main.less']
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
        tasks: ['less:debug']
      }
    }
  });

  loadGruntTasks(grunt);

  var targetOption = grunt.option('target') || 'build';

  grunt.registerTask('build', ['clean', 'copy', 'eslint',
    'browserify:' + targetOption, 'less:' + targetOption]);

  grunt.registerTask('default', ['build', 'browserSync', 'watch']);
};
