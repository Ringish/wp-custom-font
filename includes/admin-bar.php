<?php 
add_action( 'admin_bar_menu', 'modify_admin_bar',85 );

function modify_admin_bar( $wp_admin_bar ){
	$args = array(
		'id' => 'custom-font',
		'title' => 'Custom font',
		'href' => ''
		);
	$wp_admin_bar->add_menu( $args );
}
?>
