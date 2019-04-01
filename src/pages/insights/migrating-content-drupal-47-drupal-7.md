---
title: 'Migrating content from Drupal 4.7 to Drupal 7'
templateKey: blog-post
date: 2012-03-14T15:53:37.000Z
category: Development, Drupal
alias: migrating-content-drupal-47-drupal-7
summary: > 
 Yesterday my job was to migrate content from an old Drupal 4.7 site into a fresh new installation of Drupal 7. In this post I will outline the basic process for completing that task. This will not be an exhaustive walk-through, but I hope it helps someone else and serves as a reminder a few months from now when I may need to do this again for another client.
author: Art Williams
image: /assets/overloaded-bicycle.jpg
---

Yesterday my job was to migrate content from an old Drupal 4.7 site into a fresh new installation of Drupal 7. In this post I will outline the basic process for completing that task. This will not be an exhaustive walk-through, but I hope it helps someone else and serves as a reminder a few months from now when I may need to do this again for another client.

Step 1: Setup Content Types
---------------------------

The first thing to do is make sure that the content types that exist on the Drupal 4.7 site are created on the new Drupal 7 site. This doesn’t have to be a one to one relationship but it helps. I did consolidate a few fields and even made some of the taxonomies into content types.

Basically, you want to have a place for every piece of data from the D4.7 on the D7 site.

Step 2: Export Data
-------------------

The [Import / Export API module](https://www.drupal.org/project/importexportapi) seems to be the best option for getting content out of D4.7. Because Drupal 4.7 is so old and not supported you have to go looking for the [4.7.x-1.0 version](https://www.drupal.org/node/131008) of the module under all releases, but it’s there. Download, install, and enable both parts (api and ui). This module gives you a big list of content to export and when it exports to .csv it outputs the export in little iframe windows that you need to copy and paste into files.

My recommendation is that you paste the export results into an Excel workbook with each part of the export in its own worksheet. You should also structure your exports into logical content type-based exports. For instance, if your content type has a taxonomy/category assigned you’ll need to export the “categories” also.

Step 3: Build Master .csv file
------------------------------

Once all of the data you need for one particular content type is in the various worksheets in excel, you will need to combine them into one master worksheet that you can save as a .csv file.

This process is somewhat tedious and can be done a number of ways so I’m not going into detail, but here are some tips:

*   Use the Excel VLOOKUP and LOOKUP functions to pull the data from one sheet up into the master sheet using the nid as the lookup value that needs to be matched.
*   It helps to remove all data from a sheet that isn’t related to the content type you are working on. For example, cut the taxonomy table into its individual vocabs so you only need to work with the one or two that are relavent.
*   [This great little function](http://www.ozgrid.com/forum/showthread.php?t=25239&p=128076#post128076) really helps in those situations where VLOOKUP and LOOKUP won’t work.

Step 4: Import into D7
----------------------

Now for the easy part. Install the Feeds module on the D7 site and clone the Node Import on the Feeds Importers page (admin/structure/feeds). There is a lot of [documentation](https://www.drupal.org/node/622696) on how to use the Feeds module, but by cloning the Node Import all you really need to do is tell the importer which node to create out of the row of data (admin/structure/feeds/\[your\_importer\]/settings/FeedsNodeProcessor) and create the mappings (admin/structure/feeds/\[your\_importer\]/mapping). When creating the mappings, keep in mind that the SOURCE should be the label you have on the top row of you .csv file and the TARGET is the field in your D7 content type.

There are certain situations that the Feeds modules CSV Parser doesn’t handle very well, like multiple values on the same field. The node is expecting an array but the CSV Parser passes in everything as a string. This is where a module called [Feeds Tamper](https://www.drupal.org/project/feeds_tamper) comes to the rescue.

Feeds Tamper allows you to perform certain functions on the data after the CSV Parser has pulled it all in from the .csv file, but before the node is created in Drupal. In the example of the multi-value field where the .csv file has a list of items, then you can configure Feeds Tamper to explode() that string and make it an array that node then knows how to handle.

Step 5: Repeat until successful
-------------------------------

Another nice feature of the Feeds module is that once you’ve imported the content you can delete it all with one button click, so don’t be afraid to test your import regularly to see what is working and what still needs some work.

Then you can repeat the whole process with the next content type or taxonomy until all of your content has been migrated successfully

A few more tips
---------------

*   Pay attention to content dependencies when deciding what content to import first. For example, categories/taxonomies should probably be done first, since your content type nodes will likely need to reference taxonomies on their import.
*   Don’t forget about path URL aliases on the D4.7 site. You’ll likely want to include those in all of your imports to maintain the same path on the upgraded site.
*   Also I recommend abandoning past revisions of your nodes if at all possible. This will make the import much less complex. Besides, we’re going to save a backup copy of the D4.7 database before decommissioning it so if we need to go back at look at something we missed, it’s not lost forever.

With newer versions of Drupal the migration process isn’t quite so painful due to great tools that exist for both the import and export of data, but Drupal 4.7 really can make your life miserable if you are unlucky enough to still have sites running on it.

This method, while not easy, is manageable and the hardest part is all of the Excel merging. If you aren’t an SQL wizard who can pull the data directly from the database, then this approach might work for you.

Let us know about your migration pains or processes in the comments below.