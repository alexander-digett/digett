---
title: 'asset.module updates'
templateKey: blog-post
date: 2007-06-08T05:00:00.000Z
category: 
  -Development, Drupal
alias: assetmodule-updates
summary: > 
 So many changes have been made in the last week. The most obvious are the inclusion of a new youtube integration module and much improved views support. The youtube integration actually is a by-product of the most significant improvement, the cleaned-up and enhanced API.
author: Digett
image: /assets/type.jpg
---

So many changes have been made in the last week. The most obvious are the inclusion of a new youtube integration module and much improved views support. The youtube integration actually is a by-product of the most significant improvement, the cleaned-up and enhanced API.

There are now 3 hooks that may be implemented by modules in any combination. The first is hook\_asset\_type which allows a module to define new routines for creating assets. The asset\_youtube module is using this to define 2 new routines, one for pasting in the embed code from youtube, another which imports youtube videos and favorites from a user's youtube account.

The second hook is hook\_asset\_formatter. This is where a module can define formatters for different asset types, regardless of how that asset is created. Some examples: The asset\_youtube module presents video and thumbnail formatters for youtube videos. The asset\_bonus module provides mp3 formatting using the 1pixelout audio player and swf (flash movies) formatting using swfobject.

The third hook is hook\_assetapi. This takes after nodeapi and allows a module to interact with the asset load, insert, update and delete processes. The main use for this so far is to allow a module to override the url of the asset. By default, a url is build using file\_create\_url. But if your asset lives somewhere else (like the youtube assets) you can override the url property in the load operation to point to that location.

Views integration has been expanded. The most important addition is the Asset field type. When using this field you have 3 handler options, No Link, Link to Asset, and Link to Node. You also have a formatting option for output. There are 2 classifications of formatting options, those that will work on any asset type (i.e. links) and type-specific formatters. For a type-specific formatter, you should be sure to include the appropriate view filters to only include assets that can use that formatter. Otherwise, any incompatible assets returned by the view will be formatted as a link. As part of the non-specific formatters are default full-text and default teaser options. These are set on a per-type basis in the asset configuration settings.

I am also working on a full documentation and demo site. Hopefully I can get that up in the next day or so!