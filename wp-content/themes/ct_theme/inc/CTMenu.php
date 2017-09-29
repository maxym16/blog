<?php

namespace ct;
/**
 * Разработал Максим Руденко
 * email: rudenko.programmer@gmail.com
 * Дата: 15.08.2017
 */
class CTMenu extends \Walker_Nav_Menu
{

    public $item_class;
    /**
     * CTMenu constructor.
     */
    public function __construct($item_class)
    {
        $this->item_class = $item_class;
    }

    function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) {
        $output .= "<a href='".get_permalink($item->ID)."' class='{$this->item_class}'>{$item->title}</a>";
    }
}