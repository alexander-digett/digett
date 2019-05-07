---
title: 'A Method for Mega Menus in Drupal'
templateKey: blog-post
date: 2011-09-14T15:09:02.000Z
category: 
  -Development, Drupal
alias: method-mega-menus-drupal
summary: > 
 Editor's note: This article is out-of-date. Please check out our post on Drupal Mega Menus Revisited.  Mega Menus have become all the rage in navigation user inteface. When you have a large list of items for a dropdown menu a mega menu makes an efficient way to display the list.  An excellent example of a mega menu is on the White House's website.
author: Art Williams
image: /assets/mega-menu-whitehouse-gov.png
---

Editor's note: This article is out-of-date. Please check out our post on [Drupal Mega Menus Revisited](/blog/01/25/2012/revisited-mega-menus-drupal-7).  Mega Menus have become all the rage in navigation user inteface. When you have a large list of items for a dropdown menu a mega menu makes an efficient way to display the list.  An excellent example of a mega menu is on [the White House's website](http://www.whitehouse.gov). In Drupal the way the menu items are built makes it difficult to create a mega menu. We need a way to create columns and it's not proper to wrap a few <li>'s inside a <div> like this: <ul>    <div>     <li></li>     <li></li>   </div>   <div>     <li></li>     <li></li>   </div> <ul> My solution is to add two classes to every <li> on the menu.  One class will be the column number as in 'col-3', and the other class will be the row number as in 'row-5'. Add this function to your template.php file. Change the word YOURTHEME in the function name to the name of your themef Change the $desired\_columns & $desired\_rows variable values to the number of columns and rows you want on your largest dropdown. Then clear the site cache.

/\* add col-# & row-# class to list items \*/
function YOURTHEME\_menu\_item($link, $has\_children, $menu = '', $in\_active\_trail = FALSE, $extra\_class = NULL) {
static $count = 0;
$desired\_rows = 11;
$desired\_columns = 3;

  $class = ($menu ? 'expanded' : ($has\_children ? 'collapsed' : 'leaf'));
  $count++;
  if (strlen(strstr($class,'expanded'))>0) {
    $count = 0;
  }
  elseif (strlen(strstr($extra\_class,'first'))>0) {
    $count = 1;
  }
   
  if (!empty($extra\_class)) {
    $class .= ' '. $extra\_class;
  }
  if ($in\_active\_trail) {
    $class .= ' active-trail';
  }
  
  if ($count > 0) {
    $column = '1';
    if (($count > $desired\_rows ) && ($count <= ($desired\_rows\*2) ) {
      $column = '2';
    }
    elseif ($count > ($desired\_rows\*2 ) {
      $column = '3';
    }
    
    $row = ( $count % $desired\_columns );
    
    $class .= ' row-'. $row;
    $class .= ' col-'. $column; 
  }
  
  return '<li class="'. $class .'">'. $link . $menu ."</li>\\n";
} 

Now you need to set the css.  My menu has a maximum of 3 rows and 11 items in each row.  The first step in the css is to set the width and height of the containing <ul> and the <li> for each 2nd level menu item.  Then set the position of the <li> as 'absolute'. Next you want to set the left position for each of the column classes and the top position for each of the rows. My css code ended up looking like this, but yours may have more or fewer classes depending on your desired rows and columns:

#primary-menu ul.menu li ul.menu {
  width: 600px;
  height: 330px;
}

#primary-menu ul.menu li ul.menu li {
  width: 200px;
  height: 30px;
  position: absolute;
}

#primary-menu ul.menu li ul.menu li.col-1 {
  left: 0;
}

#primary-menu ul.menu li ul.menu li.col-2 {
  left: 200px;
}

#primary-menu ul.menu li ul.menu li.col-3 {
  left: 400px;
}

#primary-menu ul.menu li ul.menu li.row-1 {
  top: 0;
}

#primary-menu ul.menu li ul.menu li.row-2 {
  top: 30px;
}

#primary-menu ul.menu li ul.menu li.row-3 {
  top: 60px;
}

#primary-menu ul.menu li ul.menu li.row-4 {
  top: 90px;
}

#primary-menu ul.menu li ul.menu li.row-5 {
  top: 120px;
}

#primary-menu ul.menu li ul.menu li.row-6 {
  top: 150px;
}

#primary-menu ul.menu li ul.menu li.row-7 {
  top: 180px;
}

#primary-menu ul.menu li ul.menu li.row-8 {
  top: 210px;
}

#primary-menu ul.menu li ul.menu li.row-9 {
  top: 240px;
}

#primary-menu ul.menu li ul.menu li.row-10 {
  top: 270px;
}

/\* really row 11 but using the remainders 11 becomes 0 \*/
#primary-menu ul.menu li ul.menu li.row-0 {
  top: 300px;
}

This method is quick and easy way to implement for a basic mega menu. It will require you to do some math to figure out the height, width, top, and left measurement for each class; and the downside is that it's not very flexible. You'll need to adjust the function code and the css for your unique situation. Leave your comments below if you decided to try this, or have a better way to do it.  Be sure and wrap your code in the code tags <code>your code </code> or it will be stripped out.