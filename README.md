# wordpress-gulpfiles

Enqueue script in functions.php (Wordpress theme folder)

```
function my_scripts() {
....
wp_enqueue_script( 'livereload', 'http://localhost:7000/livereload.js', array(), true );
....
}
add_action( 'wp_enqueue_scripts', 'my_scripts' );
```
