---
title: 'Drupal 7 Almost Ready for San Antonio SEO Prime Time'
templateKey: blog-post
date: 2011-02-21T21:33:55.000Z
category: 
  -Analytics, Drupal, Inbound Marketing, SEM and SEO
alias: drupal-7-almost-ready-san-antonio-seo-prime-time
summary: > 
 The Drupal content management system (CMS) is an SEO powerhouse, a fact undisputed by our San Antonio and other US-based clients. Drupal 7, the latest major release, has even more appeal, from its improved user interface to new powerful features that further enhance Drupal’s regard as a capable web application framework.
author: Mark Figart
image: /assets/seo.png
---

The [Drupal](https://www.drupal.org/) content management system (CMS) is an SEO powerhouse, a fact undisputed by our San Antonio and other US-based clients. Drupal 7, the latest major release, has even more appeal, from its improved user interface to new powerful features that further enhance Drupal’s regard as a capable web application framework.

Fortunately, Drupal 7 is finally almost ready for primetime as it relates to search engine optimization, and it shouldn’t be long before we can fully adopt it for the bulk of our San Antonio inbound marketing projects. Because most of work we do involves a heavy dose of ongoing website search engine optimization (SEO), we rely heavily on a handful of Drupal contributed modules that together comprise a powerful SEO toolbox.

Following is a list of those “must-have” SEO modules that are just about guaranteed to be in use on every project. There are a number of others that we find useful from time to time, but may not be considered indespensible. I’ve indicated which modules are available for D7 and which are not, along with my opinion about the implications of any given missing module.

*   [Path](https://www.drupal.org/documentation/modules/path) - Turns ugly, non-friendly URLs into friendly, keyword-optimized URLs. For example, a URL like  
      
      
      
    www.digett.com/node/55  
      
      
      
    can be changed to  
      
      
      
    www.digett.com/about-us/job-opportunities/web-and-interactive-developer.  
      
      
      
    The path is about as important as any single element of “content” on a page, and the Path module provides an elegant means of leveraging a URL for the benefit of your SEO effort.  
      
      
      
    This module is part of Drupal core, and is therefore available in Drupal 7.

*   [Path Auto](https://www.drupal.org/project/pathauto) - Automatically assigns a path derived from the title of the node. Let’s say you write a blog post called “[San Antonio Web Design Firm Leverages Inbound Marketing for Clients](http://www.digett.com/)”. If you’re using the Path Auto module, Drupal will automatically assign a path derived from this title when you first save it, so you’ll end up with a URL that looks something like this:  
      
      
      
    http://www.digett.com/san-antonio-web-design-firm-leverages-inbound-marketing-clients  
      
      
      
    You could do this on your own, so it’s not absolutely critical to have this module to perform well in search. But it does save substantial time, and it avoids failing to address this task altogether.  
      
      
      
    This module is available in a beta release for Drupal 7, so if you’re feeling adventurous you could give it a whirl. But I’d check the issue queue thoroughly to avoid module remorse.

*   [Page Title](https://www.drupal.org/project/page_title) - Page Title allows you to separate the visible page title used to title a page on your website from the HTML page title that appears in the browswer’s title bar (as well as in Google search results). We could not live without this one. Let’s say you deploy a page such as this one that targets the keywords (San Antonio SEO). You may believe that displaying the title “Drupal 7 Not Ready for San Antonio SEO Prime Time” is appropriate for users who find the content through search. However, you may recognize that with a longer page title—one that might not look to good if displayed on the page—you could squeeze in a couple more related keywords. Just as we’ve done for this page, the Page Title module would allow you to specify a more meaningful title that would help you perform better for searches that include those additional keywords. We chose to go with “Content Management Systems: What San Antonio should know about Drupal 7 search engine optimization (SEO)”.  
      
      
      
    This module is available for Drupal 7 in a beta release.

*   [Global Redirect](https://www.drupal.org/project/globalredirect) - The Global Redirect module lends a capable hand toward avoiding issues related to duplicate content. None of the scenarios are particularly sexy, but without this module doing its thing, you could suffer some SEO disappointments that could prove very difficult to troubleshoot and resolve.  
      
      
      
    This module is available for Drupal 7.

*   [Path Redirect](https://www.drupal.org/project/path_redirect) - Path Redirect is a super handy module that brings the utility of 301 redirects into the administrative interface. Without it, one would likely resort to creating redirects in a site’s htaccess file, and would be prohibitive for the mortal non-techie type. A likely need for a redirect is when you need to move content from one URL to another. Perhaps the original URL for the content was weak from a keyword perspective. In Drupal, this is not a problem, as you can easily change the URL for a given page. But if the page has already been indexed by Google, you need to (1) help users still find your content even if they click on an out-of-date search result, and (2) help Google make the appropriate correction. The Path Redirect module has you covered on both counts.  
      
      
      
    This module is available for Drupal 7 in a beta release.

*   [Nodewords](https://www.drupal.org/project/nodewords) - Nodewords lets you create custom meta descriptions on a page-by-page basis. Meta descriptions are an important element for keyword inclusion, and also show up as the descriptions for links returned in a Google search. As far as on-page SEO is concerned, I would order this second in priority only behind the Path module.  
      
      
      
    This module is, as of Drupal 7, being replaced by the [Meta Tags](https://www.drupal.org/project/metatag) module, which is not yet released. This is a deal breaker for us, and it’s unlikely we’ll want to embrace D7 for for a typical inbound marketing gig until it becomes available.

*   [XML Sitemap](https://www.drupal.org/project/xmlsitemap) - The XML Sitemap module creates a standards-compliant XML file that helps search engines intelligently crawl and index a website. It adds another layer of management to an already complicated SEO process, and sometimes I question the value of having a sitemap. There are some cases when it is indispensable, and other uses may be categorized as edge cases. But in 9 out of 10 cases we deploy it for the fine-grained control it provides.  
      
      
      
    This module is available for D7.

*   [Google Analytics](https://www.drupal.org/project/google_analytics) - Hooking a Drupal website up to Google Analytics is a breeze with the Google Analytics module. This avoids having to drop script in to one or more template files, which means that those most interested in seeing the analytics reporting (SEO strategist, content specialists, etc.) can actually perform the task of integrating the analytics profile.  
      
      
      
    This module is available for D7.

*   [Robots.txt](https://www.drupal.org/project/robotstxt) - Inclusion as a module to benefit SEO could be debated, but for an actively managed website, it’s hard to debate the need to prevent some content from being indexed. Many Drupal nodes are never intended to be displayed on their own, and sometimes content is reserved for those who have met special criteria (swapping a name and email address for the privilege to view a video, for example). In these cases, if we don’t tell Google not to index a given page, then there’s a good chance that eventually it will be.  
      
      
      
    This module brings maintenance of the robots.txt file to the administrative interface. Without it, you’d have to whip out your favorite FTP client to make updates, but for a rapidly-changing website this can break the workflow considerably, particularly when a content manager has to ask for help from a technical resource).  
      
      
      
    This module is available for D7.

As you can see, the only module that is not available for Drupal 7 in at least a beta release is the Meta Tags module, formerly known as Nodewords. There is an apparent [workaround](https://www.drupal.org/project/metatags_quick) for the short-term, but I’m hesitant to put my faith in it. It likely falls short of addressing some important aspects of what Nodewords does in D6. And once Meta Tags becomes available for D7, it seems to me that someone is going to have a good bit of work to do porting over meta descriptions should they decide to make use of the more robust module.

Several of these modules are also available only in a beta version. I can stomach a beta module or two when necessary, but to install several in one fell swoop for a client that’s demanding perfection seems risky. I’d recommend weighing carefully the potential cost of problems that could result before installing and making use of them.

Finally, while Drupal SEO modules have made progress, there are a number of other modules out there that are often just as important as the SEO modules can be that still are not ready for D7 (e.g., [Views](https://www.drupal.org/project/views)). Until these are in full release, I think you’ll see the majority of enterprise drupal deployments sticking with D6.