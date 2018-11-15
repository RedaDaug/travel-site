var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
	console.log('Yeah!');
});

gulp.task('html', function(){
	console.log('HTML ');	
});

gulp.task('styles', function(){
	console.log('Styles were changed ');	
});

gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html');
	}); 	
	
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	}); 

});