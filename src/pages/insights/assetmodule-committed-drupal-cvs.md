---
title: 'Asset.module committed to Drupal cvs'
templateKey: blog-post
date: 2007-05-07T05:00:00.000Z
category: 
alias: assetmodule-committed-drupal-cvs
summary: > 
 I have finally gotten around to committing my asset module.  In short it is my attempt to create a more cohesive user experience for handling file assets in Drupal.
author: Digett
image: /assets/post-placeholder.png
---

I have finally gotten around to committing my asset module. In short it is my attempt to create a more cohesive user experience for handling file assets in [Drupal](http://www.drupal.org). There are currently so many different ways to do this but not one of them meets enough of our needs to be the 'go-to' module for this purpose the way that [CCK](http://drupal.org/project/cck) and [views](http://drupal.org/project/views) are for their respective purpose.

So I figured out where previous modules got it right and where they got it wrong. Wrong is actually the wrong word here. They are the wrong module for the job I am trying to achieve. [img\_assist](http://www.drupal.org/project/img_assist) does a great job of inserting images, but what if you want to insert other file types. And it requires that every image be an image node. [IMCE](http://www.drupal.org/project/imce) is a nice all around file browser, but what if I want to embed a flash file. Upload.module is nice and simple but should a file have to exist only as it relates to a node?

So I took concepts from all of these to create a module that would suit my (and hopefully your) purpose. There is a nice wizard-like file browser for inserting assets. Assets may or may not be associated with nodes. But this is only the beginning.

At the core of this module is its extensibility. What does this mean for you? Formatting options are only limited to your imagination. Already supplied are standard links, a couple of image options, flash embedding using [swfobject.js](http://blog.deconcept.com/swfobject) and mp3 embedding using the [1pixelout audioplayer](http://www.1pixelout.net/code/audio-player-wordpress-plugin). The api to create new formatting options is very simple, so get started!

In development is a cck asset field and views integration. The cck field will allow your users to have the same experience for inserting assets whether inserting into a special purpose field or into the body of the content. Views integration is achieved by tracking the relationships of assets to nodes (even within the body).

There are many more details (mainly development related) that I will go over in a later post.

For now, [check it out](http://www.drupal.org/project/asset), use it and start filling the [issue queue](http://www.drupal.org/project/issues/asset).