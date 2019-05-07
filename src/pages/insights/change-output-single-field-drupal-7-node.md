---
title: 'Change the Output of a Single Field on a Drupal 7 Node'
templateKey: blog-post
date: 2012-01-18T16:31:01.000Z
category: 
  -Development, Drupal
alias: change-output-single-field-drupal-7-node
summary: > 
 Overriding the output of an individual field on a node can be done by overriding the node template, but it sure does feel like overkill for just one field. Sometimes it would be great to just override the field itself without touching the field values in the database.
author: Art Williams
image: /assets/fields.jpg
---

Overriding the output of an individual field on a node can be done by overriding the node template, but it sure does feel like overkill for just one field. Sometimes it would be great to just override the field itself without touching the field values in the database.

The Case for template\_preprocess\_field
----------------------------------------

The function [template\_preprocess\_field](https://api.drupal.org/api/drupal/modules--field--field.module/function/template_preprocess_field/7) can be used to manipulate just the markup of the field in the $variables array before it’s output to your theme. There are a number of reasons why you would want to use this function as apposed to overriding [field.tpl.php](https://api.drupal.org/api/drupal/modules--field--theme--field.tpl.php/7) or [node.tpl.php](https://api.drupal.org/api/drupal/modules--node--node.tpl.php/7) in your theme: It’s faster. Processing an efficient php function will always be faster than Drupal’s template override system, looking for the right file and processing it. Less Code. When you override the output of the node.tpl.php file to adjust a single field output you are also taking on the responsibility of outputting every field in the specific manner you want. So it could take a large amount of code to build a functioning node override. Fewer files to manage. When overriding the field.tpl.php you’ll end up with a new file for every field you override (something like field--field-name.tpl.php).

Usage
-----

In this example I’m going to take a geofield and change its output to provide a link to a Google Map. Geofield integrates well with OpenLayers, but in this case I don’t want the overhead of OpenLayers and don’t need to actually display the maps on the node. First, create the template\_preprocess\_field function in the template.php file of your theme. Replace the word template with your theme name or you will end up with a WSOD.

function template\_preprocess\_field(&$vars) {
  // Your code goes here.
}

The next step is to isolate the field that you would like to override. I do that with an if statement that tests for the the field name.

if($vars\['element'\]\['#field\_name'\] == 'field\_event\_geofield') {
  
}

Note: I’m using the $vars array (which is this functions name for $variables). A useful step at this point is to print this array inside the if statement. If you have the devel module turned on this can usually be done with dpm($vars);. However, in the template\_preprocess\_field function I had hit or miss success using dpm(). I’m not sure why it only works for certain fields, but kpr() works flawlessly. So I would recommend placing the line kpr($vars); inside this if statement so you can see the entire array. The markup for your field will be located in the array at $vars\['items'\]\['0'\]\['#markup'\]. This is what we want to override. In our example the markup for geofield will likely be something like “Latitude 29.419992, Longitude -98.484321” which is useless. We need the values for each part latitude and longitude to construct the url. The raw values of the field are located in the $vars array at $vars\['element'\]\['#items'\]\['0'\]\[‘lat’\] & $vars\['element'\]\['#items'\]\['0'\]\[‘lat’\]; With this information we can rebuild the field markup. First I’m going to check that values exist for latitude and longitude, then create the link to google maps using those values. So this is how we put it all together.

function template\_preprocess\_field(&$vars) {
  if($vars\['element'\]\['#field\_name'\] == 'field\_event\_geofield') {
    //kpr($vars);  //Uncomment to output the $vars array.
    if(isset($vars\['element'\]\['#items'\]\['0'\]\['lat'\]) && isset($vars\['element'\]\['#items'\]\['0'\]\['lon'\])) {
      $vars\['items'\]\['0'\]\['#markup'\] = '[View Map](http://maps.google.com/maps?q='.$vars['element']['#items']['0']['lat'].','.$vars['element']['#items']['0']['lon'].')';
    }
  return;
  }
}

If you need to override multiple fields then repeat everything in the if($vars\['element'\]\['#field\_name'\]) statement within the same template\_preprocess\_field function, and customize it. It’s also a good idea to add the line “return;” to the end of the if statement to increase the speed of the function by exiting as soon as possible.   As with many things in Drupal there are multiple ways to accomplish the same task. The template\_preprocess\_field function is my favorite, the fastest and I believe the simplest way to override the markup of a few select fields. If you have other ideas or suggestions or you find this helpful, please let us know in the comments. Image: [Earl53](http://www.morguefile.com/creative/earl53)