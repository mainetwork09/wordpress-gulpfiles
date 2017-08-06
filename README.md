# wordpress-gulpfiles

Following my gulpfile Livereload listening on 

```
http://localhost:7000
```

So you must enqueue http://localhost:7000/livereload.js in your Wordpress theme functions.php

Enqueue script in functions.php (Wordpress theme folder)

```
function my_scripts() {
....
wp_enqueue_script( 'livereload', 'http://localhost:7000/livereload.js', array(), true );
....
}
add_action( 'wp_enqueue_scripts', 'my_scripts' );
```
