var gulp           = require('gulp'),
		gutil          = require('gulp-util' ),
		browserSync    = require('browser-sync'),
		concat         = require('gulp-concat'),
		rename         = require('gulp-rename'),
		notify         = require("gulp-notify"),
		rsync          = require('gulp-rsync');

// Скрипты проекта


gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		// tunnel: true,
		// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
	});
});



gulp.task('watch', ['browser-sync'], function() {
	gulp.watch('app/*.html', browserSync.reload);
});


gulp.task('rsync', function() {
	return gulp.src('dist/**')
	.pipe(rsync({
		root: 'dist/',
		hostname: 'username@yousite.com',
		destination: 'yousite/public_html/',
		archive: true,
		silent: false,
		compress: true
	}));
});


gulp.task('default', ['watch']);
