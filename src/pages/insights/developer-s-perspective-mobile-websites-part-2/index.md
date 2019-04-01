---
title: 'A Developer&#039;s Perspective on Mobile Websites, part 2'
templateKey: blog-post
date: 2011-09-16T13:23:29.000Z
category: Development, Drupal, Mobile
alias: developer-s-perspective-mobile-websites-part-2
summary: > 
 Last week, I talked about A Developer's Perspective on Mobile Websites. This week, I'd like to take that a bit further and discuss special considerations for mobile development. 
author: JD Collier
image: /assets/mobile-web-design2_0.png
---

Last week, I talked about [A Developer's Perspective on Mobile Websites](/insights/developer-s-perspective-mobile-websites-part-1). This week, I'd like to take that a bit further and discuss special considerations for mobile development. 

*   Orientation and screen size
*   Extra code to mobilize
*   Ways to detect mobile browsers

Orientation and screen size
---------------------------

When you design a mobile interface, make certain you take into account what happens if a user rotates your site to a horizontal layout. It is just like developing for the desktop where you don't know what size the user's screen will be. Funny thing here, designers don't always remember to show what to do when a device is rotated. Will the navigation stretch, will there be a repeating background, etc.

When it comes to screen size, try to set your objects to percentages when possible, try to avoid pixel sizes.

*   Extra tip: You can actually add a javascript listener for orientation change. You could change a class, swap an image, etc.

Extra code to mobilize
----------------------

*   Hide the URL bar so that you maximize screen real estate and make it feel more app-like.

    addEventListener("load", function(){setTimeout(hideUI, 0);},false);
    	  function hideUI(){
    	  window.scrollTo(0,1);
    	  }

*   Create specialized bookmark icons for iPhone users so that your logo appears on their home screens. ([Documentation here](https://developer.apple.com/library/safari/), see the second question.)
*   Use jQuery (or other) alternatives to Flash elements since many mobile devices do not support Flash.
*   Set the default scale of the screen so that the page starts zoomed and not tiny. Add this inside the HTML HEAD: 

    <meta name="viewport" content="width=device-width" />

*   Don't forget you can use modern CSS … use -webkit-border-radius to round corners!

Ways to show mobile content
---------------------------

There are many ways to determine if your visitor is mobile. You can:

*   Add a mobile device CSS ([@media command](http://www.w3.org/TR/CSS2/media.html#media-types)). I'm not a fan of this technique because I prefer to be able to choose which mobile device to target. This method doesn't give me that type of flexibility.
*   Use the great code from the open source [Detect Mobile Browsers](http://detectmobilebrowsers.com/) project. With the jQuery script, for example, I can easily use a variable to test if the browser is mobile. 

### Related Articles

*   [A Developer's Perspective on Mobile Websites, Part 1](/insights/developer-s-perspective-mobile-websites-part-1)
*   [Slaying The Mobile Website Dragon: Is Your Website Ready for Mobile?](/insights/slaying-mobile-website-dragon-your-website-ready-mobile)
*   [Drupal Mobile: How to create a Drupal mobile site without using Mobile Tools](/insights/drupal-mobile-how-create-drupal-mobile-site-without-using-mobile-tools)