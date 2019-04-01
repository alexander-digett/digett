---
title: 'Which Base Theme We Use (and Why)'
templateKey: blog-post
date: 2014-12-16T14:34:45.000Z
category: Development, Drupal
alias: which-base-theme-we-use-and-why
summary: > 
 There are so many website themes, frameworks and opinions out there ... how do you decide which is the best foundation for your next project?
author: JD Collier
image: /assets/getbootstrap.png
---

There are so many website themes, frameworks and opinions out there ... how do you decide which is the best foundation for your next project?

You can purchase a ready to use theme, start from a base theme with as much or as little foundation as you like or you can build your own HTML from scratch and then add Wordpress or Drupal API code to your HTML.

I have personally used all of these approaches across various projects, but I have a strong preference these days for Bootstrap as the foundation for every website I build on Drupal, Wordpress and small static pages.

Why I don't use the other approaches any longer
-----------------------------------------------

Of course, there are more reasons than I can list here, but a few notes on why I don't start projects without Bootstrap:

*   **Ready to use purchased theme**: There are many thousands of Wordpress ready to go themes and fewer (but still many) Drupal ready-to-go themes. My biggest reason to avoid these has to do with the design being mostly locked in already. These themes are usually complete designs just waiting for a logo, copy and images. I find I have to argue with the theme too much to bend it away from the built-in design. Some of these themes are so complex they actually change the CMS core functions, but I need consistency across projects in the CMS so my content editors can work across client sites.
*   **Build your own HTML:** For years, my preferred approach was to build my own perfectly clean HTML/CSS. This has the benefit of being clean and exactly suited to the needed design. In recent years, though, I have fallen out of love with this approach due to the need to reinvent the wheel with every project. Now that every website needs to be responsive and work across browsers and devices and websites requirements include sophisticated CSS3 effects, jQuery magic and HTML5 sophistication—it just doesn't make sense to start over with each project.
*   **Wonderful frameworks** like 960 grid and others don't include all the [LESS](http://getbootstrap.com/css/#less)/[SASS](http://getbootstrap.com/css/#sass) mix-ins that I have at my fingertips with Bootstrap.

Why I use Bootstrap
-------------------

Before I begin, I should include a quick disclaimer—I have used and also love Zurb [Foundation](http://foundation.zurb.com/). Bootstrap and Foundation have pretty good feature parity these days. We chose Bootstrap when Foundation didn't have as much Drupal support, but Foundation has [pretty robust Drupal support](https://www.drupal.org/project/zurb_foundation) now so in the end you can choose by features meaningful to you.

*   Boostrap includes all the documentation and code to work across browsers and devices.
*   Bootstrap includes tons of mix-ins that allow sophisticated content even inside the WYSIWYG. I also use it in template code and event in Drupal views and Drupal Display Suite.
*   Bootstrap has mobile functionality built in. Whether I'm mobile-first or desktop-first, I am pleasantly surprised when I'm styling a page and then check other breakpoints and almost every time, it is already 95% there ... I just need to add a few adjustments here and there.
*   Many common advanced widgets are [already included](http://getbootstrap.com/javascript/): buttons, carousels, accordion lists, tabs, and more are already included and just require you to add some classes to your html output.
*   _Lots_ of documentation already exists. If I run into an issue, I can check the [Bootstrap website](http://getbootstrap.com/), Stack Overflow and Drupal theme support issue queues.

Drupal-specific modules used to help create a Drupal Bootstrap site
-------------------------------------------------------------------

*   [Drupal Bootstrap theme](https://www.drupal.org/project/bootstrap)
*   [Display Suite Bootstrap Layouts](https://www.drupal.org/project/ds_bootstrap_layouts) (I'm a ds person, but I know there are Panels helpers too)
*   [Views Bootstrap](https://www.drupal.org/project/views_bootstrap): This module adds displays to Views to allow you to output Bootstrap grids, accordions, carousels and more.

What do you think?
------------------

If you've tried one of these methods and have other opinions, please chime in. I seem to check out themes and frameworks like a hobby. I often find myself downloading and playing with a new framework or theme and constantly evaluating it against what I do now. Have you found something better?