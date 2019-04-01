---
title: 'Testing checklist for a Drupal website'
templateKey: blog-post
date: 2013-07-09T13:19:08.000Z
category: Development, Drupal
alias: testing-checklist-drupal-website
summary: > 
 When building a Drupal website, you need to ensure you have thoroughly tested the site before you turn it over to your client. If a client discovers a significant issue, it degrades their trust and can cost sales if the problem is enough to block a website visitor's ability to interact with the site.
author: JD Collier
image: /assets/blog.testing.png
---

When building a Drupal website, you need to ensure you have thoroughly tested the site before you turn it over to your client. If a client discovers a significant issue, it degrades their trust and can cost sales if the problem is enough to block a website visitor's ability to interact with the site.

At Digett, we thoroughly test every site we build. Over the years, we have built a checklist of items to test on a site before going live. 

I have filtered this list for items we test specifically for Drupal. We have another list of items that are tested even for a one-page static HTML site. 

Planned
-------

These first items are just to ensure we've planned for a few items that have caught me off guard before on a Drupal site.

*   Test what happens when you add a level of navigation lower than planned — what if the client wants a page under a page you planned as the deepest you could go? Not that you have to allow for it in the drop down header navigation, but at least there is a plan. 
*   Ensure css takes into account html tags outside initial site content. No tables when launching the site, it doesn't reflect well if a client has to report a problem later when they try to add a simple table of data and the style is completely off because we forgot to plan for it. 
*   301 redirects are in place to redirect old site paths to new Drupal site paths. We do these in the [Redirect](https://www.drupal.org/project/redirect) module.
*   WYSIWYG on main content pages provides a way for clients to align images left or right and css provides appropriate padding for each.
*   WYSIWYG image and file uploads work as expected and the client has appropriate permissions to upload.

Before launch 
--------------

*   Privacy policy link is in place if there are comments on the site (required since we use [Mollom](https://www.drupal.org/project/mollom)).
*   404 (not found) and 403 (forbidden) display appropriate information and are customized appropriately.
*   Drupal Content Type settings: we turn off preview, we ensure revisions are turned on for all content types and we ensure the correct menu is available. 
*   Ensure [Pathauto](https://www.drupal.org/project/pathauto) patterns are set appropriately for each content type. 
*   [Xmlsitemap](https://www.drupal.org/project/xmlsitemap) is configured and updating properly when content changes.
*   Meta descriptions/titles are in place and available for **home page** and **views** as well as normal content pages. For Drupal, it is important to always check pages created by Views. This is often missed on Drupal sites I've seen.
*   Robots.txt file correctly blocks nodes that should not be indexed (rotators, sidebar block promos, etc). We prefer to do this in the [RobotsTxt](https://www.drupal.org/project/robotstxt) module.
*   Client has enough permissions but not too much (based on your ongoing support with client). 
*   User passwords are set to strong passwords before launch.
*   If not a community site, ensure only admins can create accounts.
*   Ensure test content has been removed.
*   Ensure Google Analytics is in place and working (use real time function to ensure anonymous users are tracking); block your IP and client (if desired).
*   Disable development and unused modules.
*   Enable appropriate css and js aggregation (do this before testing site). Javascript aggregation can be especially problematic in some cases so ensure you test any pages with custom functionality.
*   Turn on Drupal cache (if not using Varnish).
*   Check error log and resolve issues.
*   We like to set error reporting to NOT show on screen for production sites — just write to log.
*   Ensure site search works as expected and that it is themed properly.

Right after launch
------------------

*   Clear all Drupal caches.
*   Run broken link checker to ensure production site has no broken links. We use the [Link Checker](https://www.drupal.org/project/linkchecker) module to assist with this process.
*   Ensure any staging or dev url paths are set to production (we use [Pathologic](https://www.drupal.org/project/pathologic) to help catch these)

### **What else do you test for Drupal?**

There are lots more items on our production testing checklist. The items above are just the main things we check for Drupal sites; SEO, browser testing and lots more are involved in launching any website.

Are there other pieces you test in Drupal when launching a site? Do you have questions about anything I listed? Let me know in the comments below. 

_[Check List](https://thenounproject.com/noun/check-list/) designed by [Stephane Thomas](https://thenounproject.com/stefatworld/) from The Noun Project_