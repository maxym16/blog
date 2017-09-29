<?php

namespace ct;

class CleanMenu extends \Walker_Nav_Menu
{
    function display_element($element, &$children_elements, $max_depth, $depth = 0, $args, &$output) { // вывод элемента
        $element->classes = [];
        parent::display_element($element, $children_elements, $max_depth, $depth, $args, $output); // вызываем стандартный метод родителя
    }
}