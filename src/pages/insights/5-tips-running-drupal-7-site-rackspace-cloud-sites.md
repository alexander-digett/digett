---
title: '5 Tips for Running a Drupal 7 site on Rackspace Cloud Sites'
templateKey: blog-post
date: 2011-12-07T15:14:58.000Z
category: 
  -Development, Drupal
alias: 5-tips-running-drupal-7-site-rackspace-cloud-sites
summary: > 
 Without going into the positives and negatives of Rackspace’s Cloud Sites platform, there are a few tips that we’ve learned that will help you Run, Deploy and Maintain a Drupal 7 site on this platform.
author: Art Williams
image: /assets/rackspace-cloud-login.png
---

Without going into the positives and negatives of Rackspace’s Cloud Sites platform, there are a few tips that we’ve learned that will help you Run, Deploy and Maintain a Drupal 7 site on this platform.

#1 - Increase the PHP memory limit
----------------------------------

In your Drupal .htaccess file add a line at the top of the file that says: php\_value memory\_limit 128M Rackspace Cloud Sites default memory limit is 32MB which is the minimum recommended amount for a Drupal 7 site, but way too small for a full featured Drupal 7 site. My opinion is that 128MB is the minimum and sometimes 256MB is necessary on a large site with many modules. If I don’t increase the memory limit, I’ll usually get an error on most sites the first time I try to run update.php after updating some contrib modules.

#2 - Uncomment “RewriteBase /”
------------------------------

For clean URLs to work on Drupal in Rackspace Cloud Sites, you must uncomment the line in your .htaccess files that says “RewriteBase /”. Without this line, Drupal won’t give you the option of turning on clean URLs during installation. For Beginners: uncommenting in the .htacces file simply means deleting the “#” character at the beginning of the line.

#3 - Disable the Overlay Module
-------------------------------

This is really just a general tip for Drupal 7. The overlay Module, while cool, definitely slows down the admin side of a site. If you can live without the niceness, it will make building and managing the site much quicker.

#4 - Write Shell Scripts for Repetitive Tasks
---------------------------------------------

One of the biggest negatives of Rackspace Cloud Sites is the lack of shell access. The best alternative we’ve found for repetitive tasks is to write shell scripts, then set up a cron job to run the script. A couple of examples of shell scripts we use are zipping and unzipping archives, dumping and restoring databases, and mirroring a live site back to a development site if they are in the same Cloud Sites account.

#5 - Turn on Caching
--------------------

This tip really goes for any production site, but especially in Rackspace Cloud Sites. A Drupal site without caching on can seem slow in this hosting environment, but once caching is on, it’s much faster. If you are using Cloud Sites as a development environment, then leave caching off or you’ll pull your hair out wondering why your site changes are showing up. But once the site is live, turn it on. The cache settings in Drupal 7 are found at: /admin/config/development/performance Check the boxes next to: Cache pages for anonymous users. Aggregate and compress CSS files. Aggregate JavaScript files. And select the options: Production (minified) Google Also, remember that Rackspace Cloud Sites charges based on “compute cycles,” so turning on cache will help keep costs down once the site is live. Try these tips with your Drupal 7 site on Rackspace Cloud Sites and we guarantee your experience will be much improved. Also check out these other helpful articles we’ve written about Drupal. [Review: Acquia Webinar on Drupal Security](/blog/11/02/2011/review-acquia-webinar-drupal-security) [Be a Drupal opportunist. Use the right tool at the right time.](/blog/10/14/2011/be-drupal-opportunist-use-right-tool-right-time) [The Case for Upgrading Your Drupal Website](/blog/08/31/2011/case-upgrading-your-drupal-website)