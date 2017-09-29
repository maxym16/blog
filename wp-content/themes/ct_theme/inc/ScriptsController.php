<?php

namespace ct;

class ScriptsController
{
    /**
     * ScriptController constructor.
     */
    public function __construct()
    {
        add_action( 'wp_enqueue_scripts', [$this, 'initUserScripts']);
        add_action( 'wp_enqueue_scripts', [$this, 'initUserStyles']);
        add_action( 'wp_footer', [$this, 'initFooterStyles']);
        add_action( 'admin_enqueue_scripts', [$this, 'initAdminScripts'] );
        add_action( 'admin_enqueue_scripts', [$this, 'initAdminStyles'] );

        $this->disableEmoji();
    }

    public function initAdminScripts(){

    }
    public function initAdminStyles(){
        
    }

    /**
     * Set user scripts method
     */
    public function initUserScripts(){
        wp_enqueue_script('jquery');

        wp_enqueue_script( 'common_js_ct', CT_ASSETS_URI.'/js/common.js', array('jquery'), null, true );
        wp_enqueue_script( 'home_page_js_ct', CT_ASSETS_URI.'/js/home-page.js', array('jquery'), null, true );
        wp_enqueue_script( 'user_js_ct', CT_ASSETS_URI.'/js/user.js', array('jquery'), null, true );
    }

    /**
     *  Set user styles method
     */
    public function initUserStyles(){
        wp_enqueue_style( 'header_css_ct', CT_ASSETS_URI.'/css/header.min.css' );

    }
    /**
     *  Set user footer styles method
     */
    public function initFooterStyles(){
        wp_enqueue_style( 'content_css_ct', CT_ASSETS_URI.'/css/content.min.css' );
        wp_enqueue_style( 'slick.min_css_ct', CT_ASSETS_URI.'/css/slick.min.css' );
        wp_enqueue_style( 'fancybox.min_css_ct', CT_ASSETS_URI.'/css/fancybox.min.css' );

    }

    /**
     * Disabled Emoji method
     */
    public function disableEmoji(){
        remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
        remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
        remove_action( 'wp_print_styles', 'print_emoji_styles' );
        remove_action( 'admin_print_styles', 'print_emoji_styles' );
        remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
        remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
        remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
        add_filter( 'tiny_mce_plugins', [$this, 'disableWpEmojisInTinymce'] );
    }

    public function disableWpEmojisInTinymce( $plugins ) {
        if ( is_array( $plugins ) ) {
            return array_diff( $plugins, array( 'wpemoji' ) );
        } else {
            return array();
        }
    }
}