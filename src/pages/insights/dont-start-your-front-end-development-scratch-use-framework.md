---
title: 'Don&#039;t start your front-end development from scratch, use a framework'
templateKey: blog-post
date: 2012-10-24T14:26:26.000Z
category: 
  -Development, Drupal
alias: dont-start-your-front-end-development-scratch-use-framework
summary: > 
 The next time you are ready to slice up a Photoshop design and begin implementing a custom design, don't reach for your favorite Drupal theme—try using a framework like Zurb Foundation. There is already a Drupal project underway, let's lend a hand!
author: JD Collier
image: /assets/zurb-foundation.png
---

The next time you are ready to slice up a Photoshop design and begin implementing a custom design, don't reach for your favorite Drupal theme—try using a framework like Zurb Foundation. There is already a [Drupal project underway](https://www.drupal.org/project/zurb_foundation), let's lend a hand!

Why spend your budget reinventing? We need modern requirements: responsive site designs, clean type styles, HTML5, CSS3 and the list goes on and on. No one makes everything from scratch, we use various libraries to accomplish these requirements.

When it is time to begin the build (for a custom design), there are a couple of approaches to build a modern website.

*   **Scratch**: write your own HTML and CSS from the ground, up.
*   **Theme**: create a sub theme and build your website on an established theme.
*   **Framework**: blend the best of both worlds and build your site with a good foundation.

**Scratch**
-----------

I love building from scratch, creating perfect HTML, clean CSS and everything named exactly how I want. In today's world, this approach is outdated.

**Pros**:

*   Very clean code.
*   Easy to read and manage your code.
*   Easy to maintain your code later.
*   No "code bloat" since there will only be code needed for the project.

**Cons:**

*   You have to do extensive browser testing.
*   You are often solving problems that have been solved before. (float bugs, double-margin bugs, orientation resize bugs, etc)
*   Don't take outliers into account (Did you remember Chromeframe for old browsers, did you remember ARIA roles for accessibility, etc)
*   Can be more challenging to integrate with a CMS since you have to know all the integration code.

**Theme**
---------

Using a pre-built theme can be great because you can usually know if it is well tested, it has nice configurations to customize to your project and it comes packed with all the best code for your chosen CMS.

**Pros**:

*   Browser tested.
*   Vetted by a community of users.
*   Often they have CMS options to set various extras like turning on [IE shiv](https://github.com/aFarkas/html5shiv), set which browsers will get Chromeframe as an alternative and how you want the design to behave on various devices.

**Cons:**

*   Often overly complex code to accommodate all the attributes and variables you can set inside the CMS.
*   Often have way too much code since the theme isn't designed for your project, it is designed for everyone's project.
*   Can be difficult to find and style the appropriate CSS to match the design. Especially difficult if the design calls for full-width background but the theme doesn't take that into account.
*   If the theme upgrades, it can break your code.

**Framework**
-------------

My preferred method is somewhere in the middle. I prefer to use a framework like Yahoo's YUI Grid, 960.gs or my new favorite Zurb Foundation. 

**Pros**:

*   HTML5, CSS3 baked in.
*   Ready for the latest technology like SASS, Responsive design, and [off-canvas layouts](http://jasonweaver.name/lab/offcanvas/).
*   Lots of styling built-in (top navigation functionality, typography, table styles).

**Cons:**

*   CMS implementations of your favorite framework often require a deeper understanding of your chosen CMS because these frameworks often do not have all the settings inside the CMS to alter the framework. You often have to edit the code in the framework.
*   Some frameworks lend themselves to certain designs and not to others. For example, Zurb Foundation might be a little more challenging to use in a deeply textured, highly styled design because Foundation starts out very clean and open.

My choice? I have used lots of themes for Drupal and Wordpress. With the Drupal themes I've used, I always feel like I'm molding a theme to my design rather than building my website to my needs. The analogy I imagine is buying a fixer-upper when I really need a custom-built home. 

Recently, I have started using [Zurb Foundation](http://foundation.zurb.com/). I must say, I'm in love with this framework. As they say, it is "Developed with SASS, Feature Complete and Freakishly Advanced." I would say in real-world use, this is true. My last project went very quickly because so much was already done for me. I also didn't feel like there was a lot of code in my way. Foundation has a Wordpress and a Drupal implementation.

I must also disclose that I have used Adaptive Theme and Omega for Drupal. They are great themes, but sometimes, I just want something that feels a bit more nimble. My feeling is that Adaptive and Omega are good themes, but not as flexible and extensible as Zurb Foundation.

### What about you? 

Do you use a good framework for your projects? If so, please share your experience as I'm always looking to continue this discussion.

_Image Credit: [Yeti by Zurb, Inc.](http://foundation.zurb.com/learn/about.html)_