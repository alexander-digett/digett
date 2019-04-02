---
title: 'Everplans: Behind the Curtain'
templateKey: blog-post
date: 2013-05-07T14:00:00.000Z
category: 
  -Development, Drupal
alias: everplans-behind-curtain
summary: > 
 Everplans.com is a website meant to help people prepare for and deal with death. The previous iteration of their site presented numerous technical challenges, making it difficult for their team to achieve their goals. It became Digett's job to give Everplans a website that works for, not against, its users and administrators. 
author: Jonathan Dale
image: /assets/build-drupal-website.png
---

Everplans.com is a website meant to help people prepare for and deal with death. The previous iteration of their site presented numerous technical challenges, making it difficult for their team to achieve their goals. It became Digett's job to give Everplans a website that works for, not against, its users and administrators. 

Architecting a solution
-----------------------

After reviewing the initial scope of work as provided by the Everplans team, we determined that the best approach would be to conduct interviews with each of their team members, as well as a full evaluation of their existing site. This allowed us to gather a full list of expectations and requirements which we were then able to transform into a functional specification upon which we could base our work and results.

This functional specification became the foundation of our work and allowed us to verify that the Everplans vision for design, content and user experience were implemented properly.

Requirements and expectations
-----------------------------

The Everplans site has tons of content, and it is critical for that content to be organized and presented in a logical way. Digett re-architected the back-end of the website to make everything easier for the site administrators to use, while also maintaining a clean user experience on the front-end.

### Managing Content

Content should be easy to maintain. Relationships between each piece of content should be easy to maintain, support many to many relationships, and changes to a relationship should be reflected in both the originating content and each piece of content that is impacted by the change.

### Canonical URLs and Multipath content

Content may be available in multiple locations on the site, however, it should always be the same content and there should not be a need to edit this content in multiple locations.

### Managing User Experience

Ensuring a consistent user experience requires managing the presentation of content throughout the site, including overriding content paths in multiple locations without introducing an additional burden on site administrators.

Modules: The building blocks of success
---------------------------------------

One of the most difficult aspects of working with Drupal is finding the _right_ way to do something. For every aspect of a project there are often an infinite number of ways of accomplishing it. Each of the modules used on Everplans was chosen based on project requirements, growth expectations for the site, and overall acceptance by the Drupal community.

This is not a complete list of modules in use, and is primarily limited to those modules which have lent themselves to core functionality of the site.

### Entity Reference

Entity reference allows the Everplans team to build complex relationships between their content. While there are a number of reference modules which have evolved to take the place of CCK node reference, we felt that Entity Reference represented the best available option for this project.

### Rules

Rules allows us to help maintain entity references between each referenced content type. We are using Components to centralize the PHP code which needs to run in order to maintain our relationships, and then using individual rules to call upon those components.

#### Component 1: Create Entity References

This component is called after saving new content or after updating existing content. It accepts three arguments and uses those to add entity references back to the entity being saved in each of the entities that are referenced from the entity being saved.

As that last sentence can be a bit confusing, think of it like this: The entity we are saving is considered the parent, and every entity which the parent references is considered a child. We take the list of children and, if no reference to the parent exists, we add a reference to the parent to each child.

/\*
  $items : The list of entities that we are referencing. Drupal is kind enough to load the full
    entity for each item.
  $nid : The node id of the parent entity.
  $ref\_name : The name of the entity reference field where the parent nid should be added
    to the referenced entity.
\*/

//Only do this if we are referencing entities.
if (!empty($items)) {
  $nids = array();

//Loop through the list of entities.
  foreach ($items as $entity) {
//Loop through the list of parents to see if this entity is there.
    $found = FALSE;
    if (!empty($entity->{$ref\_name}\[$entity->language\])) {
      foreach ($entity->{$ref\_name}\[$entity->language\] as $key => $parent) {
        if ($parent\['target\_id'\] == $nid) {
          $found = TRUE;
        }
      }
    }
//If we did not find this entity in the parent list, add it.
    if ($found === FALSE) {
      $entity->{$ref\_name}\[$entity->language\]\[\] = array('target\_id' => $nid);
//Save the changes. We can do this because Drupal has loaded the entity for us.
      node\_save($entity);
    }
  }
}

#### Component 2 : Delete Entity References

This is called before saving content. It accepts four arguments and uses those to remove entity references from any entity that is no longer referenced by the entity being saved.

In other words, the item being saved is considered the parent entity, and every item which is referenced by the parent is considered a child entity. We compare the list of children from the original parent with the parent that we are about to save and, if the child is no longer referenced by the parent, we remove the reference to the parent from the child. Failure to do this would eventually result in problems with modifying the entities.

/\*
  $items : The list of entities that we are about to save. These are the children. Drupal is
    kind enough to load the full entity for each item.
  $items\_unchanged : The list of entities that we had before any changes were made.
    These are the children. Drupal is kind enough to load the full entity for each item.
  $nid : The node id of the parent entity.
  $ref\_name : The name of the entity reference field where the parent nid can be found in
    the child entity.
\*/

//Only do this if we had child entities to start with.
if (!empty($items\_unchanged)) {
  $nids = array();

//Loop through the list of entities that we started with.
  foreach ($items\_unchanged as $entity\_unchanged) {
    $found = FALSE;
//Check to see if the entity is in the list we are about to save.
    foreach ($items as $entity) {
      if ($entity === $entity\_unchanged) {
        $found = TRUE;
      }
    }
//If we did not find the entity, then we need to remove the parent reference from it.
    if ($found === FALSE) {
//Loop through the list of parent nids.
      foreach ($entity\_unchanged->{$ref\_name}\[$entity\_unchanged->language\] as $key => $scenario) {
//Remove, unset, the array item when we locate a matching nid.
        if ($scenario\['target\_id'\] == $nid) {
          unset($entity\_unchanged->{$ref\_name}\[$entity\_unchanged->language\]\[$key\]);
        }
      }
//Save the changes. We can do this because Drupal has loaded the entity for us.
      node\_save($entity\_unchanged);
    }
  }
}

#### Component 3: Remove Deleted Entity References

This is called after deleting content. It accepts three arguments  and uses those to remove entity references from any entity that referenced the entity which has been deleted.

Think of it like this: The entity which has been deleted is considered the child entity, and all entities which reference it are considered parent entities. We go through each parent entity and remove any reference to this child entity as it is no longer valid. If we didn't do this, we would have trouble editing the parent entities later.

/\*
  $items : The list of entities that we need to update. Drupal is kind enough to load the full
    entity for each item.
  $nid : The node id of the parent entity.
  $ref\_name : The name of the entity reference field where the child nid can be found in the
    parent entity.
\*/

//Only do this if we have parent entities to start with.
if (!empty($items)) {
  $nids = array();

//Loop through the list of entities that we started with.
  foreach ($items as $entity\_unchanged) {
//Loop through the list of parent nids.
    foreach ($entity\_unchanged->{$ref\_name}\[$entity\_unchanged->language\] as $key => $scenario) {
//Remove, unset, the array item when we locate a matching nid.
      if ($scenario\['target\_id'\] == $nid) {
        unset($entity\_unchanged->{$ref\_name}\[$entity\_unchanged->language\]\[$key\]);
      }
    }
//Save the changes. We can do this because Drupal has loaded the entity for us.
    node\_save($entity\_unchanged);
  }
}

### Views

While our usage of Views is not necessarily unique, it helps to note that we are using them in a non-standard way. Due to the unique nature of how content is displayed on the site, there may be occassions where we do not want view-based content to appear, or where we need to have different content appear instead of the view. We found that it was easier to manage this programatically from with node template files as opposed to trying to do so with the Drupal block system.

In those instances, we are using calls to views\_get\_view\_result to retrieve the view data and then outputting it where needed.

### Custom Formatters

The Custom Formatters module allows us to quickly modify how entity reference links are shown. For the Everplans site, this allows us to refine the paths to related content and maintain the user experience whereby content is considered housed within a particular path on the site, even if that content is included in multiple locations on the site.

### Draggable Views

Draggable Views allows us to provide a quick and easy way for content administrators to re-order content which is not otherwise easy to re-order.

Automation: Dev, Stage, Deploy
------------------------------

One of the principal requirements from Everplans revolved around being able to manage the site and have development, staging, and live environments. Digett developed deployment scripts to manage the movement of code and content between each environment — this allows for a smooth process when rolling out new features.

The deployment script is primarily responsible for:

*   Cloning the database and file system between environments.
*   Resetting the file system permissions as needed.
*   Modifying the robots.txt file to prevent index of the dev and stage environments.
*   And clearing cache and running cron.

Outcome
-------

Our goal was to make the new Everplans website as functional as it is beautiful. And with great teams and the power and flexibility of Drupal, we believe we have done just that.

### Related articles

*   [New Site Launch: Everplans.com](/blog/04/04/2013/new-site-launch-everplanscom-resource-tough-topic-death)
*   [Why You Should Use Drupal for Your Next Website Project](/blog/06/15/2011/why-you-should-use-drupal-your-next-website-project)

_\[Image: [lusi](http://www.freeimages.com/photo/red-curtain-1203512)\]_