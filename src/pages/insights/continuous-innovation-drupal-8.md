---
title: 'Continuous Innovation with Drupal 8'
templateKey: blog-post
date: 2013-03-20T14:41:04.000Z
category: Drupal
alias: continuous-innovation-drupal-8
summary: > 
 When I began using Drupal five years ago, Drupal 6 had just been released and closely resembled a custom-built solution I was using at the time. At the same time, I had also evaluated Symfony 1.1 and determined that it didn't quite meet my needs. Little did I know that five years later I would be using both.
author: Jonathan Dale
image: /assets/drupal8-symfony.jpg
---

When I began using Drupal five years ago, Drupal 6 had just been released and closely resembled a custom-built solution I was using at the time. At the same time, I had also evaluated Symfony 1.1 and determined that it didn't quite meet my needs. Little did I know that five years later I would be using both.

The first thing I noted from using Drupal was the expectation from within the core development community to continue to improve and learn from each of the releases which came before it.

Drupal 8 continues this trend by merging and improving upon many of the Front-End UI changes with the backend developer changes we have seen in both Drupal 6 and Drupal 7. The addition of Twig, Symfony, WYSIWYG with CKEditor, In-Place Editing, Tour module, Multilingual improvements, Views and many other changes to Drupal 8 have resulted in a framework designed to support enterprise sites and more.

Symfony: The heart of Drupal
----------------------------

Drupal 8 has adopted the Symfony2 Framework to replace it's core structure. This is the biggest change to Drupal and is a fundamental change to development for Drupal. Symfony provides a full-stack framework utilizing the object-oriented architecture of PHP 5.3 and changes how Drupal handles page rendering and caching. Symfony should also enhance the development experience and simplify the process of building complex structures with Drupal.

Twig: Make it Shine
-------------------

Twig has replaced PHPTemplate as the theming engine for Drupal 8. This improves and optimizes the theme layer logic and will make it safer, smaller and faster.

The introduction of Twig also raises the bar for hosting, as it requires a server-side PHP module, and will likely prevent the usage of budget/shared hosts.

As noted in the comments, The server-side PHP module is optional and provides performance enhancements for the Twig runtime engine. As it is not required, shared hosting remains a viable option for Drupal 8.

Mobile: Drupal everywhere
-------------------------

Out of the box, Drupal 8 will be responsive and work with HTML5 and CSS3. The demand from enterprise clients for better mobile support has led to a larger focus on mobile and has resulted in a very active Mobile Initiative to bring those elements into the Core framework.

The focus on mobile will help to position Drupal as a mobile-friendly CMS out of the box including improvements for site administration and performance on mobile devices.

WYSIWYG, CKEditor and In-Place Editing: Make it easy
----------------------------------------------------

One of the weaknesses highlighted by Dries is the authoring experience in Drupal. With Drupal 8, steps are being taken to improve this by including WYSIWYG and CKEditor in core. The Spark project is being built to provide in-place content editing and will greatly enhance the experience for end users.

These improvements will reduce the amount of time required to make site administration user-friendly and provide a better experience to non-technical content maintainers.

Internationalization: Make it accessible
----------------------------------------

The ability to manage multilingual sites in Drupal has improved with each release and Drupal 8 will be no exception. The Multilingual Initiative continues to push for changes and improvements to Drupal 8 with the end goal being the translation of everything. The OOP framework provided by the integration of Symfony2 will allow for more translations and better structure around those translations.

Configuration: YAML and revisions
---------------------------------

Configuration settings for Drupal 8 has been moved to YAML files with the CMI. This means that you can now include your configuration settings in your git repository and maintain revision data for those settings.

This also introduces the possibilty for better deployment processes built around source code repositories while maintaining the flexiblity of user-configurable settings.

Final Thoughts
--------------

While Drupal 8 has reached feature freeze, it remains in an active and fluid state until code freeze. This means that the API will continue to change and evolve over the next few months with the goal being to provide improvements and better integration of all of the Drupal 8 initiatives.

With the adoption of Symfony and Twig, there will be a significant amount of code that needs to be rewritten to work with the new standards. If you are a module or theme developer, I would highly recommend becoming familiar with these changes now.

**What are you thougths on Drupal 8? Are you prepared for the changes introduced by Symfony and Twig? Let us know in the comments.**