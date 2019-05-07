---
title: 'Forget mobile, go responsive?'
templateKey: blog-post
date: 2011-12-02T15:08:23.000Z
category: 
  -Design, Development, Drupal
alias: forget-mobile-go-responsive
summary: > 
 I recently attended DrupalCamp Austin and went to several sessions on mobile. It was a little funny how they contradicted each other. One session would talk about how mobile is the way to go then another session would talk about going responsive. I've been on the fence on which I think is the right approach. I've done lots of mobile sites, but I hadn't jumped into the responsive world yet. So for a recent project, I decided to give it a try.  	First off, what do I mean? By mobile, I'm talking about creating a site with a different HTML/CSS markup but serving the same content. When I do mobile, I generally use a tool to determine if the user is on a mobile device and then I serve the different content designed for the mobile device.
author: JD Collier
image: /assets/responsive_web_design.jpg
---

I recently attended DrupalCamp Austin and went to several sessions on mobile. It was a little funny how they contradicted each other. One session would talk about how mobile is the way to go then another session would talk about going responsive. I've been on the fence on which I think is the right approach. I've done lots of mobile sites, but I hadn't jumped into the responsive world yet. So for a recent project, I decided to give it a try.

First off, what do I mean?
--------------------------

By mobile, I'm talking about creating a site with a different HTML/CSS markup but serving the same content. When I do mobile, I generally use a tool to determine if the user is on a mobile device and then I serve the different content designed for the mobile device. When I talk about responsive, I'm talking about using CSS media queries to ask the browser what it can do and then serve the same content and let CSS techniques change what the user sees. ([More about Responsive Web Design](http://alistapart.com/article/responsive-web-design).) If you've ever been unable to see an entire website because your browser or screen is too small, you know how frustrating it is to have to scroll around. Responsive elminates that issue by dynamically resizing the website—no matter the screen size. Try it with the [DrupalCamp Austin](http://2011.drupalcampaustin.org/) (built by the great people at Four Kitchens) site; no matter how small or large you make your browser, you can always see everything.

Why responsive?
---------------

The number of browsers, devices are increasing every day. Gone are the days of checking IE, Firefox and Safari; now there are cell phones, tablets, and desktops, and the future is wide open to more that we haven't dreamed yet. Responsive is about "future-proofing" the website so it is as ready as possible for whatever the future holds. The thing I love most about responsive is that I'm serving the same content to everyone. 

My questions (and few answers) on the responsive trend
------------------------------------------------------

Thoughts: I love the aspect that much of my testing simply involves making the browser more narrow to see what happens to the design at various screen widths. I love that I'm at least trying to be "future-proof." I appreciate that I'm serving the full content to everyone. I always question the usefullness of a stripped-down mobile site. (Note: I do still see a valid use-case for mobile when the user needs to interact with data and perform a task — a specialized interface is great for this.) Questions: If there isn't one design for the page, how do I get design approval from the client? In the responsive world, there isn't one pixel-perfect design. Instead it is a process of progressive enhancement. This means that I start with the lowest common output and "enhance" my design as the screen and browser capability increases. What do I get the client to approve? How can this be explained to a client? It feels like you are developing 4 or 5 different sites. I know that I can develop a base and just customize the smaller pieces, but I'd love to learn some best practices on this. Is it ok to occasionally use pixel-sizing or does everything need to be ems and %s? I would love to hear other thoughts on this topic. What do you think is good or bad about responsive?

### More

[HTML5 Base Starter Themes in Drupal 7](/blog/06/29/2011/html5-base-starter-themes-drupal-7) (Also outlines some responsive themes.) \[Image Credit: [Axbom](http://www.flickr.com/photos/axbom/)\]