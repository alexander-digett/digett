---
title: 'Six simple tips to improve Drupal for your content managers'
templateKey: blog-post
date: 2013-09-11T14:12:18.000Z
category: Development, Drupal
alias: six-simple-tips-improve-drupal-your-content-managers
summary: > 
 During a website project there are distinct phases that allow us to plan for the various audiences of a website. In this process, I have often seen an audience omitted: content managers. We need to ensure we are also weighing the needs and expectations of the content manager when we build a site. Remember content managers are an audience too.
author: JD Collier
image: /assets/improve-drupal-content-managers.png
---

During a website project there are distinct phases that allow us to plan for the various audiences of a website. In this process, I have often seen an audience omitted: content managers. We need to ensure we are also weighing the needs and expectations of the content manager when we build a site. **Remember content managers are an audience too.**

I have compiled a few tips to improve the experience of the content manager on your Drupal site.

**Use Nodeblock**
-----------------

Small pieces of content on your site will likely be in blocks — homepage promotions, small bits of copy placed in the footer, etc. Instead of just using a plain block, consider using [Nodeblock](https://www.drupal.org/project/nodeblock) to allow this micro-content to get versioning, fields and other benefits of being a full node.

Often, to simplify further, I will set permissions so the content manager cannot create new content, only change these special blocks.

**Make everything dynamic**
---------------------------

I have learned the hard way to not assume any text on a web page will be static. Don't put any text in code.

Use blocks, use nodes, use an array pulled from somewhere in Drupal…just don't put the content in code where a content manager can't edit it. Keep all content on a site editable by Drupal.

**Go crazy with contextual links**
----------------------------------

Along with Node Blocks and making everything dynamic, go ahead and go crazy with contextual links by using the [Custom Contextual Links module](https://www.drupal.org/project/ccl). Place them on blocks, place them on logos, place them on footer regions — knock yourself out.

Did you know you can also make [every row in a views list have an edit link](http://www.metaltoad.com/blog/drupal-7-tutorial-creating-edit-content-links-views)? You can add the contextual link field to your view output and every row will get quick access to edit that node.

**Simplify content entry with fields**
--------------------------------------

If you have a content type with a consistent display, like a blog post, use fields instead of depending on complex content in the WYSIWYG.

For example, if the blog post should always have a featured image, don't depend on the content manager placing that in the WYSIWYG — create a field with image cache to allow an easier image upload field that automatically sizes the image appropriately.

You will also be able to better control the HTML output of the image to ensure the front end of the site isn't broken by incorrect code in WYSIWYG.

**Image Cache everything you can**
----------------------------------

While I'm on the topic of images, don't require your users to know Photoshop for a simple graphic, or force them to resize images.

Every time possible, use Image Cache and its advanced functions to do things like scale the image to the correct size, force the image to black and white, overlay a watermark, crop or save to an optimized version.

Image Cache is unbelievably powerful. It should be very rare to not use it.

**Make the content management screen more usable**
--------------------------------------------------

Use [Administration Views](https://www.drupal.org/project/admin_views) to make a more usable content management experience.

Doesn't it make you crazy when you are trying to find content to edit and you have to page and page through the content screen to find it? With this module, the Content Admin screen gets the power of Views. You get filters, changeable default content lists, and searchable content. This is one of my must-have modules for any Drupal site.

**Turn this**  
![](/sites/default/files/before.png)

**Into this**  
![](/sites/default/files/after_0.png)

**Bonus tips**
--------------

*   Load a lite version of your site CSS into the WYSIWYG so the content manager can get a better idea of formatting before publishing content.
*   Use the [Link Checker module](https://www.drupal.org/project/linkchecker) to keep an eye on site links to ensure all links work.
*   Use Field Groups to make content entry more logical. Keep large WYSIWYG fields toward the bottom of node entry forms. I've seen lots of sites with tiny text fields under the Body field and it is swallowed up by the giant WYSIWYG field. With Field Groups, you can make tabs to group fields like file uploads, or semantically similar fields together.

### **What have I missed?**

There are many more details in building a Drupal site that make it more usable on the back-end. What do you do?

### Further Drupal module reading:

*   [3 great Drupal 7 Modules you may have missed](/insights/3-great-drupal-7-modules-you-may-have-missed)
*   [Digett's Favorite Drupal 7 Contrib Modules](/insights/digett-s-favorite-drupal-7-contrib-modules)

_Image Credit: [Flood G](http://www.flickr.com/photos/_flood_/6732863457/in/photolist-bfXFJH-bBjQ95-c7u2R1-eUQVLk-bDd3kE-bS7Pp4-82VjkD-86LSVZ-8sovML-9LrPN9-c785eb-9BDpGj-9x6DgU-eCWwMH-eAPuWP-eASy7E-eAPrhM-ej33hH-bkfCRm-8yBYr9-9zicBf-cdcLm9-ejeUW7-8UU2Te-8xfXDL-9FzHT9-ehZSqM-ccLuso-9SvkBq-dokdUA-8ZXpLt-c6JgUL-ftH8Qi-fN6zkT-bT5H6a-bEvRMC-fNo9Nh-fN6zup-8qM77w-a4ZqB9-dBDviX-7T6Q1p-9otqZR-9jxLyF-83a2jx-bG9pde-7YjBoT-dEkBCt-dEkB4T-dEkKCZ-dEr2ZA/)_