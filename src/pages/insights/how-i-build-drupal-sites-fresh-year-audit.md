---
title: 'How I Build Drupal Sites: A Fresh-Year Audit'
templateKey: blog-post
date: 2013-01-09T16:58:50.000Z
category: 
  -Development, Drupal
alias: how-i-build-drupal-sites-fresh-year-audit
summary: > 
 "How do you build a website?" I have been asked this question by friends and family over the years, but I never know how to answer the question — mainly because there are too many variables, too many paths to the same goal. The funny thing is that I can quickly spot bad development on a site, and can come up with constructive criticism on the code or the design within seconds of seeing it.
author: JD Collier
image: /assets/build-drupal-sites.jpg
---

"How do you build a website?" I have been asked this question by friends and family over the years, but I never know how to answer the question — mainly because there are too many variables, too many paths to the same goal. The funny thing is that I can quickly spot bad development on a site, and can come up with constructive criticism on the code or the design within seconds of seeing it.

What I value in website development
-----------------------------------

*   Clean, elegant code and design
*   Clear, focused communication

What I'm thinking when I build a Drupal site
--------------------------------------------

With these values in mind, how do I go about building a new Drupal site? Here, in no particular order, are the things in my mind when building a Drupal site:

*   Use blocks for static pieces of micro content on the site (address, social media icon UL list, copyright statement, etc).
*   When I need to put content in a block that is somewhat static and needs to be editable by the client, I use [Node block](https://www.drupal.org/project/nodeblock). I then create a custom content type and set permissions for the client to edit but not add new nodes. This way the client can edit the content, get the benefits of revisions and it is a full node that I can control. This is great for promotions outside the main rotator.
*   For blocks on the home page or in sidebars that have the latest blog posts, news or events, I create a view that outputs as a block.
*   have you tried [Block Class](https://www.drupal.org/project/block_class)? I don't ever want to see "block-block-9" or anything like that in CSS; Block Class enables me to add a class attribute to any block in Drupal. 
*   I use the built-in block visibility functionality. I find it much better than using Contexts. The Context module is great, but it adds a layer of complexity that most clients don't understand.
*   I prefer using a node reference rather than use Taxonomy. I know that is controversial — [we've written about it before](/insights/rip-taxonomy-module-drupal-7). I do use Taxonomy all the time, but every time I use it I ask myself if the more robust functionality of a node ref would be easier in the long run. I've been burned by Taxonomy a number of times in situations where a node ref would have just been a simpler thing to manage.
*   For social sharing on posts, you really can't beat ShareThis. It is easy, light and they take care of keeping up with Facebook and other service API changes.
*   I prefer custom content types with only the fields I need rather than use a module like Blogs. It is great for multi-user blogs, but when I have a simple site with one or a few authors, a custom type is much faster to implement.
*   I use Webform all the time, but I do call on Formstack.com as well. Third party services that specialize in their niche can offer awesome functionality cheaper than I can build for the price.

What I haven't mentioned yet
----------------------------

One tried and true old favorite is Views Slideshow. I've used it many times but I don't think I'll use it again. We are developing everything now in responsive layouts, and Views Slideshow just doesn't do responsive as well as newer sliders. My current favorite is [RoyalSlider](http://dimsemenov.com/plugins/royal-slider/templates/). It isn't a Drupal module, but it is very robust. It is responsive and also touch friendly: you can set it to allow swipe gestures on tablets and phones.

You may notice I did not mention Panels. I know there are avid followers in the community who love the module. I guess it falls down to elegance and simplicity for me. Panels makes life a little easier for me in the short-term, but it is more challenging for clients. The other reason that I can't justify well is that it feels "heavy" for something that should be nimble and lightweight.

What about you? Agree/disagree?
-------------------------------

What about you all? Can you tell me where you agree/disagree with my process? I would love to hear from other developers to help me enhance my process for this coming year.

_Image credit: [Howardpa58](http://www.flickr.com/photos/phowardphoto/7410158728/sizes/n/in/photostream/)_