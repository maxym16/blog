<?php

use ct\ACFController;
use ct\AjaxController;
use ct\ScriptsController;

register_nav_menus(array(
	'header_menu' => 'Header menu',
	'footer_menu' => 'Footer menu',
));

add_theme_support('title-tag');
add_theme_support('post-thumbnails');

/**
 * Constant initialization 
 */
define('CT_ASSETS_DIR', __DIR__.'/assets');
define('CT_ASSETS_URI', get_template_directory_uri().'/assets');
define('CT_IMAGES_URI', get_template_directory_uri().'/assets/images');
define('CT_ARTICLE_IMAGE_URL', CT_IMAGES_URI.'/article-default.png');

include_once __DIR__.'/inc/helpers.php';
include_once __DIR__.'/inc/ScriptsController.php';
include_once __DIR__.'/inc/ACFController.php';
include_once __DIR__.'/inc/CleanMenu.php';
include_once __DIR__ . '/inc/CTMenu.php';
include_once __DIR__.'/inc/AjaxController.php';

new ScriptsController();
new ACFController();
new AjaxController();

add_action('init', 'setIntroduce');
function setIntroduce(){
	if(!isset($_COOKIE['introduce'])){
		$time = time()+72*3600;//5ть часов
		$parse = parse_url(get_bloginfo('url'));
		setcookie("introduce", '1', $time, '/', $parse['host']);
	}
}

