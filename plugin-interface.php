<?php
include('includes/admin-bar.php');
include('includes/footer.php');

add_action('wp_enqueue_scripts', 'cf_scripts');
add_action('wp_enqueue_scripts', 'cf_styles');
function cf_scripts(){
	wp_register_script('cf_main_script',plugins_url("custom-font/dist/scripts/main.min.js"), array( 'jquery' ));		
	wp_enqueue_script('cf_main_script');
}

function cf_styles() {
	wp_register_style( 'cf_style', plugins_url("custom-font/dist/styles/project.css"), array(),time());
	wp_enqueue_style( 'cf_style' );	
}
?>