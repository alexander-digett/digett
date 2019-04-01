---
title: 'Mobilize Your Drupal Site With Mobile Tools'
templateKey: blog-post
date: 2010-05-24T14:17:44.000Z
category: Clients, Drupal
alias: mobilize-your-drupal-site-mobile-tools
summary: > 
 Mobile is big and getting bigger. Unfortunately, there’s not a one-size-fits-all approach for mobilizing Drupal. Today, a plethora of modules and services exist to help developers create new iterations of traditional site interfaces. We chose Drupal’s Mobile Tools to help us mobilize McMillin Homes and create a custom user experience for their mobile visitors. Here's an overview of our process: 
author: Kathryn
image: /assets/mcmillin-mobile-sm_0.jpg
---

Mobile is big and getting bigger. Unfortunately, there’s not a one-size-fits-all approach for mobilizing Drupal. Today, a plethora of modules and services exist to help developers create new iterations of traditional site interfaces. We chose Drupal’s [Mobile Tools](https://www.drupal.org/project/mobile_tools) to help us mobilize McMillin Homes and create a custom user experience for their mobile visitors. Here's an overview of our process:

Mobilizing, at a Glance
-----------------------

1.  Set up a mobile subdomain and configure its virtual hosts.
2.  Adapt the site’s current theme for mobile devices.
3.  Move from a single-site to a multi-site installation.
4.  Configure redirections, session cookies, and theme switching.

Subdomains and Virtual Hosts
----------------------------

![Image removed.](/core/misc/icons/e32700/error.svg "This image has been removed. For security reasons, only images from the local domain are allowed.")
--------------------------------------------------------------------------------------------------------------------------------------------------------

By convention, typical subdomains for a mobile site are "i" and "m." After adding m.mcmillinhomes.com to our DNS entries, we needed to verify the virtual host for our main domain (mcmillinhomes.com) would accept requests at m.mcmillinhomes.com as well. This configuration ensures both content and data are shared across the two sites and is necessary if you want to reuse the existing Drupal installation.

Theming for Mobile
------------------

The whole purpose of creating a mobile version of a website is to enhance the user experience for visitors accessing a site from a mobile device. A site like McMillin Homes may be perfectly effective on a modern monitor, but after it's scaled by a high percentage to fit on a smart phone, it becomes significantly less usable.

McMillin requested a mobile-based version of their site to streamline the process of finding a home from a mobile device. With this goal in mind, we designed a stripped-down version of the site's existing theme. There's little difference between coding a mobile and a desktop theme.

When you begin to build a mobile theme, however, be aware of your use of [jQuery](http://jquery.com/). Some mobile browsers are incapable of running javascript. To alleviate this situation, offer an alternative, non-scripting solution if the user agent is not supported. Here's an example of iPhone-specific detection:

### template.php

`<?php  
  class template {  
    public static function supported() {  
        $user_agent = $_SERVER['HTTP_USER_AGENT'];  
      if(preg_match``('iphone',$user_agent)) {  
         return 'supported';  
      } else {  
         return FALSE;  
      }      
    }  
  }  
?>`

Transitioning to a Multi-Site Installation
------------------------------------------

When we first [redesigned and deployed the new McMillin Homes site](/2009/06/30/new-mcmillinhomescom) in 2009, we didn’t have the foresight to structure our sites directory to accommodate for a multi-site installation. Our original folder structure was that of a typical Drupal installation: sites → default → files, sites → all → themes, sites → all → modules, etc.

Usually, subdomains don't require a multi-site configuration, but in our case, m.mcmillinhomes.com needed to share files and a database with the main domain, mcmillinhomes.com. They also needed to cache simultaneously, as one.

We transitioned to a multi-site installation by adding two new directories inside our sites directory: sites → mcmillinhomes.com and sites → m.mcmillinhomes.com. After creating those, we moved the original themes folder, housing one contributed and two custom themes, into the themes folder in the new mcmillinhomes.com directory. Here's an example of how things look now, after the modifications:

### New, Multi-Site Folder Structure

*   sites → all → modules
*   sites → default
    *   sites → default → files
    *   sites → default → settings.php
*   sites → mcmillinhomes.com
    *   sites → mcmillinhomes.com → settings.php
    *   sites → mcmillinhomes.com → themes
        *   sites → mcmillinhomes.com → themes → mcmillin
        *   sites → mcmillinhomes.com → themes → mcmillin\_green
        *   sites → mcmillinhomes.com → themes → mcmillin\_mobile
        *   sites → mcmillinhomes.com → themes → zen
*   sites → m.mcmillinhomes.com
    *   sites → m.mcmillinhomes.com → settings.php

Because our files and modules weren't moved, the integrity of the site wasn't compromised. Functionality remained intact and uploaded images to the files directory continued to be correctly called.

Configuring Mobile Tools
------------------------

Once the steps above are completed, configuring Mobile Tools is a breeze. The module is highly configurable and the UI is straightforward.

We enabled automatic redirection of the mobile user to m.mcmillinhomes.com when navigating to mcmillinhomes.com on a mobile device. The theme switches based on the URL. We included a link to the non-mobile version of the site at the bottom of the mobile theme so visitors can still access the desktop version of a site from their mobile device, if they wish. To achieve this result, append `?nomobile=true`to the URL.

### Helpful Resources

*   [Mobile Tools](https://www.drupal.org/project/mobile_tools) - supplies Drupal developers with tools to assist in making a site mobile
    *   [Make your site mobile with Mobile Tools](https://www.drupal.org/node/459686) - Mobile Tools documentation
    *   [Switching between Desktop and Mobile](https://www.drupal.org/node/609750) - forum thread in Mobile Tools support queue
*   [BrowsCap](https://www.drupal.org/project/browscap) - provides a replacement for PHP's `get_browser()`function
*   [iPhoney](https://www.marketcircle.com/iphoney/) - a free iPhone web simulator for designers & developers