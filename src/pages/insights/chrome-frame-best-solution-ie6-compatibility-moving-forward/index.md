---
title: 'Is Chrome Frame the best solution for IE6 compatibility moving forward?'
templateKey: blog-post
date: 2011-09-08T16:23:30.000Z
category: Development, Drupal, Our Industry
alias: chrome-frame-best-solution-ie6-compatibility-moving-forward
summary: > 
 While every web browser (Firefox, Safari, Chrome, etc.) has it’s programming peculiarities that have to be accommodated when building a website, the bane of every web developer’s existence is Internet Explorer 6. Many web design companies have stopped developing for the ten year old IE6 now that IE 9 has been released. Even Microsoft is trying to kill off IE6.
author: Art Williams
image: /assets/google-chrome-frame.png
---

While every web browser (Firefox, Safari, Chrome, etc.) has it’s programming peculiarities that have to be accommodated when building a website, the bane of every web developer’s existence is Internet Explorer 6. Many web design companies have stopped developing for the ten year old IE6 now that IE 9 has been released. [Even Microsoft is trying to kill off IE6](http://www.ie6countdown.com/).

At Digett, we made the decision earlier this year to exclude IE6 from our list of browsers we support for all projects moving forward. Only 1.7% of internet users in the US still use IE6 (mostly governmental organizations and some large corporations who have internal software that depends on IE6), so we’re not in danger of alienating a huge portion of Internet users. But the issue remains, what do we do with those IE6 users? When they come to a site we build in the future and the site is broken, should we feel bad about that?

Chrome Frame
------------

Google has released a solution that works for all. It’s called [Chrome Frame](http://www.chromium.org/developers/how-tos/chrome-frame-getting-started), named after the Google Chrome web browser. This is a clever piece of software that can be installed inside of Internet Explorer and uses Google’s Chrome browser engine to render websites within IE. Google even figured out a way to make the software installable without Administrator access in Windows, so all of those employees locked into IE6 by their company or organization can still install Chrome Frame.

If the user doesn’t have Chrome Frame installed, a friendly box opens in front of the site instructing the user to install it; less than 60 seconds later, the site reloads looking as beautiful as the web designer intended.

Drupal Chrome Frame Module
--------------------------

From the web developer’s viewpoint this software is a life saver. Now we can drop support for IE6 and code our sites to use Chrome Frame when an IE6 user visits the site.

To make your website work with Chrome Frame you need to add a meta tag to every page on the site ([Instructions from Google](http://www.chromium.org/developers/how-tos/chrome-frame-getting-started)). If you are using the Drupal CMS, like us, there is a great [Chrome Frame module](https://www.drupal.org/project/chrome_frame) that takes care of inserting the meta tag for you and provides some additional options.

The Naysayers
-------------

Of course Microsoft is in the camp of those who advise against Chrome Frame. They express some “security” concerns, but users of the decade-old IE6 are so far behind the security curve already, I don’t think Chrome Frame can make it any worse. Mozilla VP Mike Shaver also came out against Chrome Frame — although his concerns weren’t as much about security as they were about allowing users on such an antiquated browser to stay there.

My View
-------

My preference is that all IE6 users upgrade to IE9, Firefox, Chrome, Safari, etc. and let IE6 die off.

But for those whose companies have locked them in to using IE6, Chrome Frame is the perfect stop-gap solution. It allows for a modern rendering of websites to make them usable. We will likely implement the Chrome Frame module on all future sites so that our IE6 users will have a way to use our modern websites even if they are stuck with IE6.

_Image: [stoon](http://www.freeimages.com/photographer/stoonn-76233)_