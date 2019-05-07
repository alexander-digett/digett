---
title: 'Drupal Views Module Caveat'
templateKey: blog-post
date: 2008-02-20T06:00:00.000Z
category: 
  -Caveat Emptor, Development, Drupal
alias: drupal-views-module-caveat
summary: > 
 Drupal's powerful Views module is something I use almost everyday. The Views module allows you to present content in many different ways by sorting and filtering content to suit your specific need.
author: Luke
image: /assets/post-placeholder.png
---

Drupal's powerful Views module is something I use almost everyday. The Views module allows you to present content in many different ways by sorting and filtering content to suit your specific need. This time I was building a view for news content on a development site, when I stumbled across an interesting filter. I had already filtered by content type. I wanted news content only. I thought I was done, and was about to click 'Save' when I saw it there. The publish filter. "Hm...that sounds vaguely familiar...." I thought to myself as I added it. The caption said "Filter by whether or not the node is published. This is recommended for most Views!" [![Image removed.](/core/misc/icons/e32700/error.svg "This image has been removed. For security reasons, only images from the local domain are allowed.")](/imce/browse "Add image to imceimage") Suddenly it struck me that I hadn't filtered out unpublished content from this view, and several others as well. I had felt intuitively that Drupal's access control would handle that for me, but the Views module writes its own queries, thus bypassing Drupal's built-in access control. After pondering these things momentarily, I faintly remembered being warned about this in the past by a Drupal Guru I once knew. Somewhere along the way, I had just forgotten about this filter. This can present a somewhat insidious snag to a new Drupal developer, because you may create many views before you ever have unpublished content surface unexpectedly. The moral of the story is this: When you create a view, the first thing you should do is add a "Node:Published=Yes" filter. It is very easy to forget this important filter, so making this a habit is a good idea. [![Image removed.](/core/misc/icons/e32700/error.svg "This image has been removed. For security reasons, only images from the local domain are allowed.")](/imce/browse "Add image to imceimage")