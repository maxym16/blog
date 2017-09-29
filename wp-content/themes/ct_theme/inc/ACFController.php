<?php

namespace ct;


class ACFController
{

    /**
     * ACFController constructor.
     */
    public function __construct()
    {
        add_action('acf/init', [$this, 'addOptionalPage']);
    }

    /**
     * Метод создаёт страницу опций
     */
    public function addOptionalPage(){
        if ( function_exists( 'acf_add_options_page' ) ) {
            acf_add_options_page( array(
                'page_title' => 'Theme settings',
                'menu_title' => 'Theme settings',
                'menu_slug'  => 'theme-general-settings',
                'capability' => 'edit_posts',
                'redirect'   => false,
                'icon_url'  => 'dashicons-hammer'
            ) );
        }
    }
}