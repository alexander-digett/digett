---
title: 'Google Drops Chrome Frame — What Do We Do Now?'
templateKey: blog-post
date: 2013-06-27T16:14:05.000Z
category: Development, Drupal
alias: google-drops-chrome-frame-—-what-do-we-do-now
summary: > 
 We have depended on Google Chrome Frame to help us direct website visitors on older browsers to modern alternatives. Specifically, we use the Drupal Chrome Frame module to quickly implement this functionality. Google has announced they are retiring Chrome Frame January 2014.  	Now what? I really don't want to do nothing—I don't want visitors on old browsers to just see a broken site. The Drupal community already has an answer (actually, this module has been around for over a year). After some research, we are trying out jReject.
author: JD Collier
image: /assets/jreject.png
---

We have depended on Google Chrome Frame to help us direct website visitors on older browsers to modern alternatives. Specifically, we use the [Drupal Chrome Frame module](https://www.drupal.org/project/chrome_frame) to quickly implement this functionality.

[Google has announced](http://blog.chromium.org/2013/06/retiring-chrome-frame.html) they are retiring Chrome Frame January 2014.

Now what?
---------

I really don't want to do nothing—I don't want visitors on old browsers to just see a broken site.

The Drupal community already has an answer (actually, this module has been around for over a year). After some research, we are trying out [jReject](https://www.drupal.org/project/jreject).

jReject has really nice administration functionality. You can target more than just IE, it has very fine-grained support for other browsers. I can even target out-dated Firefox, Chrome or Safari browsers.

The other benefit of jReject is complete control over the warning message. I can determine which browsers to suggest and can customize the warning message that appears on old browsers.

If you use another method to warn older browsers, I'd love to hear it!

### Further Drupal module reading:

*   [3 great Drupal 7 Modules you may have missed](/insights/3-great-drupal-7-modules-you-may-have-missed)
*   [Digett's Favorite Drupal 7 Contrib Modules](/insights/digett-s-favorite-drupal-7-contrib-modules)