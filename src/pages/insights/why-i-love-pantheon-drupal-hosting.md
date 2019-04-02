---
title: 'Why I Love Pantheon for Drupal Hosting '
templateKey: blog-post
date: 2014-02-25T14:55:29.000Z
category: 
  -Drupal, Tools of the Trade
alias: why-i-love-pantheon-drupal-hosting
summary: > 
 We have been using Pantheon for several months now and I am ready to declare it a strong winner for us. If you haven't experienced it, Pantheon is a hosting platform that is optimized for Drupal.
author: JD Collier
image: /assets/1004449_627382883946367_495381272_n.jpg
---

We have been using [Pantheon](https://pantheon.io/) for several months now and I am ready to declare it a strong winner _for us_. If you haven't experienced it, Pantheon is a hosting platform that is optimized for Drupal.

I've used so many hosting platforms — from tiny GoDaddy hosting plans to beefy dedicated servers with Rackspace Cloud Sites and Rackspace Cloud servers in betweeen. I love several things about Pantheon and that is what I wanted to focus on today.

Time-savers
-----------

### Dev -> Test -> Live

![](/sites/default/files/dev-test-live-environments.png)Every site on Pantheon gets a Dev, Test and Live environment.

You edit your files and database and then migrate with a click into the Test environment. Then you can migrate to the Live environment.

At each stage, you can choose if you want to migrate only files or if you want to also migrate the Drupal database.

Of course, I can do this on my own on a server where I have command line and use Drush. It is simple with Drush as well, but it is not quite so point and click easy.

The biggest benefit comes from zero time setting up a server. I just fill out a wizard to create the new site and environments and the rest comes with it.

### Git version control

Git is baked in...with flexibility to use SFTP as well.

![](/sites/default/files/git-sftp-combined_0.png)

I can add theme files and modules through Git workflow and quickly add them via SFTP; Pantheon inserts the files into the Git workflow for me. I love this!

When I upload a file with SFTP, Pantheon sees it immediately and asks for the commit message to add the files into Git. Then, I can migrate the code from Dev to Production.

### Status checks

Pantheon automatically runs a number of status checks on your site. This is much more in-depth than a Drupal Status Report. It reports on Database usage, a few best practices in Drupal setups, caching (Pantheon uses Varnish), modules best practices, Views caching status, and error log warning.

The great part about this is the fact that they aren't just warnings. Each warning lists instructions and recommendations on fixes to your site.

![](/sites/default/files/status-checks.png)

### Backups

Backups are a simple click and they begin daily backups for Drupal, the file system and the database. A click or two — that is all it took.

Drawbacks
---------

I've only run into two issues so far with Pantheon.

**First**: Their Apache Solr implementation. The way Pantheon has Solr set up, you aren't able to modify the stopwords.txt files and a couple of other Solr settings. I can't imagine this being a large issue for 99% of the sites out there, but I have one where the word "will" is included in the stopwords.txt file that cannot be edited. This website has a lot of information about "Wills" (like after you die, you leave a will). Solr stop words help prevent common words from being searched like "I will" (used as a verb). Pantheon support says they have a solution for this issue coming in a few months.

**Second**: Pantheon's Varnish implementation is especially aggressive. This makes sites very responsive and that's awesome. On the downside, those outlier scenarios where you need customized data based on a cookie value require a little extra effort. They do have a few ways to [bypass cache](https://pantheon.io/docs/articles/sites/varnish/), but they don't work for all scenarios. I have a site where I had to implement [ESI](https://www.drupal.org/project/esi) (Edge Side Includes). ESI seems to be working, but we're still testing.

**Third**: Price. There is too much of a jump in price between the $25 plan and the next plan at $100/month. If you have a super simple site that happens to need SSL, you have to bump up to the $100 plan and then also pay $30 more for static IP, which can be too much for some clients.

Conclusion
----------

I expect a few issues in any server situation, and I love so many features of Pantheon that the few issues are not show-stoppers.