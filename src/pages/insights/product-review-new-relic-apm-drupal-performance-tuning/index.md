---
title: 'Product Review: New Relic APM for Drupal Performance Tuning'
templateKey: blog-post
date: 2014-10-07T15:36:12.000Z
category: Development, Drupal
alias: product-review-new-relic-apm-drupal-performance-tuning
summary: > 
 New Relic APM (Application Monitoring) is an amazing tool to help you tune the performance of your Drupal website.
author: JD Collier
image: /assets/newrelic-logo-square_0.png
---

[New Relic](http://newrelic.com/) APM (Application Monitoring) is an amazing tool to help you tune the performance of your Drupal website.

Application Monitoring allows you to trace Drupal performance. You can deep dive into Drupal tuning with analytics on the performance of Modules, Hooks, Views and much more.

I can quickly scan the data to determine which module has the slowest average call time. I can peer into the running website to determine where the roadblocks to performance are coming from.

One of the most useful pieces of data is the average load time for a page and the [Apdex score](https://en.wikipedia.org/wiki/Apdex) for the site. The Apdex is a complex algorithm which measures user satisfaction of application performance / response time.

![](/sites/default/files/screenshot_2014-10-07_10.35.22.png)

There is a mountain of data in this tool, but here are a few highlights that affect Drupalistas the most:

*   Modules that are the most time consuming for the server
*   Which Hooks are consuming the most resources
*   Views that take the most time to run
*   Most time consuming / slowest queries
*   Measure page views as a percentage of total page load times
*   Ajax performance bottlenecks
*   Javascript error analytics
*   Page load statics by browser

The list really could go on and on. You are able to drill into almost any metric to get more detailed information.

![](/sites/default/files/screenshot_2014-10-07_09.57.58.png)

![](/sites/default/files/screenshot_2014-10-07_10.15.43_0.png)

How to get it
-------------

[We love Pantheon for Drupal hosting](/blog/02/25/2014/why-i-love-pantheon-drupal-hosting) and most plans come with New Relic APM. You can also sign up on [newrelic.com](http://newrelic.com/) for their SaaS APM solution.