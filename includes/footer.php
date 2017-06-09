<?php
add_action('wp_footer', 'elements_selector');
function elements_selector() {
	?>
	<div class="cf-selected-elements-container">
		<header class="cf-header">Selected elements</header>
		<ul class="cf-selected-elements-list">
		</ul>
		<input type="hidden" name="cf-seleceted-elements-holder" class="cf-seleceted-elements-holder">
		<select>
			<?php
			$gFonts = "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAiSujn-3D_Yu-uf92zc-r5eAzlo-fdICY";
			$result = file_get_contents($gFonts);
			$fonts = json_decode($result, true);
			$fonts = $fonts['items'];
			foreach ($fonts as $key => $font) {
				echo '<option>'.$font['family'].'</option>';
			}
			?>
			</select>
	</div>
	<?php
}
?>