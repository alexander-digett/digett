---
title: '3 Easy Wins that Make Life with Drupal Easier'
templateKey: blog-post
date: 2013-04-02T16:14:54.000Z
category: 
  -Development, Drupal
alias: 3-easy-wins-make-life-drupal-easier
summary: > 
 Easy cheesy! Here are three quick wins you can add to your Drupal site to make your life easier today.
author: JD Collier
image: /assets/make-life-with-drupal-easier.png
---

Easy cheesy! Here are three quick wins you can add to your Drupal site to make your life easier today.

1.  Force PDFs to always open in a new window.
2.  Crop images as you upload them.
3.  Use Linkit to easily add links on your site.

**PDFs always in a new window**
-------------------------------

You can use the [External Links module](https://www.drupal.org/project/extlink) to force all PDFs to open in a new window. While debate rages on whether you should force external links to open in a new window, opening PDF links in a new window makes life easier on your visitors. External Links makes it automatic.

Install and turn on the module, then add this simple code in the "Pattern Matching" section of the module's configuration screen:

.\*\\.pdf 

![](/assets/crop_0.png)

Now, any time you link to a PDF, the link will always open a new window or tab in the browser.

**Crop images as you upload**
-----------------------------

Use the [Imagefield crop module](https://www.drupal.org/project/imagefield_crop) to allow you to crop images as you upload them. There are several cropping modules, I like this one due to the simplicity of setup and use.

Install and enable the module, then access the content type with an image field that needs cropping ability. Change the widget type for the image field from "Image" to "Image with cropping." Edit the field and set the desired width/height attributes and you're done.

![](/assets/imagefield_crop.jpeg)

This module is just for fields and does not help you with image uploads inside the WYSIWYG. I use this mostly for header images or post images. It just makes it a little easier when entering content to skip Photoshop on occasion.

**Make hyperlinks simple with Linkit**
--------------------------------------

Use the [Linkit module](https://www.drupal.org/project/linkit) to search for content on your site and add the hyperlink. This is one of my favorite modules in Drupal. Without this module, I always had to browse to my destination page, copy the URL, use only the relative path and paste into the hyperlink dialog. 

With this module, I can click the Linkit button in the CKEditor toolbar, type the node title of the desired destination and it searches my site for the content. Click the content and it inserts the link to that node.

![](/assets/linkit_4_0.png)

In this example, I typed "customer" and it searched my site and displayed a list of all node titles with that word. Perfect!

**What would you add?**
-----------------------

I had to pull my list down to three items. I had a MUCH longer list of tips. I'd love to hear yours as well! What else should be added to this list?

### **Related posts**

*   [3 Small Modules That Make Good Drupal Websites Great](/insights/3-small-modules-make-good-drupal-websites-great)
*   [Digett's Favorite Drupal 7 Contrib Modules](/insights/digett-s-favorite-drupal-7-contrib-modules)

_\[Image credit: [xiaming](http://www.flickr.com/photos/xiaming/50391986/sizes/m/in/photostream/)\]_