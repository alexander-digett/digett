---
title: 'Integrating HubSpot Forms with Drupal'
templateKey: blog-post
date: 2011-03-02T16:50:55.000Z
category: 
  -Drupal, HubSpot
alias: integrating-hubspot-forms-drupal
summary: > 
 This article is now obsolete: Digett has released a new Hubspot Module for Drupal that allows for easy integration of Hubspot forms into Drupal. HubSpot and Drupal together make a powerful solution for clients who are looking for lead generation and great content management on their website.
author: Art Williams
image: /assets/integrating-hubspot-forms-drupal.png
---

_**This article is now obsolete: Digett has released a new [Hubspot Module for Drupal](/insights/announcing-hubspot-module-drupal) that allows for easy integration of Hubspot forms into Drupal.**_

HubSpot and Drupal together make a powerful solution for clients who are looking for lead generation and great content management on their website.

At this time the integration between the two at the programming level is limited, but as HubSpot’s API grows I can see closer integration becoming a real possibility.

For now the quickest and easiest way to bring HubSpot and Drupal together is to use HubSpot’s form builder to create your form and generate the html/javascript code. Then paste that code inside of a block to be positioned wherever you need it.

The Problem
-----------

In the recent redesign of our website, we were doing just that. Our designer, Andrew, specified that the HubSpot form was styled in a way consistent with the other forms on our site. At face value it seemed like a straightforward task, but the code from HubSpot is table-based and does not hold to normal conventions about how a form should be structured. (For example, the field labels do not have <label> tags around them.) Luckily there is one css class assigned to the div containing the table.

The Solution
------------

By using the [custom filter](https://www.drupal.org/project/customfilter) Drupal module I was able to strip out the table tags from this form and any future HubSpot form we may create on the site. The custom filter module allows you to create a custom input filter (like the line break converter, HTML filter, etc.) that can be added to any input format (like Filtered HTML, Full HTML, etc.) The custom filter you create can detect a pattern and replace it in the text area it’s assigned to.

Removing the Table
------------------

*   Install the [custom filter](https://www.drupal.org/project/customfilter) module.
*   Administrate: /admin/settings/customfilter
*   Create a new filter.  I named mine "Remove all Table Related Tags".
*   Create 4 rules for it. (Custom Filter calls each Pattern/Replacement set a rule)
    *   Name: Remove empty lines
        *   Pattern: /<td>(&nbsp;)<\\/td>/i
        *   PHP Code: ON
        *   Replacement:
            *   $repl = "\\040"  
                return $repl;
    *   (optional) Name: Remove Red Stars
        *   Pattern: /<span style='color: red'> \\\*<\\/span>/i
        *   PHP Code: ON
        *   Replacement:
            *   $repl = "\\040"  
                return $repl;
    *   Name: Remove table tags
        *   Pattern: /table/i
        *   Replacement: div
    *   Name: Remove tbody tags
        *   Pattern: /tbody/i
        *   Replacement: div
    *   Name: Remove tr tags
        *   Pattern: /tr>/i
        *   Replacement: span>
    *   Name: Remove td tags
        *   Pattern: /td>/i
    *   Replacement: span>

Once the Filter is created, it needs to be assigned to an input format. To keep things simple, I decided to create a new one just for HubSpot forms.  
Go to: /admin/settings/filters

*   “Add input format”
*   I named mine “HubSpot Filter” and assigned it to only the administrator role, but you’ll have to decide what’s best for you.
*   Next uncheck all of the the Filters except the one you created in the steps above. The name of it starts with “Custom filter #1” if this is your first custom filter. Otherwise just look for whatever you named your filter.

Using the Filter
----------------

Now when editing any block that contains HubSpot form code, all we have to do is set the input format to “HubSpot Filter.” The table-related tags are located and replaced by <div> and <span> tags.

The HubSpot form still does not have any specific css classes for us to address individual fields, but the class on the wrapper div gave me enough of a reference point to do some basic css styling and get pretty close to Andrew’s original design.

Once it was all tested I went back into the custom filter and checked the box that says “cache” so that the filter does not have to process the form each time the page is loaded.

Until HubSpot’s API become more mature we will continue to use this solution to get a handle on the HubSpot forms we embed into Drupal.  You can view a working form on our [Free Website Analysis](/contact) page.

**_Post Updated by Author on June 3, 2011 to include new features._**