---
title: 'A First Look at Drupal Commerce: More Than a Module'
templateKey: blog-post
date: 2012-04-25T15:45:46.000Z
category: 
  -Development, Drupal, Tools of the Trade
alias: first-look-drupal-commerce-more-module
summary: > 
 Last week we were evaluating solutions for a client and I had the opportunity to install and test Drupal Commerce (DC) for the first time. Digett and I both have a long history of Ubercart use, but since we made the move to Drupal 7 in the middle of last year none of our new website builds have needed a full shopping cart system.
author: Art Williams
image: /assets/drupal-commerce-logo.png
---

Last week we were evaluating solutions for a client and I had the opportunity to install and test Drupal Commerce (DC) for the first time. Digett and I both have a long history of Ubercart use, but since we made the move to Drupal 7 in the middle of last year none of our new website builds have needed a full shopping cart system.

This client is currently using a LMS combined with a CMS (Joomla) to sell and manage access to online and offline learning products. The list of products is small, but each product includes an extensive list of individual pieces of content (video, audio, surveys, and text). If we could reduce the complexity of these systems by using Drupal for everything, it would be a huge win for the client.

Getting Started
---------------

There are two paths you can take to get Drupal Commerce up and running.  

1.  The first option is to install [Drupal](https://www.drupal.org/project/drupal) and [Drupal Commerce](https://www.drupal.org/project/commerce), along with all its dependencies ([Ctools](https://www.drupal.org/project/ctools), [Views](https://www.drupal.org/project/views), [Entity API](https://www.drupal.org/project/entity), [Rules](https://www.drupal.org/project/rules), and [Address field](https://www.drupal.org/project/addressfield)) from scratch and configure everything to work as you prefer.  
2.  The second option is to use the [Commerce Kickstart](https://www.drupal.org/project/commerce_kickstart) distribution.

At Digett we have a Drupal 7 base installation with [all of our favorite modules](../../blog/01/04/2012/digetts-favorite-drupal-7-contrib-modules) already pre-configured the way we like them; for me it would have taken much longer to reproduce all of that work on Kickstart than to just install Drupal Commerce from scratch.

If you are starting without an existing site or don’t have your own distribution/base install of Drupal, I recommend sticking with Kickstart. Kickstart also gives you a chance to test Drupal Commerce with very little investment before going back and building it from scratch.

Drupal Commerce (D7) vs. Ubercart (D6)
--------------------------------------

Drupal Commerce is very tightly integrated into Drupal 7 core, Views, and Rules — so much so that it’s sometimes not clear where to go to customize certain parts of it (the answer is usually Views or Rules). This tight integration means that much of Drupal 7’s entity model is leveraged in Drupal Commerce, thereby reducing the duplicate work for the DC developers. It also means that once you overcome that feeling of wondering how to get into the store administration area and accept the fact that it’s just all Drupal administration, then DC begins to make so much sense.

![](/sites/default/files/ubercart_logo_0.png)In contrast, Ubercart in D6 was really a stand alone program that used Drupal's nodes and exposed itself to Views. This made the administration of your store feel separate from administering Drupal.

I think that the less experience you have with Drupal the more this will feel like the better way. And clients seem to understand that separateness very well. It will remain to be seen how our clients respond to Drupal Commerce. But worst case scenario we will have to create administrative views and dashboards to help the client with DC.

Lastly, Drupal Commerce has a different approach to Products and their variations. Instead of adding variations to a product node as in Ubercart, each variation is created as a standalone product. But those products are not directly addressable.  Instead you create a “product display” content type where you can select a list of products to be displayed.

Think of it like inventory in the stockroom (product) and a point of sale display (product display). This approach can accommodate nearly any ecommerce situation since most of the advanced logic is created in Rules without coding new modules.

My Impressions
--------------

I’m initially very positive on the way Drupal Commerce is built and functions. I think the decision to base it so deeply on Drupal’s entity structure is best in the long run. I’ve seen complaints about needing to creating a new product for each product variation, but I see how this approach provides much more flexibility.  And there are already some projects focusing on making simple product variations easier to build.

Drupal Commerce was blazing fast to configure. In less than five hours (including the time spent watching some of the [tutorial videos from Commerce Guys](https://vimeo.com/channels/commerceguys)) I had a fully functioning test site with Drupal Commerce configured to allow access to a particular node of video content when a particular product was purchased just as the client needed.![](/sites/default/files/drupal-rules-module-logo_1.png)

DC’s use of Rules for most of the logic, while providing an overwhelming capability for customization, could be a barrier for certain groups of Drupal users who are not used to Rules. If you’ve not used Rules much, it’s worth the effort to develop some experience there. It will help you in all of your Drupal development.

The one major downside of Drupal Commerce is lack of documentation, but Ubercart isn’t any better in that area. The video tutorials from the Commerce Guys make up for it in some areas, but for something like an ecommerce solution, documentation with screenshots will be critical to making DC accessible for the non-developer, site builder.

In all, I would wholeheartedly recommend Drupal Commerce for a new ecommerce site. I know Ubercart also has a D7 version now and it is based on Entity API, Views, and Rules too. DC and Ubercart even have similar numbers of site installs on their D7 releases, but it seems to me that the bulk of the Drupal community is focused on Drupal Commerce.

The flexibility and speed of development are refreshing in ecommerce software. With another 12 months of development, community support, and documentation DC could be a force to be reckoned with in ecommerce as an industry, not just on Drupal.