---
title: 'Varnish, Memcache — Cache All the Things BUT Still Run Dynamic Code'
templateKey: blog-post
date: 2014-06-03T13:23:14.000Z
category: 
  -Drupal
alias: varnish-memcache-—-cache-all-things-still-run-dynamic-code
summary: > 
 There are quite a few caching options out there, and we frequently combine several services to cache every little piece of a site. Think about it: standard Drupal cache, Varnish, Memcache, Redis, various files coming from CDNs, and more.
author: JD Collier
image: /assets/x-all-the-things.jpg
---

There are quite a few caching options out there, and we frequently combine several services to cache every little piece of a site. Think about it: standard Drupal cache, Varnish, Memcache, Redis, various files coming from CDNs, and more.

### What if you want something unique?

These are great tools to create peppy websites, but what happens when you want to change a menu based on a cookie value or create a view with a random sort? There are lots of valid use cases for small pieces of unique content.

You will run into issues where the content is cached and once the page is rendered and cached, it will continue being served up with the same render for every subsequent person — the random sort, the randomly loaded image, the unique output based on a cookie value will not work.

Here are two quick options:
---------------------------

### **Move the dynamic content from PHP to JS**

If you move the execution of the dynamic content from PHP (which gets compiled and cached) to jQuery, the unique code gets rendered by the browser and not the server. This allows you to display custom code on the page without it being cached.

### **Use the Ajax Blocks Drupal module**

Another way to do when I need or want to code this in PHP and I don't want it in jQuery visible for the world to see is to use the Drupal Ajax Blocks module.

I had a scenario where I had a cookie written by a web application on a subdomain and a different server and the servers Varnish cache was very strict with what I could do with cookies. I needed to pull in encrypted data from the cookie and use the openssl\_decrypt PHP function to decrypt and display unique data for users of the app, but anonymous to Drupal. Varnish would cache the page and there was no way to edit this vendors Varnish config to allow my content to run.

Ajax Blocks saved the day. I had my code run in a block .tpl file and set the block to run from Ajax Blocks; the page rendered and then my code was pulled in via Ajax and wasn't cached.

You can also use Varnish ESI (Edge Side Includes), but that didn't work for me in this server environment.

Cache all the things! Use all the aggregation and caching tools at your disposal — you can still serve small bits of uniqueness on the page.

_\[[All the things image and meme originated from Allie Brosh](http://hyperboleandahalf.blogspot.com/)\]_