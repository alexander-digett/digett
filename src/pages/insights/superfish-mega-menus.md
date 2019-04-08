---
title: 'Superfish Mega Menus'
templateKey: blog-post
date: 2013-02-19T17:42:24.000Z
category: 
  -Development, Drupal
alias: superfish-mega-menus
summary: > 
 Early last year, we discussed a few of the available solutions for building mega menus in Drupal 7. At that time, the method for building a Simple Mega Menu required doing some calculations and applying that logic using CSS. Now we have an even easier method available via the Superfish module.
author: Jonathan Dale
image: /assets/superfish-mega-menus.jpg
---

Early last year, we discussed a few of the available solutions for [building mega menus in Drupal 7](/blog/01/25/2012/revisited-mega-menus-drupal-7). At that time, the method for building a Simple Mega Menu required doing some calculations and applying that logic using CSS. Now we have an even easier method available via the Superfish module.

Multi-column sub-menus
----------------------

[Superfish for Drupal 7](https://www.drupal.org/project/superfish) provides support for simple mega menus using the multi-column sub-menus plugin which is available out of the box. Using it is as simple as structuring your menu and configuring the Superfish menu block with the appropriate options.

I found that multi-column sub-menus tend to work best with menus which have a simple two-layer structure. An example of this structure can be seen [here](/assets/sample-menu-structure.png).

With this structure in place, you can configure the Superfish block settings. Start by going to admin/config/user-interface/superfish and verifying that you have at least one Superfish block enabled.

Then go to admin/structure/block and click Configure on the Superfish block. The critical setting here is to Enable multi-column sub-menus as shown here:

![](/assets/enable-sub-menus.png)

Once this is saved, you should now have a simple mega menu ready to be styled.

![](/assets/final-output.png)

Caveats
-------

While preparing this article, I did note that if a parent menu item does not contain any children this will break the layout. At this time, the best solution is to ensure that your menu does not contain any empty parent menu items. Alternatively, you can specify particular menu items to be excluded, however, it would be nice if the Superfish module offered the ability to exclude those items automatically.

What are your thoughts? Have you found any unique or interesting ways to create simple mega menus? Let us know in the comments.