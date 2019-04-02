---
title: 'IE compatibility craziness, retina graphics, what should I do?'
templateKey: blog-post
date: 2013-02-06T15:08:35.000Z
category: 
  -Design, Development, Drupal
alias: ie-compatibility-craziness-retina-graphics-what-should-i-do
summary: > 
 I'm excited about the future of web design/development.   		Screen-size agnostic approaches like responsive design using media queries.   		High resolution graphics. Apple has branded this high resolution display as a "Retina" display. Other manufacturers are beginning to come close to the same resolution level. No doubt, we'll only see increased resolution going forward.  		CSS3/HTML5 now in the mainstream.  		Hosted fonts (Google Fonts, Typekit, etc) are becoming more common and higher quality.  	Enter the scary part The process of including IE7 and now even IE8 in my workflow feels "post war" and not current, modern or exciting. I remember the beautiful day when I stopped supporting IE6 a few years ago — the world was full of CSS promise.
author: JD Collier
image: /assets/browser-testing-help.jpg
---

I'm excited about the future of web design/development. 

*   Screen-size agnostic approaches like responsive design using media queries. 
*   High resolution graphics. Apple has branded this high resolution display as a "Retina" display. Other manufacturers are beginning to come close to the same resolution level. No doubt, we'll only see increased resolution going forward.
*   CSS3/HTML5 now in the mainstream.
*   Hosted fonts (Google Fonts, Typekit, etc) are becoming more common and higher quality.

Enter the scary part
--------------------

The process of including IE7 and now even IE8 in my workflow feels "post war" and not current, modern or exciting. I remember the beautiful day when I stopped supporting IE6 a few years ago — the world was full of CSS promise.

But over the last few months, I've had several projects in which the compatibility process got out of control.

*   There are compatibility modes in IE 10 (and 9 and 8) that cause even modern Internet Explorer to behave like IE 7.
*   Windows XP and Windows 7 have different rendering engines for IE 8. 

On the desktop side, we currently test on: 

*   Win XP: IE 8, Firefox, Chrome
*   Win 7: IE 8/9, Firefox, Chrome
*   Win 8: IE 10
*   Mac: Firefox, Chrome, Safari.

We also test multiple mobile and tablet screen sizes and orientations.

Now, we introduce Retina graphics. At a minimum, that affects mobile and tablet testing. With Apple now selling Retina laptops, I need to consider when to start developing and testing for this audience as well.

Retina graphics introduce more work. I have to either create a low and high resolution version of every graphic or I have to create a high or medium graphic and use CSS to resize the graphic down to the low resolution version (this would increase load time for the page).

What should I do?
-----------------

I am really at a loss. There are several conflicting arguments in my head. Here are the voices I hear … which should I listen to?

*   Various IE compatibility permutations are outliers. Don't worry about outliers, develop for anything over 90% usage in analytics.
*   I have corporate clients with various compatibility modes and their internal employees will be what I consider outliers. How can I allow it to be broken for them?
*   Sometimes I can ask a client to correct their compatibility mode, but there are always clients where that isn't possible or practical.
*   Wait for Retina graphics until usage is mainstream, or develop in a future-proof manner. It is important to begin incorporating Retina graphics now so my sites aren't outdated in a year.

Please chime in with your perspective. I learn much from the Drupal community.

_\[Image: [Wikipedia](https://en.wikipedia.org/wiki/File:The_Scream.jpg)\]_