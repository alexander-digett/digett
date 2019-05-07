---
title: 'Regression Testing with Wraith'
templateKey: blog-post
date: 2013-08-29T13:07:25.000Z
category: 
  -Development, Tools of the Trade
alias: regression-testing-wraith
summary: > 
 Regression testing is used to detect the introduction of new software bugs, or regressions, in existing areas of a system after changes have been made to them. These changes may include enhancements, patches and configuration changes.
author: Jonathan Dale
image: /assets/1282931_52617444.png
---

Regression testing is used to detect the introduction of new software bugs, or regressions, in existing areas of a system after changes have been made to them. These changes may include enhancements, patches and configuration changes. The intent of regression testing is to ensure that a change does not introduce new faults and is generally used to verify that a change in one part of the system does not adversely affect other parts of the system.

Why is it important
-------------------

Regression testing allows for the early detection of issues as part of the change process and can prevent new issues from being pushed to production without detection. Automated regression testing can also expedite the process and can help to detect minor changes which may otherwise go undetected. It is common for changes to Drupal modules or themes to have some impact throughout a site. Minor changes such as pixel differences and minor content updates, such as punctuation differences, are easily missed but can have adverse effects on the site.

What is Wraith
--------------

[Wraith](https://github.com/BBC-News/wraith) is a screenshot comparison tool created by developers at BBC News. Wraith uses either PhantomJS or SlimerJS to create screenshots of different environments and then creates a diff to the two images with changes highlighted in blue.

How are we using it?
--------------------

While our current usage of Wraith is limited and non-automated, we have already found it to be very useful for our processes. Wraith allows us to quickly compare the impact of theme and module updates by doing site-wide comparisons which identify any changes to text or layout on the site. As part of our initial usage, we have confirmed that it does detect changes as small as the addition or removal of punctuation and as large as the addition or removal of an image to a page. We have also found that it detects changes to the color of an element, which can aid in locating unintentional theme changes. We are currently working on more automated usage of Wraith to provide better integration with our internal processes with an eye towards more rapid management of changes.

What about you?
---------------

Have you used Wraith or something similar as part of your change process? How critical is regression testing to your organization? Please let us know. \[Image: [lusi](http://www.freeimages.com/photo/i-o-session-ii-lost-bits-3-1242069)\]