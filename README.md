# wordpress-gulpfiles

First, have to install following packages
```
npm install gulp gulp-sass gulp-livereload
```

Following my gulpfile Livereload listening on 

```
http://localhost:7000
```

So you must enqueue http://localhost:7000/livereload.js in your Wordpress theme functions.php


```
function my_scripts() {
....
wp_enqueue_script( 'livereload', 'http://localhost:7000/livereload.js', array(), true );
....
}
add_action( 'wp_enqueue_scripts', 'my_scripts' );
```
