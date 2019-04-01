---
title: 'Discovered the Display Suite Module for Drupal 7'
templateKey: blog-post
date: 2011-10-12T15:41:54.000Z
category: Development, Drupal
alias: discovered-display-suite-module-drupal-7
summary: > 
 Yesterday I ran across a module called Display Suite that blew my mind. This module fills a gap in Drupal that I was only vaguely aware existed, but now that I know it is there I can’t see myself building many sites without this module installed.
author: Art Williams
image: /assets/display-suite.png
---

Yesterday I ran across a module called [Display Suite](https://www.drupal.org/project/ds) that blew my mind. This module fills a gap in Drupal that I was only vaguely aware existed, but now that I know it is there I can’t see myself building many sites without this module installed.

What is Display Suite?
----------------------

> _"Display Suite allows you to take full control over how your content is displayed using a drag and drop interface. Arrange your nodes, views, comments, user data etc. the way you want without having to work your way through dozens of template files."_

The Display Suite module has been around for almost two years now and even has a Drupal 6 version, but has come into its own recently with the first official release for Drupal 7 in April 2011.

The Gap
-------

Ever since I started using Drupal at version 4.7 most of my theming for a Drupal site has been done in a text editor creating override files or writing css to position content in the right place. And while there have been many attempts to create a way to layout within the browser, nothing I’ve used has been without trade-offs. Panels, Contexts, and core Blocks modules all have their supporters and advantages, but they equally all have negatives that keep them from being ideal. Just last week I read an article about one developer who was [returning to the core blocks module](http://getlevelten.com/blog/randall-knutson/how-i-learned-stop-worrying-and-love-block).

For me blocks are powerful places to stick some dynamic content, but as a layout tool, it just falls short. Panels is a little too complicated and involves too much overhead. I use Context from time to time, but for me it’s too hard to manage contexts once you have more than a handful of them. Somewhere there is a disconnect between the interface and what I’m seeing displayed on the screen.

Display Suite First Impressions
-------------------------------

The thing that first jumped out at me is that Display Suite for Drupal 7 really leverages entities and the Field UI. Rather than being a completely new interface like Context, it mostly lives in the entity display modes page.

Secondly, the Display Suite steals the best parts of Panels (turning off theme regions options and passing context to other pieces of content) without all of that overhead and complexity.

The third thing that stuck out to me is that Display Suite eliminates the need to override a template file just to provide columns or sub-regions within the content area while displaying a node or teaser. In fact, I can imagine a world using Display Suite where a template file override is a rare need.

Continuing Education
--------------------

Since I’ve only know of Display Suite’s existence for a day, these are my first impressions. There is a lot more that this module seems to be able to accomplish, and I’m very excited about using it in a future project so I can learn all the ins and outs. I’ll circle back around with a full review after some real world experience.

To learn more, check out the introduction video below from the author of the module. After watching that one, there are [10 more Display Suite tutorial videos](http://tutr.tv/publisher/swentieman).

Related Content
---------------

*   [Crowdsource: Drupal 7 Entities Unleashed](/blog/08/24/2011/crowdsource-drupal-7-entities-unleashed)
*   [Impressions of OpenLayers in Drupal 7](/blog/09/30/2011/impressions-openlayers-drupal-7)
*   [HTML5 Base Starter Themes in Drupal 7](/blog/06/29/2011/html5-base-starter-themes-drupal-7)