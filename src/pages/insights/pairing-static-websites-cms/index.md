---
title: 'Pairing Static Websites with CMS'
templateKey: blog-post
date: 2014-01-16T13:00:00.000Z
category: Development, Drupal, Tools of the Trade
alias: pairing-static-websites-cms
summary: > 
 I’m going out on a limb by saying we may be on the cusp of a revolution as it relates to how we build, deploy and manage websites. That’s a strong claim, but witness the new Reese’s candy of web technologies: Static files combined with the content management system.
author: Mark Figart
image: /assets/matched_copy.png
---

I’m going out on a limb by saying we may be on the cusp of a revolution as it relates to how we build, deploy and manage websites. That’s a strong claim, but witness the new Reese’s candy of web technologies: Static files combined with the content management system.

Separately each has a certain charming flavor along with any number of nutritional deficiencies. Together, though, they create a compelling recipe for the future of the web.

Static files
------------

[Static websites](https://en.wikipedia.org/wiki/Static_web_page) are built with HTML, CSS and maybe a few javascript files. The websites are “static” because the web server doesn’t _dynamically_ assemble pages before serving them up to a requesting browser.

The files are served up as-is straight from the file system…right from where the webmaster put them after the files were created. There’s no server-side scripting going on, and no database.

![Image removed.](/core/misc/icons/e32700/error.svg "This image has been removed. For security reasons, only images from the local domain are allowed.")

Static websites avoid two big problems that we might face using some other approach.

First, static sites are blazing fast. A web server tasked with serving static sites can run circles around a web server bogged down with executing server-side scripts and making twenty-plus database queries per HTTP request. It’s an all-too-common scenario.

Second, static sites typically don’t expose the vulnerabilities that so often come with a site dependent on execution of scripts like PHP and ASP.net and running on the public Internet. Avoiding this complexity, a static website in and of itself offers hackers little in the way of exploitable security vulnerabilities.

### The downside of static

Unfortunately, static websites don’t lend themselves to the serious work some might demand of, say, a mission-critical sales and marketing tool.

Let’s sum it up this way: Static sites offer no inherent build and management interface. Without providing a way for non-technical resources to manage content, static websites can hardly be taken seriously in some contexts.

Content management systems
--------------------------

[Content management systems](https://en.wikipedia.org/wiki/Content_management_system) have been around and quite functional now for at least a decade. They are, themselves, sophisticated applications that typically run on a site owner’s web server. They were developed as a means to overcome the shortcomings of the static file approach to building and managing sites, and they represent a huge leap forward.

A few benefits that the typical CMS delivers include:

*   User administration
*   User authentication and authorization
*   Flexible permissions schemes
*   Content modeling
*   Content entry and updating
*   Content query and output
*   URL handling

The list is hardly comprehensive. But even if the CMS did little more than what the list describes, you can imagine the immense value wrapped up in these functions alone.

### The downside of the CMS

Despite its value, the CMS comes with its own baggage.

Untuned, a CMS can be disappointingly slow. The traditional solution has been to throw more technology on the stack in the form of high-performance caching mechanisms. In essence, these solutions create, you guessed it, a “static” version of the site, and serve pages from it in response to requests.

This averts having to go through the more resource intensive process of regenerating responses from from the database upon each request. Practically speaking, however, these caching solutions tend to be complex and expensive.

![Image removed.](/core/misc/icons/e32700/error.svg "This image has been removed. For security reasons, only images from the local domain are allowed.")

Performance isn’t the only common complaint of CMS users. Popular stacks like Drupal, Wordpress, and Joomla are often attractive targets for hackers.

To avoid nasty outcomes site owners often endeavor to keep their CMS current with security patches. It’s an effective, although expensive, proposition.

Static websites let us avoid deploying big and complicated applications where every hacker can try to work their tomfoolery.

A match made in Internet heaven
-------------------------------

So what if we could assemble an approach to building, deploying and managing websites with all the benefits of static files — including speed and security — with the robust build and management capabilities of a tool like Wordpress or Drupal?

To be fair, variations of this approach have been in existence for years. But recently I’ve caught glimpses of what is apparently a resurgence of the idea.

The concept is simple: _Build_ a website using a CMS, but rather than deploy the CMS directly on an organization’s public web server, we extract a static representation of the site’s output in the form of a complete file and folder hierarchy. This static version of the site is what gets pushed to the web server.

To conclude
-----------

Call me crazy, but once existing attempts at making this happen mature a little, I believe we will see widespread adoption of the technique. I can’t wait to explore some of the efforts I’ve uncovered thus far.

Is it a panacea? Of course not. Fact is, the most common CMS platforms fall short in [other ways](/insights/how-cms-fails-marketing) that beg a better mousetrap. But this is movement in the right direction, and Rome wasn’t built in a day.

**What do _you_ think of the idea of the static website?**