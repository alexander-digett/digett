---
title: 'A module I&#039;ve been wanting for a long time — insert a block in WYSIWYG'
templateKey: blog-post
date: 2014-07-01T13:35:43.000Z
category: 
  -Development, Drupal
alias: module-i-ve-been-wanting-long-time-—-insert-block-wysiwyg
summary: > 
 Sometimes what you are looking for is right in front of you. I have been searching for a module to allow me to insert a block into a WYSIWYG field. I tried looking for a Drupal implementation like Wordpress Shortcodes, perhaps the SimpleAd module would do what I'm wanting, maybe there is a Ckeditor plugin written for this? I came up short.
author: JD Collier
image: /assets/insert-block-wysiwyg-drupal.png
---

Sometimes what you are looking for is right in front of you. I have been searching for a module to allow me to insert a block into a WYSIWYG field. I tried looking for a Drupal implementation like Wordpress Shortcodes, perhaps the SimpleAd module would do what I'm wanting, maybe there is a Ckeditor plugin written for this? I came up short.

Suddenly, the obvious choice
----------------------------

I need to be able to insert small bits of content into WYSIWYG that can be edited once but placed all over the site. In this case, I needed a call to action that only appeared on certain pages and I wanted the CTA to be inline and not outside the content.

It suddenly hit me to start searching for "insert a block into WYSIWYG" and I felt stupid. The second result is a module called "[Insert Block](https://www.drupal.org/project/insert_block)." I quickly spun off a testing environment of my site and installed the module. It works beautifully. 

How it works
------------

After you install the module, there is an administration screen where you can adjust permissions (the default worked just fine for me). Before you start using the module, you just need to access the Text Format and turn on the "Insert Blocks" filter.

The code is **\[block:module=delta\]**

Look Greek? It actually isn’t. Lots of modules can produce blocks; in this case I am making a simple text block using the block function itself. This means the module is named "block." The _delta_ is just fancy Drupal-speak for which one to display.

You can find the block delta by hovering over the configure link for the desired block and the delta will be listed in the URL path. For a block created in the blocks screen, it is a number. If the block is created by Views or another module, it could be a string.

Insert \[block:block=10\] into the WYSIWYG editor and _voilà_! The block is inserted and if you change the block content, it will change everywhere it is used.

Give it a try! What do you think? Also, I've love to hear if you found another solution.

_\[Photo credit: [Jeff Harris](https://www.flickr.com/photos/jefharris/4047722702/in/photostream/)\]_