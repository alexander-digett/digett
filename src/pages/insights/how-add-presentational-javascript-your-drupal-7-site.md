---
title: 'How To Add Presentational Javascript to Your Drupal 7 Site'
templateKey: blog-post
date: 2012-02-15T16:14:00.000Z
category: 
  -Development, Drupal
alias: how-add-presentational-javascript-your-drupal-7-site
summary: > 
 If you want your Drupal 7 site to have a easy user interface with unique effects, you will likely need to add presentational javascript/jQuery to your theme at some point. There are two situations where we might need to add some presentational javascript that each require a different approach:
author: Art Williams
image: /assets/jquery-logo.png
---

If you want your Drupal 7 site to have a easy user interface with unique effects, you will likely need to add presentational javascript/jQuery to your theme at some point. There are two situations where we might need to add some presentational javascript that each require a different approach: Global: Adding some javascript or a new jQuery plugin that will apply across the entire site. Specific: Adding a snippet of js code that will only apply to a particular view or content type.

Performance and caching
-----------------------

The reason for the varying approaches is to optimize the the performance of the site. If you have javascript that will apply across many parts of the entire site, you only want to load it once and get it cached. If you have a piece of code that only fires on one page, don’t load it up on every page.

Global javascript example
-------------------------

We often pre-fill the global search field with a label (“Search this site”) instead of displaying the label outside of the field. There is a nice jQuery plugin, [Example](http://mudge.name/jquery_example/), that accomplishes the task. But to get it to work we need to load the plugin and also our own code to tell the plugin which fields to pre-fill with what text. Clearly this javascript should run on every page on the site. Place the javascript (plugin and custom) file in your theme folder. We use a /js folder for all javascript files. In this example we upload the jquery.example.min.js plugin file & our custom file that we called fieldtext.js. Add a line to your .info file for each of the global javascript files. scripts\[\] = js/jquery.example.min.js scripts\[\] = js/fieldtext.js Rebuild the theme registry (drupal url: admin\_menu/flush-cache/theme)

Specific javascript example
---------------------------

A common time to need some javascript on only one page of the site is when you have an exposed filter (select list) on a view and you need to alter the first option from the default “- Any -” to something more descriptive. Using jQuery we can use the text() function to alter it. An example:

$("#edit-field-profile-location-value option:first").text("- Any Location -");

I prefer to have all of my javascript in files in the /js folder inside my theme. Obviously you could include this jQuery in a specific template (tpl.php) file if it already exists, but you don’t have to override the template just for this.

/\*\*
 \* Override or insert variables into the html templates.
 \*/
function yourtheme\_preprocess\_html(&$vars) {

/\*\*\* Ad js files to specific sections of the site \*\*\*\*/
$options = array('type' => 'file');  //tells Drupal that the javascript in drupal\_add\_js is a file

//Checks if the required string is in the classes array that appears in the body tag on pages created by a view.  Reproduce the following lines for each new section.
if ((in\_array('section-profile', $vars\['classes\_array'\]))) {
  //Load the js file.
  drupal\_add\_js(drupal\_get\_path('theme', 'yourtheme'). '/js/profile.js', $options);
  }
}

Find a body class for the page or section where you want the javascript to run. Create the javascript file in your theme: js/profile.js in this example because it acts on my profile content type. To tell Drupal when and how to load this file add a few lines to the yourtheme\_preprocess\_html() function in your template.php file. If you already have this function then add the code inside at the end of it instead of creating a new function. Replace “yourtheme” with the name of your theme in the function name and the drupal\_add\_js line Replace profile.js with the name of your js file Replace “section-profile” with the body class you pinpointed in step one. If you have multiple sections of the site that each need javascript added to just their section, you can repeat these steps for each section and add new if statements to the yourtheme\_preprocess\_html function

Javascript files
----------------

In the files you’ve created with your custom javascript, keep in mind that your code needs to be wrapped in a closure to isolate it from other javascript elsewhere on your site. There are a few different ways to write a closure but I prefer wrapping my code like this:

jQuery(document).ready(function($) {
 
  /\*\*\* Your custom code goes here \*\*\*/

});

Advanced javascript
-------------------

There are some more advanced techniques for adding javascript to your site using something Drupal calls behaviors. Behaviors have the potential to be really powerful but are more complicated to get a grasp on than what we’ve gone over so far. If you find yourself needing to reload your javascript each time an AJAX call is made or you are writing a custom module with javascript you should [read up on behaviors](http://www.slideshare.net/tomfriedhof/drupalbehaviors). Javascript & jQuery can help make your site easier to use and more interesting to interact with, so I recommend spicing your site up with some nice js touches here and there. Hopefully now you can see how to include javascript code in your Drupal 7 site. If this is all new, give it a try and let us know how it goes. If you are a javascript ninja leave your tips in the comments.