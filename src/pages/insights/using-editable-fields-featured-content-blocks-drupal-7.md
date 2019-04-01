---
title: 'Using Editable Fields for Featured Content Blocks in Drupal 7'
templateKey: blog-post
date: 2012-03-28T16:42:16.000Z
category: Development, Drupal
alias: using-editable-fields-featured-content-blocks-drupal-7
summary: > 
 It is a common requirement on a marketing website to have a "Featured Content" block on the homepage that displays some random node from a subset of content that has been flagged as featured. There are a number of modules that try to address this type of functionality, but I’m always a fan of using fewer modules — or at least using modules that can be used in many places.
author: Art Williams
image: /assets/editablefields-table.png
---

It is a common requirement on a marketing website to have a “Featured Content” block on the homepage that displays some random node from a subset of content that has been flagged as _featured_. There are a number of modules that try to address this type of functionality, but I’m always a fan of using fewer modules — or at least using modules that can be used in many places.

Real World Example
------------------

I recently built this kind of functionality on a real estate website. The client wanted a block that displayed a single random property, but not from all of the properties, just the ones that he flagged as featured. I accomplished this easily by adding a checkbox field to the property content type that says “Feature this property on the homepage.”

Building the Featured Content Block
-----------------------------------

The view that displays the featured content block is simple.  
Filter criteria:

*   node is published,
*   content type = property, and
*   featured = Feature this property on the homepage

Sort criteria:

*   global: random

Then add the fields you want to display and you are done.

Managing the Featured Content Block
-----------------------------------

There is one aspect where I feel that building the Featured Content Block this way breaks down. When the client is managing which properties are featured or not they need to go into each property to check or uncheck the featured field.

The first step to solving this hiccup is to create a second view that displays a table of all the properties on the site and their featured/not featured status. This gives you a bird’s eye view of the featured content but still doesn’t make it easy to change the featured content.

The next step is to install the [editablefields modules](https://www.drupal.org/project/editablefields) and make the featured field on the view “editable.” This module makes the featured field show up as a checkbox when the view is displayed. Now the client can check and uncheck all of the properties where they want to change the featured status and save the page.

![](/sites/default/files/editablefields-table_0.png)

As with most tasks in Drupal there are many ways to accomplish the same goal. This solution to the featured content problem works well for me because it uses many of the same techniques used elsewhere in the site with the exception of the editablefields module. However, this module can have alternate uses on the site and it is lightweight.

Related Content
---------------

*   [Revisited: Mega Menus in Drupal 7](/insights/revisited-mega-menus-drupal-7)
*   [How To Add Presentational Javascript to Your Drupal 7 Site](/insights/how-add-presentational-javascript-your-drupal-7-site)
*   [Change the Output of a Single Field on a Drupal 7 Node](/insights/change-output-single-field-drupal-7-node)