---
title: 'Overriding Page Templates per Content Type in Drupal 7 '
templateKey: blog-post
date: 2012-01-11T15:50:00.000Z
category: 
  -Development, Drupal
alias: overriding-page-templates-content-type-drupal-7
summary: > 
 Overriding a template file is relatively common task for a front-end developer, but depending on the base theme used it’s not always clear how to go about doing it.
author: Art Williams
image: /assets/override-button.png
---

Overriding a template file is relatively common task for a front-end developer, but depending on the base theme used it’s not always clear how to go about doing it.

Here at Digett we’ve begun to use AdaptiveTheme as our starting point for two Drupal 7 sites we are currently building, where previously we were using Fusion or Zen on Drupal 6. This caused us some heartache in overriding templates and brought to light the lack of clear documentation on the subject. There are a lot of opinions on Drupal.org but not much clear instruction.

Template Files
--------------

Most Drupal themes will come with a minimum of 3 default template files: _html.tpl.php_, _page.tpl.php_ and _node.tpl.php_. Many other template files may be included that control the display of more specific elements such as comments or individual fields. Each of these files can be overridden for a specific condition simply by creating a new file in the theme folder with the correct name. These file names are called “Template Suggestions” and there is a standard set of these suggestions built into Drupal and listed in the documentation as [Drupal 7 Template Suggestions](https://www.drupal.org/node/1089656).

Page Template Per Content Type
------------------------------

A common override that is not included in the default list is the page.tpl.php override based on the content type being displayed. There is a node.tpl.php override based on the same condition which leads to confusion as to where the page override exists. On top of that, themes like Zen add this type of override to the Template Suggestions, which leads those using Zen to believe that this is part of the default list. Check the theme documentation to see if this override has been added to the Template Suggestions by the theme. If it hasn’t, you need to add it manually.

The process is straightforward. We can create additional Template Suggestions simply by adding them to the ‘theme\_hook\_suggestions array in our template.php file.

1.  Open the template.php file in your theme for editing.
2.  Look for a function called **yourthemename**\_preprocess\_page (replace the yourthemename with your theme’s name).
3.  If this function already exists, you will need to add the if statement to the end of the function just before the closing bracket. Otherwise you’ll need to create a new function to look like this:

    
    function yourthemename_preprocess_page(&$vars) {
      if (isset($vars['node']->type)) {
        $vars['theme_hook_suggestions'][] = 'page__' . $vars['node']->type;
      }
    }
    

Now you can create a template file called page--content-type.tpl.php and all nodes with that type will use the new template file.

Filename Notes:

*   Use two dashes after the word ‘page’ in the filename.
*   If your content type is two or more words, replace the underscore ( \_ ) with a short dash ( - ) in the content type machine name.

_Image: [Woody Thrower](http://www.flickr.com/photos/woodythrower/)_

Related Articles
----------------

*   [Adventurs in the Drupal Community](/blog/12/14/2011/adventures-drupal-community)
*   [5 Fields Modules for Drupal 7](/blog/12/21/2011/5-fields-modules-drupal-7)
*   [Forget Module, Go Responsive?](/blog/12/02/2011/forget-mobile-go-responsive)