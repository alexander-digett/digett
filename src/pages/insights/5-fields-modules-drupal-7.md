---
title: '5 Fields Modules for Drupal 7'
templateKey: blog-post
date: 2011-12-21T17:19:32.000Z
category: 
  -Development, Drupal
alias: 5-fields-modules-drupal-7
summary: > 
 The addition of Fields in Drupal 7 core has created quite a shakeup in the modules that interact with fields and create new kinds of fields. In Drupal 6 they were all CCK field modules, but now many of them have changed names or been replaced completely with new modules that better leverage the Drupal 7 entity concept. Over the last few month, these five modules have become some of my favorites for those sites that need more complexity in the fields that are created and how they relate to one another.  	References The References module contains the ‘node reference’ and ‘user reference’ modules that were separate in Drupal 6. There are two other approaches to this same idea in the Relation and Entity Reference modules, but I find this module just works the way I expect without any headache even though it’s only a beta.
author: Art Williams
image: /assets/post-placeholder.png
---

The addition of Fields in Drupal 7 core has created quite a shakeup in the modules that interact with fields and create new kinds of fields. In Drupal 6 they were all CCK field modules, but now many of them have changed names or been replaced completely with new modules that better leverage the Drupal 7 entity concept. Over the last few month, these five modules have become some of my favorites for those sites that need more complexity in the fields that are created and how they relate to one another.

References
----------

The [References](https://www.drupal.org/project/references) module contains the ‘node reference’ and ‘user reference’ modules that were separate in Drupal 6. There are two other approaches to this same idea in the Relation and Entity Reference modules, but I find this module just works the way I expect without any headache even though it’s only a beta. I use these modules when I need to link a node to a user or to another node. For example, I may want to link an article to the profile of the author and I can use node reference. If I want to link to the author’s user account I would use user reference. Note (12/27/2011): As Larry Garfield pointed out in the comments, References module is planned to be deprecated once [Entity Reference](https://www.drupal.org/project/entityreference) module has the same or expanded capabilities.  As of this date, I would still recommend References for production sites, but keep an eye on Entity References and plan to upgrade once it is ready.

Corresponding Node References
-----------------------------

[Corresponding Node References](https://www.drupal.org/project/cnr) is a great little module that solves a usability issue easily and elegantly. This module will let you link two node reference fields in different content types so that if one changes the other will also change. The purpose of this is to allow you to have two nodes like to each other bi-directionally. Then if one changes they both change. I have used this module in a situation where a company’s website has employee profiles as nodes and the company is divided into many different industry teams. I need to provide a way to assign a profile to an industry when editing the profile, but I’d also like to be able to pull up the industry and change the profiles assigned to it without needing to also go edit the profiles. This module gives you a settings page where you map the two node references as pointing to each other, then the modules handles the process of keeping them in sync.

Field group
-----------

The [Field Group](https://www.drupal.org/project/field_group) functionality allows you to wrap a fieldset, div, vertical tab, or horizontal tab around a group of fields in your content type or entity. The precursor to this module was part of CCK in D6, but is its own module in D7. I use this to group similar fields and make it easier for the site manager when creating content. The vertical tab display is especially helpful if the fields you are grouping are optional fields. You can place them in a vertical tab just like the publishing options on the node/add page. This modules will also create groups around fields on the display.

Field Collection
----------------

[Field Collection](https://www.drupal.org/project/field_collection) is similar to Field Group at first glance, but rather than just visually grouping fields together, this module will create a new entity where the fields in the group live. The reason this is important is because now the content creator can create multiple sets of fields. Let’s say you have a site that displays race schedules for local 5Ks and the results for those events. You could set up a content type called race where all the event information lives, then setup a field collection within that content type for results. The field collection will contain the fields’ name, time, race number, age, etc. The content creator can add as many line items of results to the race content type as they need. My rule of thumb for when I use a Field Collection instead of a Node Reference is if the content in the collection shouldn’t be edited outside the context of the parent node. So race results on a race node are a field collection, but linking an authors profile node to his article use a node reference field because the profile and article should be edited and created separately.

Conditional Fields
------------------

[Conditional Fields](https://www.drupal.org/project/conditional_fields) is my new favorite field module. It gives you the ability to make certain fields conditional upon the state of another field in the content type. It will even use some cool jquery animation to hide and show the conditional fields if you want. I recently used this on a content type to allow hierarchy of nodes. By checking a box that the node is a child, then the select list of available parent nodes appears. I find that this kind of functionality increases usability of the site for the end user dramatically by only displaying necessary fields. The Fields capabilities in Drupal 7 has been my favorite improvement over Drupal 6. While much of the functionality above may have been available in Drupal 6 CCK modules, the new interface and tighter integrations of Fields has made all the difference. If you know of any other field modules that have made you site building easier or improved the usability of your sites, please leave us a link in the comments.