---
title: 'Getting Meta Tags on Views in Drupal 7'
templateKey: blog-post
date: 2012-05-09T14:16:27.000Z
category: 
  -Development, Drupal
alias: getting-meta-tags-views-drupal-7
summary: > 
 Meta elements are an important part of any SEO and even Social Media strategy for a website. Drupal has a number of excellent modules for adding meta tags to nodes, but Views integration is lacking. To add meta tags to a view in Drupal 7 there are two meta tag modules and many hurdles to implementation.
author: Art Williams
image: /assets/metatags.png
---

Meta elements are an important part of any SEO and even Social Media strategy for a website. Drupal has a number of excellent modules for adding meta tags to nodes, but Views integration is lacking. To add meta tags to a view in Drupal 7 there are two meta tag modules and many hurdles to implementation.

Meta Tags Quick Module
----------------------

The [Meta tags quick](https://www.drupal.org/project/metatags_quick) module has the ability to assign meta values based on a path. So once you have your view set up you can navigate to the Meta tags quick module settings (admin/config/search/metatags\_quick/path\_based) and create a path-based meta tag for that view page.

At first glance this may seem like the simplest solution. But when we’ve used this module on a site it adds tabs to the views that say “Path-Based Metatags.” This is confusing for clients and many times breaks the clean look of the page (especially on a homepage) when there are no other tabs on the view.

The second issue we’ve found with Meta tags quick is that it is built on the Fields API. We saw this as a benefit initially, but in practice it is cumbersome. It requires setting up metatags on each and every content type when most of the time we want consistent meta attributes across all the content of the site. Plus if you ever try to remove Meta tags quick it takes some time since the fields it creates are left on the content types and have to be removed manually before the module can be uninstalled.

Lastly, in our opinion, the Meta tags quick module requires two additional modules to complete its meta features. The first is [Page Title](https://www.drupal.org/project/page_title) which adds the <title> tag to a page’s HTML. The second is the [Open Graph meta tags](https://www.drupal.org/project/opengraph_meta) module which adds opengraph style tags in the <head> of a page.

_Aside: Open Graph tags, while not as well known, are critically important in the world of social media sharing. If you have a Facebook Share button on your blog post without Open Graph tags, you are leaving to chance the items that get sent to Facebook when that Share button is pressed. With Open Graph tags you can send the correct image, title, and description to Facebook._

Metatag Module
--------------

[Metatag](https://www.drupal.org/project/metatag) module is the successor to Nodewords in Drupal 6, and is designed to be the ultimate metatags module for Drupal 7. In its current state it already includes Page Title and Open Graph tags. The only necessary feature absent from this module is Views integration. Despite this missing piece we prefer Metatag over Meta tags quick because of its complete feature set and lack of dependence on the Fields API.

Make Every Page a Node
----------------------

The workaround to the missing Views Integration in the Metatag module is to make every page on your site a node, then add any view as a block under the node.

For example, we commonly need a view to display a list of teasers for articles on a page. If you make the view a block and place it in the main content region under a node called “Articles,” you can add your meta tags to the node and not be concerned at all with the view’s meta tags.

A fringe benefit of this approach from the site builder standpoint is that breadcrumbs, menus, and pathauto all become easier to set up and work more consistently when every page is a node.

For the client, this approach makes more sense because the top textual area of all pages (including views) is now easily and consistently editable.

The caveat—and it can be big—is when a view has an exposed filter or a contextual filter that uses URL parameters to pass the values. It’s possible that this type of view won’t function correctly as a block without AJAX-ifying it, which prevents deep linking into the filters. This issue is so specific that we rarely run into it, but since it is a showstopper it needs to be mentioned. In those cases we just resort to using the Meta tags quick, Page Title, and Open Graph meta tags modules on the site.

Also worth mentioning is that there are two sandbox modules that claim to accomplish the goal of Views integration with Metatag. I haven’t had the opportunity try either and would hesitate to use them on a production site, but the fact that they exist makes me optimistic that the issue can be solved in short order.

If you have a solution of your own that works, or have an opinion about making every page a node, please chime in. We’d like to hear your thoughts and experience.