---
title: ' Revisited: Mega Menus in Drupal 7'
templateKey: blog-post
date: 2012-01-25T15:53:41.000Z
category: 
  -Development, Drupal
alias: revisited-mega-menus-drupal-7
summary: > 
 Back in September, I wrote a blog post about making Mega Menus in Drupal. After publishing the post I found numerous issues with the proposed method and ended up using another method on the project that precipitated the article. After recently receiving a few comments on the original post I realized that it was time for a followup.
author: Art Williams
image: /assets/composite-mega-menu.png
---

Back in September, I wrote a blog post about making [Mega Menus in Drupal](/blog/09/14/2011/method-mega-menus-drupal). After publishing the post I found numerous issues with the proposed method and ended up using another method on the project that precipitated the article. After recently receiving a few comments on the original post I realized that it was time for a followup.

Types of Mega Menus
-------------------

In my opinion there are two different types of Mega Menus—Simple and Composite—and each type should be constructed in a different way in Drupal. You are creating a Simple Mega Menu when you have a long list of menu items that you want to place in multiple columns ordered top to bottom then left column to right column. For example, the City of Houston has some long menus that could be easily turned into multi-row mega menus. ![](/assets/long-menu_0.png)![](/assets/long-menu-fixed_0.png) A Composite Mega Menu is different because instead of being one long list of like menu items, it is made up of many different elements. For instance, a Composite Mega Menu may have secondary and tertiary menu items listed together along with an image or other content in the same dropdown. A great example of this type of menu is Whitehouse.gov:  ![](/assets/mega-menu-whitehouse-gov_0.png) 

Simple Mega Menu
----------------

Implementing a Simple Mega Menu can be done exclusively with CSS as long as the menu list is a fixed number of items and won’t change. If the number of items changes, you would need to update the CSS manually (An override function could be written to make this dynamic, but the CSS way is so easy. Besides, how often do menus really change once they’ve been setup?). Assuming your dropdown menu is written as an unordered list, then the HTML for your menu would look something like this:

<ul class="”dropdown-box”"> /\* wraps the secondary menu items. \*/
	      <li>Menu Item 1</li>
	      <li>Menu Item 2</li>
	      <li>Menu Item 3</li>
	            etc...
</ul>

To make the list into a multi-column mega menu, we first need to do some calculations. In this example we will have 24 total items we want to divide into three columns. Use this worksheet to help you calculate the needed values. Total number of menu items:   24    Total number of columns:    3    Divide #1 by #2 for the number of items in each column:    8    (Round up to the nearest whole number.) Desired Width per column:    155px    Desired Height per item:    18px    Multiply #2 by #4 for the total width of the dropdown box:    465px    Multiply #3 by #5 for the total height of the dropdown box:    144px    Now that we have all of the necessary values we can build the css using nth-child psuedo classes. (For more info read: [How nth-child Works](https://css-tricks.com/how-nth-child-works/) and [Useful nth-child Recipes](https://css-tricks.com/useful-nth-child-recipies/)) CSS Code:

ul.dropdown-box {
  width: 465px;  /\* value #6 \*/
  height: 144px;  /\* value #7 \*/
}
ul.dropdown-box li {
  width: 155px;  /\* value #4 \*/
  float: none;
  clear: none;
  line-height: 18px;  /\* value #5 \*/
  position: relative;
  margin-left: 0px;
}
ul.dropdown-box li:nth-child(n+8) {   /\* value #3 \*/
  margin-left: 155px;  /\*value #4
}
ul.dropdown-box li:nth-child(n+15) {  /\* (value #3 X 2) - 1 \*/  /\* If there were more columns repeat this declaration and increment the multiplier each time. \*/
  margin-left: 310px;  /\*(value #4 X 2)   /\* If there were more columns repeat this declaration and increment the multiplier each time. \*/
}
ul.dropdown-box li:nth-child(7n+8) {    /\*(value #3 - 1)  /\* value #3 \*/
  margin-top: -144px;  /\* Negative value #4 \*/
}

Composite Mega Menu
-------------------

Believe it or not, Composite Mega Menus are much easier to explain, because there is a module. The Menu Views module allows you to attach a view inside a menu item; since Views can be lists of item, node teasers, and so much more, the options are endless. It would be overkill to use this module for the Simple Mega Menus, but for anything else it’s brilliant. You could even reproduce the Whitehouse.gov menu by placing a node teaser in the header or footer of a HTML list view. LevelTen, the creators of this module, wrote an article [introducing the Menu Views module](http://getlevelten.com/blog/mark-carver/drupal-mega-menus-made-simple) that you might want look at if you are considering this approach.

Mega Conclusion
---------------

If you find any of this helpful, please let us know in the comments. Dissenting opinions are also welcome.