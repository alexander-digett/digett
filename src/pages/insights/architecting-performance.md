---
title: 'Architecting Performance'
templateKey: blog-post
date: 2013-07-02T17:10:02.000Z
category: 
  -Drupal
alias: architecting-performance
summary: > 
 One of the chief complaints from new Drupal users tends to relate to performance. Anyone attempting to run modern web applications will often find that they can only handle a small amount of traffic before the server and the site begin to collapse.
author: Jonathan Dale
image: /assets/1397111_44698680-small.jpg
---

One of the chief complaints from new Drupal users tends to relate to performance. Anyone attempting to run modern web applications will often find that they can only handle a small amount of traffic before the server and the site begin to collapse.

Drupal Caching
--------------

At the most basic level of caching, Drupal will cache objects such as nodes, menus, blocks and tokens using MySQL tables. While this does provide some performance enhancements for low traffic sites, it does not establish a system of success for dealing with large amounts of traffic.

In some cases, this can be resolved by throwing more resources at the problem, however, this tends to become expensive and you will eventually run out of physical resources. When this happens, it's time to begin using tools designed to provide resource caching and improve performance. While each of these tools can be used for any web application, we will focus on their usage as it pertains to Drupal.

Memcache
--------

Memcache provides a memory-based object cache which Drupal can utilize to enhance performance and reduce the number of requests sent to your MySQL server. By default, most Memcache installations utilize a single daemon to process requests which is not ideal for Drupal.

The recommended configuration for Drupal is to have a Memcache daemon for each cache table within the drupal database. This allows for further tuning of each Memcache daemon and prevents unnecessary cache resets for unrelated data.

Varnish
-------

Varnish provides Drupal with a page cache that can be either disk or memory based depending on your individual needs. In our testing, memory based caching does provide improvements, however, if you are in an environment where disk reads/writes are less costly then this can work for you as well.

In our testing, we have found that Varnish caching can increase the number of simultaneous requests your site can serve from less than ten to more than a thousand depending on your environment. We typically saw network bottlenecks long before the server experienced any kind of delay in processing requests.

APC
---

PHP is a dynamic scripting language which means that each request to a PHP script requires that the code be parsed, compiled, and then executed to complete a single request. APC, or Alternative APC Cache, provides a PHP Opcode caching plugin which reduces the number of parsing and compilation requests by storing the compiled version of a PHP script and executing the stored version on subsequent requests.

APC also provides an object cache similar to Memcache, however, Drupal does not use it for this purpose. The recent release of PHP 5.5 includes the Zend Optimizer+ cache which can also be downloaded for PHP releases as early as 5.2 and may prove to be a better fit as it matures.

What's next?
------------

In future articles, we will take a deep dive into the configuration of each of these tools. We hope you'll join us.