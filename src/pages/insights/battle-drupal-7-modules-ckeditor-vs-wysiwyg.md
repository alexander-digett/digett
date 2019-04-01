---
title: 'Battle of the Drupal 7 Modules: CKEditor vs WYSIWYG'
templateKey: blog-post
date: 2012-02-01T15:03:32.000Z
category: Drupal, Tools of the Trade
alias: battle-drupal-7-modules-ckeditor-vs-wysiwyg
summary: > 
 CKEditor is the WYSIWYG (What You See Is What You Get) editor of choice around the Digett office. While some may bemoan the use of a WYSIWYG editor at all, even an experienced developer can usually save a lot of time during content entry by using one. Drupal does not come with a built-in editor but there are many excellent options; CKEditor is the cream of the crop.
author: Art Williams
image: /assets/ckeditor-for-drupal-logo-w179.png
---

[CKEditor](http://ckeditor.com/) is the WYSIWYG (What You See Is What You Get) editor of choice around the Digett office. While some may bemoan the use of a WYSIWYG editor at all, even an experienced developer can usually save a lot of time during content entry by using one. Drupal does not come with a built-in editor but there are many excellent options; CKEditor is the cream of the crop.

The CKEditor 3rd-party Software
-------------------------------

There are always two parts to an HTML editor, the 3rd-party software and the Drupal module that integrates it with Drupal. As with any 3rd-party software, that component must be downloaded separately from its own site (not Drupal.org) and integrated with your Drupal site using a Drupal module downloaded from Drupal.org.

Some advantages of CKEditor over many of the other HTML editors available include:

*   Time-tested - CKEditor started out as FCKeditor in 2003.
*   Actively developed - There is a new incremental release at least every few months.
*   Popular - CKEditor/FCKeditor is by far the most used WYSIWYG editor on Drupal sites.
*   Extensible - There are many plugins specifically for Drupal that can be easily added. (e.g. IMCE, Media, Drupal Teaser Break, etc.)

Drupal Modules
--------------

Once you’ve reached the decision that CKEditor is your WYSIWYG of choice, you have two options for integrating it into your Drupal site.

1.  There is a module called [Wysiwyg](https://www.drupal.org/project/wysiwyg), which was built as a universal integration for all of the various HTML editors available for Drupal.
2.  The other module is called [CKEditor - WYSIWYG HTML editor](https://www.drupal.org/project/ckeditor), and was designed to integrate only the CKEditor software into Drupal.

### Wysiwyg Module

Since its creation, the Wysiwyg module has gained tremendous support as one of the most installed modules in all of Drupal. The feat that it accomplishes of allowing a site to use any WYSIWYG editor is impressive; it will even allow you to run multiple editors on the same site based on the input/text format chosen for a particular textarea. If you find yourself in need of this kind of feature, the WYSIWYG editor is the integration module for you.

### CKEditor module

The CKEditor module (in the form of FCKeditor module) has been around since November 2006. Since it is specifically designed for the CKEditor HTML editor, the settings available are much more complete; nearly any setting that could be manipulated in the CKEditor config files is available in the user interface of this module. We find that it’s easier to setup and make adjustments with this module over the Wysiwg module. Some nice features are:

*   There is a drag and drop interface for the buttons that are displayed on the toolbar.
*   Each user can configure their own settings (if given permission).
*   The Styles select box can be added in each theme.
*   The editor is skinable.
*   Custom configuration settings can be added through the GUI.

> _**Drupal 6 note from the project page**: “In version 6.x users were forced to define the set of include/exclude rules based on the ID of textarea or the path to the page. In Drupal 7 things are \[simplified\]. All you have to do is to pick up the input formats where CKEditor should be enabled.”_

Since the CKEditor module has so many settings, I highly recommend following the installation instructions in the README file that come with the module. There are some settings that need to be changed in the ‘Filtered HTML’ text format in order to make CKEditor function correctly and eliminate the need to give users permission to use the ‘Full HTML’ format.

Results
-------

We have chosen to use the CKEditor module with all of our Drupal 7 installations. Until the WYSIWYG module catches up on the feature set the CKEditor module will keep going strong, and it will continue to be my recommendation. If you have experience with or opinions about either of these modules, let us know in the comments.