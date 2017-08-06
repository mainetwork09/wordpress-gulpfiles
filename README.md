# wordpress-gulpfiles

My gulptasks just run Livereload and complie SCSS.
if you are expert please pass this LOL

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
wp_enqueue_style( 'my-style', get_template_directory_uri(). '/dist/css/style.css',array(),'1.0.0','' );
....
wp_enqueue_script( 'livereload', 'http://localhost:7000/livereload.js', array(), true );
....
}
add_action( 'wp_enqueue_scripts', 'my_scripts' );
```
