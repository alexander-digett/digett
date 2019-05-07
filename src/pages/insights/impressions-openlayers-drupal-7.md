---
title: 'Impressions of OpenLayers in Drupal 7'
templateKey: blog-post
date: 2011-09-30T13:53:29.000Z
category: 
  -Development, Drupal
alias: impressions-openlayers-drupal-7
summary: > 
 I'm a fan of the OpenLayers module in Drupal 7 (and 6 too, for that matter) and here's why you should be too. You can allow for both latitude/longitude mapping, KML property boundary mapping, geocoding entered addresses (with a helper module) and more. With this module, you can input the geo data and then display all your information on a map.
author: JD Collier
image: /assets/map.jpg
---

I'm a fan of the [OpenLayers module](https://www.drupal.org/project/openlayers) in Drupal 7 (and 6 too, for that matter) and here's why you should be too. You can allow for both latitude/longitude mapping, KML property boundary mapping, geocoding entered addresses (with a helper module) and more. With this module, you can input the geo data and then display all your information on a map.

Main modules We Use
-------------------

Openlayers -> This is the API module to make everything work. Openlayers KML Layer -> With a [KML file](https://en.wikipedia.org/wiki/Keyhole_Markup_Language), you can add a layer on top of your map with the boundaries on the map drawn.  Openlayers UI -> This piece adds the administrative UI to set up maps and configure OpenLayers. Openlayers Views -> This module allows you to create a view as a datasource for mapping points on a map (like pulling in latitude/longitude points from content) or displaying the maps from the KML layers. With these modules in place, you can add latitude/longitude decimal degrees fields to a content type and a KML file upload to display property boundaries. Following the [online documentation](https://www.drupal.org/node/627816) for the OpenLayers module, you next create your default maps, your view to act as a data source and a view to display the maps you desire.

Results
-------

The end result is nothing short of amazing — interactive maps with your Drupal content plotted out. Below is an example of what you can do. We have a content type with names and addresses of doctors in a geographic region. We created a view that selects all the offices and then used OpenLayers to create a map with all the geographic data from the view plotted on a map. You can click on individual pins and it will display a pop-up window with the fields that we selected in the Drupal view. ![screen_shot_2011-09-30_at_9.33.34_am.png](/assets/screen_shot_2011-09-30_at_9.33.34_am.png) The best part is that you aren't limited to using Google's great satellite, street or hybrid maps. You can also pull in maps from many other sources. Have you used OpenLayers? If so, do you have any tips to share?

### More On Drupal Development

[The Case for Upgrading Your Drupal Website](http://www.digett.com/blog/08/31/2011/case-upgrading-your-drupal-website) [A Method for Mega Menus in Drupal](http://www.digett.com/blog/09/14/2011/method-mega-menus-drupal)