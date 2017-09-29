<?php
/**
 * Template Name: Home page template
 */
get_header();?>
<?php while ( have_posts() ) : the_post(); ?>
<?php
/** Slider block */
show_template('content/home_page/slider');
?>
<?php
/** Choice block */
show_template('content/home_page/choice');
?>
<?php
/** Articles block */
show_template('content/home_page/articles');
?>
<?php
/** Tariff block */
show_template('content/home_page/tariff');
?>
<?php
/** Subscriptions block */
show_template('content/home_page/subscription');
?>
<?php endwhile; ?>
<?php get_footer();?>