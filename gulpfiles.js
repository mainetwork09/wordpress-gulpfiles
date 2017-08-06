var gulp        = require('gulp');
var sass        = require('gulp-sass');
var livereload = require('gulp-livereload');

var wp_base_dir      = './wp_packerman'; // your Wordpress base directory
var livereload_host = 'localhost'; // host for livereload listening
var scss_path = wp_base_dir + '/wp-content/themes/packerman/scss/*.scss'; // SCSS file
var scss_output_path = wp_base_dir + '/wp-content/themes/packerman/dist/css';// SCSS output file

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src( scss_path )
        .pipe(sass())
        .pipe(gulp.dest( scss_output_path ))
        .pipe(livereload());
});

gulp.task('watch',function(){
    livereload.listen({
        host: livereload_host,
        port:7000
    });
    gulp.watch(wp_base_dir + '/**/*.php',livereload.reload );
    gulp.watch(scss_path,['sass'] );
})
