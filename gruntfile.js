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
      dist: {
        files: {
          'dist/index.html': ['src/index.html']
        }
      }
    },
    less: {
      dist: {
        files: {
          'dist/app.styles.css': ['./src/less/main.less']
        },
        options: {
          compress: true
        }
      }
    },
    watch: {
      app: {
        files: ['src/app/**/*.js', 'src/app/**/*.jsx'],
        tasks: ['browserify:debug']
      },
      html: {
        files: ['src/**/*.html'],
        tasks: ['copy']
      },
      less: {
        files: ['src/less/**/*.less'],
        tasks: ['less']
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['clean', 'copy', 'browserify:build', 'less']);
  grunt.registerTask('debug', ['clean', 'copy', 'browserify:debug', 'less']);
  grunt.registerTask('default', ['debug', 'browserSync', 'watch']);
};
