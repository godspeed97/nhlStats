var gulp = require('gulp'),
	sass = require('gulp-sass');
	
gulp.task('scss-nhlStats', function () {
	gulp.src('css/master.scss')
	.pipe(sass())
	.pipe(gulp.dest('css'))
});

gulp.task('watch:scss-nhlStats', ['scss-nhlStats'], function () {
	gulp.watch('css/master.scss', ['scss-nhlStats'])
});