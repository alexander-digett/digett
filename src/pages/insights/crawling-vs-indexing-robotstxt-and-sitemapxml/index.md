---
title: 'Crawling vs. Indexing: Robots.txt and sitemap.xml'
templateKey: blog-post
date: 2014-04-15T14:55:05.000Z
category: Development, Drupal, SEM and SEO
alias: crawling-vs-indexing-robotstxt-and-sitemapxml
summary: > 
 Sometimes you need to prevent a site, page or everything at a particular path from showing up in Google search. I've heard people say to just disallow the page in robots.txt file. This is actually incorrect.
author: JD Collier
image: /assets/crawling-vs-indexing-robots-txt-sitemap-xml.png
---

Sometimes you need to prevent a site, page or everything at a particular path from showing up in Google search. I've heard people say to just disallow the page in robots.txt file. This is actually incorrect.

If you simply add a disallow to your robots.txt file, then it is true that Google will not "crawl" that page, but if you have that page in your sitemap.xml file then the page will still be submitted to the Google Index.

You will find your disallowed content in Google search.

For example
-----------

Scenario:

*   I have created a view with client logos and I don't want each node to be seen. I only want the nodes to appear inside my view.
*   The nodes are at a /clients path.

In this scenario, I will do just one thing:

*   Add noindex to the page

A common error I've seen is for people to add:

*   disallow: /clients to robots.txt

I've seen people perform this update and think this will prevent the page from showing in Google search. However, if you are using the sitemap.xml module to create your sitemap.xml file, chances are you also have it set to auto submit your index to Google and possibly other search engines.

Crawling vs. indexing
---------------------

You have prevented Google from _crawling_ your site, but you may have just allowed your sitemap module to autosubmit the url to be indexed. It will not crawl further after this link, but it has still been indexed.

_Note: You should also configure your sitemap.xml module correctly, but that is another topic._

Robots.txt tells Googlebot and other crawlers what is and is not allowed to be crawled; the noindex tag tells Google Search what is and is not allowed to be indexed and displayed in Google Search.

### One step further

This part hurts my brain, but there seems to be consensus that you should _not_ add items you want to prevent from search to your robots file. Instead, you should allow them to be crawled and have a noindex tag on them to then ensure Google knows not to display them.

Development environments
------------------------

On a development server, this is much simpler. You can tell Apache to globally disallow all files. In the Apache httpd.conf file, add this:

`# Globally disallow robots from the development sever  
Header Set X-Robots-Tag "noindex, noarchive, nosnippet"`

You can also do this in an htaccess file to add this header in a more granular scenario.

What do you think? Agree, disagree, or duh? :)

_\[Image by  [giorgio raffaelli](https://www.flickr.com/photos/iguanajo/277209483)\]_