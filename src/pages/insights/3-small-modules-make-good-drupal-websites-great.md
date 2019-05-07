---
title: '3 Small Modules That Make Good Drupal Websites Great'
templateKey: blog-post
date: 2012-05-02T16:57:53.000Z
category: 
  -Development, Drupal, UX Design
alias: 3-small-modules-make-good-drupal-websites-great
summary: > 
 Identifying the difference between a good website and a great website has everything to do with the care put into the details. Elements the site visitor never consciously notices combine in such a way as to affect them on a deeper level to convey stability, credibility and competency.
author: Art Williams
image: /assets/eames-lounge-chair.jpg
---

Identifying the difference between a good website and a great website has everything to do with the care put into the details. Elements the site visitor never consciously notices combine in such a way as to affect them on a deeper level to convey stability, credibility and competency. There are three small modules that I find make a big difference in the way a visitor/client interacts with a site. By “small” I don’t mean code size, but more about feature set. They each do one thing very well and have become an essential part of our builds.

Custom Breadcrumbs
------------------

The [custom breadcrumbs](https://www.drupal.org/project/custom_breadcrumbs) module provides the flexibility to build breadcrumbs that have a specific hierarchy based on node type or any other node parameter (through php). This aligns your breadcrumbs with the node paths that you’ve established with pathauto. The breadcrumbs that are baked into Drupal core do an adequate job, but we find that this is one of those details that is more important than it seems at first glance. The more consistently all of your menus, breadcrumbs, paths, and page titles align, the clearer it will be to a user how everything fits together.

Custom Contextual Links
-----------------------

Contextual Links is one of my favorite additions to Drupal 7. Those little gears that expand with links that are contextually aware provide a quick way for your site managers to know if and how they can interact with a section of the site. But wouldn’t it be great if you could add your own items into those menus? [Custom Contextual Links (CCL)](https://www.drupal.org/project/ccl) module does just that. To create a link you specify the Title (the text of the link that is displayed), the URL (path of the link) and then the context in which the link should appear. It’s this last part where the magic happens; I can choose to place my custom link on a specific node, all nodes of a content type, a block, a view display, or a group of view displays. I have yet to find a context that isn’t covered by this module. As an example of this modules use, I commonly create a custom contextual link on the homepage rotator that links to a view so that the site manager can rearrange and edit the rotator items. The contextual area is the logical place for the site manager to look for this link. The icing on the cake with this module is that it supports some basic actions such as: Publish/unpublish content Make content sticky/unsticky Promote/remove content from the front page

Search Configuration
--------------------

Every site we build has some content type that shouldn’t be searchable. For example, the homepage rotators. They are just promo items and don’t need to be searchable, but Drupal 7 doesn’t offer any search customization beyond nodes and users and content ranking settings. Once you turn on the [Search Configuration](https://www.drupal.org/project/search_config) module it does two things: The permissions page (admin/people/permissions) now has options to toggle permissions to search each content type per role. A new fieldset called “Additional Node Search Configuration” appears on the search settings page (admin/config/search/settings). The first item allows me to solve my problem of visitors being able to search rotator content. I can now allow administrators to search for rotator content, but only allow visitors to search the blog content types. The second item the module adds gives us a new settings that control how the advanced search form renders and can override field labels on the search forms.

Details Modules
---------------

As the brilliant architect and furniture designer [Charles Eames](https://en.wikipedia.org/wiki/Charles_and_Ray_Eames) said, “The details are not the details. They make the design.” These three modules are details modules that many sites would leave out in favor of bigger features. But we agree with Eames. Fine tuning the client/visitor interaction with your site is never a waste of time. Image: [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)