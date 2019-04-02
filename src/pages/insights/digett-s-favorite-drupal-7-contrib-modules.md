---
title: 'Digett&#039;s Favorite Drupal 7 Contrib Modules'
templateKey: blog-post
date: 2012-01-04T16:10:05.000Z
category: 
  -Development, Drupal
alias: digett-s-favorite-drupal-7-contrib-modules
summary: > 
 We've been using Drupal 7 for all new sites for the past few months now, so we’ve put together a base site that we mirror to begin development on each new site. These are the contrib modules that we use on our base site.  The modules in the Foundational and Everysite lists are always enabled by default.
author: Art Williams
image: /assets/drupal_vase.jpg
---

We've been using Drupal 7 for all new sites for the past few months now, so we’ve put together a base site that we mirror to begin development on each new site. These are the contrib modules that we use on our base site.  The modules in the **Foundational** and **Everysite** lists are always enabled by default.

Foundational Modules
--------------------

The modules in this list are ones that we consider _foundational_. That means that they are either helper modules that are dependencies for other modules or we consider them indispensable for any good Drupal site to run well. I’m not going to explain these because they are so well know and/or self- explanatory. If you have questions feel free to leave them in the comments and I will do my best to answer.

*   [CKEditor - WYSIWYG HTML editor](https://www.drupal.org/project/ckeditor) - We only use the CKEditor WYSIWYG and find this module is much more feature rich than the WYSIWYG module.
*   [Chaos tool suite (ctools)](https://www.drupal.org/project/ctools)
*   [Date](https://www.drupal.org/project/date)
*   [Entity API](https://www.drupal.org/project/entity)
*   [Global Redirect](https://www.drupal.org/project/globalredirect)
*   [jQuery Update](https://www.drupal.org/project/jquery_update)
*   [Libraries API](https://www.drupal.org/project/libraries)
*   [Pathauto](https://www.drupal.org/project/pathauto)
*   [Token](https://www.drupal.org/project/token)
*   [Views](https://www.drupal.org/project/views)

Everysite Modules
-----------------

These are the modules that we install on every site but are not foundational to the way Drupal should work. Our preferences will show through here more as there are other similar modules that you may substitute for some of these.

*   [Administration menu](https://www.drupal.org/project/admin_menu) - Although not perfect we prefer this to Drupal's default toolbar simply for the dropdowns and the ease of flushing caches. Try it if you haven't.
*   [Custom Contextual Links](https://www.drupal.org/project/ccl) - We use this module to add client interface into the contextual links on nodes and blocks. Then clients don't need to be overwhelmed with the admin menu toolbar.
*   [Chrome Frame](https://www.drupal.org/project/chrome_frame) - After we ended out support of IE6 compatibility this module became necessary to encourage IE users to upgrade to IE9 or install Chrome Frame.
*   [Google Analytics](https://www.drupal.org/project/google_analytics) - The role options make it worth using this module over simply adding GA code to the template.
*   [Media](https://www.drupal.org/project/media) - Media has replaced IMCE and all other image modules for us in Drupal 7.
*   [Menu block](https://www.drupal.org/project/menu_block) - Critical for secondary and tertiary menus in the sidebar.
*   [Meta tags quick](https://www.drupal.org/project/metatags_quick) - Since the Meta tags module is still in alpha we started using this one and "it just works." We may go back to Meta tags once it's stable but that remains to be seen.
*   [Mollom](https://www.drupal.org/project/mollom) - Just use it. It's the best and free for small clients.
*   [Nice Menus](https://www.drupal.org/project/nice_menus) - Provides more flexibility in dropdown menus than the default Drupal menus. I don't necessarily like the default CSS file, but we made our own that makes more sense for our designs.
*   [Page Title](https://www.drupal.org/project/page_title) - Necessary SEO module.
*   [Redirect](https://www.drupal.org/project/redirect) - Might not want to enable this until the site is production ready or you will end up with a bunch of unnecessary 301 redirects, but it's critical for a production site.
*   [Search 404](https://www.drupal.org/project/search404) - Brilliant module that performs a search based on the URL that returned the 404. The search engines still get the 404 returned so there is no SEO impact, but the user gets an intelligent response instead of a generic "page cannot be found."
*   [Webform](https://www.drupal.org/project/webform) - We use this for our contact forms and to integrate lead capture forms with third parties.
*   [Weight](https://www.drupal.org/project/weight) - An amazing module that integrates with views and provides easy sorting for clients on content like homepage rotators, etc.
*   [XML sitemap](https://www.drupal.org/project/xmlsitemap) - Self-explanatory SEO module.

Optional but Likely Modules
---------------------------

*   [Display suite](https://www.drupal.org/project/ds) - Useful for any custom content displays. It can almost replace the need for template overrides.
*   [Field collection](https://www.drupal.org/project/field_collection) - Check out our [previous post on Field modules](/blog/12/21/2011/5-fields-modules-drupal-7).
*   [Field group](https://www.drupal.org/project/field_group) - Check out our [previous post on Field modules](/blog/12/21/2011/5-fields-modules-drupal-7).
*   [Link](https://www.drupal.org/project/link) - This is useful for a content type that contains a link elsewhere.
*   [Search configuration](https://www.drupal.org/project/search_config) - We often create content types that we use for design, such at a "homepage rotator" content type. We don't want the site search to include that type of content in the search, and this module gives us the ability to exclude certain content types (among other things).
*   [String Overrides](https://www.drupal.org/project/stringoverrides) - Powerful module that uses the translation function to replace a string in Drupal with the string of your choice.
*   [Views Slideshow](https://www.drupal.org/project/views_slideshow) - It's rare that we design a site that doesn't have some kind of rotating promo or slider content. This powerful views module based on the jQuery cycle plug-in can reproduce nearly any slideshow/slider effect you can imagine.
*   [Workbench](https://www.drupal.org/project/workbench) - We use this to help site content managers keep track of the content they've created and manage moderation. There is occasionally a need for some of the access and moderation add-on modules also.

Development Modules
-------------------

Check out these modules. They sure can make development and deployment much easier and more consistent.

*   [Devel](https://www.drupal.org/project/devel)
*   [Production check & Production monitor](https://www.drupal.org/project/prod_check)
*   [Security Review](https://www.drupal.org/project/security_review)

Preferred Themes
----------------

We generally build Drupal 7 sites using one of these two themes as a starting point. The decision between the two come down to the question, "Does this site need to be mobile friendly or is it purely a desktop site?"

*   [AdaptiveTheme](https://www.drupal.org/project/adaptivetheme)
*   [Zen](https://www.drupal.org/project/zen)

If you have modules that you can't live without, please share in the comments.  Or if you also love one of the modules above cast your vote in the comments and let others know why.

_Image: "Drupal Vase" painted and photographed by [Valarie Geckler](/who-we-are/key-players)_