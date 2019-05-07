---
title: 'RIP Taxonomy Module in Drupal 7'
templateKey: blog-post
date: 2012-04-04T18:57:37.000Z
category: 
  -Development, Drupal
alias: rip-taxonomy-module-drupal-7
summary: > 
 I have come to the conclusion that the Taxonomy Module is not necessary in Drupal 7 for the vast majority of situations. While there is a lot of built-in functionality and a pre-built view for Taxonomy, the module makes too many assumptions about the way content categorization should function. And overriding the pre-built view for taxonomy terms is never as straightforward as I would like. The last few Drupal 7 sites we have built I have not used Taxonomy at all.
author: Art Williams
image: /assets/graveyard.jpg
---

I have come to the conclusion that the Taxonomy Module is not necessary in Drupal 7 for the vast majority of situations. While there is a lot of built-in functionality and a pre-built view for Taxonomy, the module makes too many assumptions about the way content categorization should function. And overriding the pre-built view for taxonomy terms is never as straightforward as I would like. The last few Drupal 7 sites we have built I have not used Taxonomy at all.

Fixed List Categorization
-------------------------

The most common scenario when taxonomy is used is for a fixed list of terms to select from when a node is created. There are two ways I would go about this without using taxonomies.

1.  If the list of terms are unlikely to change or the end-user/client doesn’t need to add terms, a simple select list field works great (for example, categorizing by state). The caveat is that the individual terms don’t need their own nodes.
2.  If the terms need to be changed regularly by the end-user/client or the terms need their own node pages, it’s better to make a new content type for the vocabulary and use a node reference field ([References module](https://www.drupal.org/project/references)) to categorize the content. For example, a real estate site has a list of counties and they want each County to have a page on the site with a view listing all of the for sale property in that county. Making a content type called County and adding a node reference field to the property content type accomplishes this goal.

**_Added 4/5/12 8:30 am: As @Bill Fitzgerald pointed out the References module claims that it will be deprecated in favor of [Entity Reference](https://www.drupal.org/project/entityreference) at some point, although with 39,000+ sites using References I'm still very comfortable using it on new sites. Take a look at both before you decide._**

Free-Tagging Categorization
---------------------------

Reproducing free-tagging categorization is simple. It’s the same idea as option #2 above, but use the [Node Reference Create module](https://www.drupal.org/project/noderefcreate) (depends on References module) on your node reference field (autocomplete) so that when a user enters a tag in the node reference field that doesn’t already exist it will be automatically created in the tagging content type.

**_Added 4/5/12 8:30 am: Due to the References module's claim that it will be deprecated in favor of Entity Reference at some point, the [Entityconnect](https://www.drupal.org/project/entityconnect) module will accomplish something similar to Node Reference Create, if you are using Entity Reference instead._**

Hierarchy
---------

Reproducing the Taxonomy module hierarchy functionality is by far the most difficult part of abandoning the Taxonomy module, but it is not impossible. A node reference field called “Parent” linking to nodes of the same type is the start of the solution. Then depending on your specific needs, that field can be used in views to create a hierarchy of terms.

This part can be complex, but in most cases, at least for me, it is worth it to be able to get away from the Taxonomy module.

Views
-----

Fully customized views is the reason to go the sans-Taxonomy route. The Taxonomy module forces you to have a view for each vocabulary and term, but sometimes you just don’t want or need that. Trying to override those views is a real pain, especially for a new Drupaler. I find it’s much easier to build my own views.

If you intend to attach a view block to the term pages, you need to learn to use the “contextual filters” on the view. Add a contextual filter of the node reference field you set up earlier. Use the option to “Provide default value” and set it to the type “Content ID from URL”. Your view will only display nodes that were tagged with the term for the page you are on.

Of course you can do much more advanced views, but this one will reproduce the basic functionality of the Taxonomy module.

The Prosecution Rests
---------------------

An argument I’ve heard in support of the Taxonomy module that carries weight is that it’s already there out of the box. This may be a good enough reason for a new Drupal site builder to use the Taxonomy module, but a site builder with a little bit of views experience can do anything that the Taxonomy module does and better, without too much effort.

If you decide to abandon using the Taxonomy module and find yourself repeating this work on multiple sites, build a feature to setup a custom vocabulary and install it on subsequent sites.

If you agree, disagree or just want to weigh in on this discussion, leave your thoughts in the comments below.

**_Added 4/5/12 8:30 am: Thanks to everyone for being cordial in the comments.  It is a testament to the strength of the Drupal community that we can openly discuss a topic without resorting to personal attacks. Thanks again!_**