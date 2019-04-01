---
title: 'Drupal Mobile: How to create a Drupal mobile site without using Mobile Tools'
templateKey: blog-post
date: 2011-08-18T21:09:55.000Z
category: Development, Drupal, Mobile
alias: drupal-mobile-how-create-drupal-mobile-site-without-using-mobile-tools
summary: > 
 Last year, we talked about using the Mobile Tools module to create mobile sites in Drupal.  We use and appreciate Mobile Tools, but we recently had a requirement that made us look into other options. We needed one domain to serve two different mobile sites. Mobile Tools works well with one mobile site, but we didn't see a way to serve two mobile themes.
author: JD Collier
image: /assets/5398431848_c27f07a003.jpg
---

[Last year](/insights/mobilize-your-drupal-site-mobile-tools), we talked about using the Mobile Tools module to create mobile sites in Drupal.  We use and appreciate Mobile Tools, but we recently had a requirement that made us look into other options. We needed one domain to serve two different mobile sites. Mobile Tools works well with one mobile site, but we didn't see a way to serve two mobile themes.

For this client, we were already using [ThemeKey](https://www.drupal.org/project/themekey) and we knew the ThemeKey module can test for mobile devices. Out-of-the-box, ThemeKey tests by platform. We didn't want a rule for every device targeted, we needed an easier way to target mobile browsers.  We added [MobileKey](https://www.drupal.org/project/mobilekey) to the mix and now we can test for desktop, mobile or a specific platform.

Note: We also could have paired [Wurfl](https://www.drupal.org/project/wurfl) with ThemeKey to test for mobile browsers, but we don't have sufficient access to this particular server to add Wurfl's requirements (Pear::Log library).

Mobilizing, at a glance with ThemeKey
-------------------------------------

1.  Install ThemeKey
2.  Install MobileKey
3.  Install mobile theme (We are using [Fusion Mobile](https://www.drupal.org/project/fusion_mobile))
4.  Configure theme switching (see example below)
5.  Style mobile theme to appropriate design

Here are a few thoughts when using ThemeKey:
--------------------------------------------

*   ThemeKey doesn't handle domain redirection, if you need that.
*   We noticed a need to add the code to remove the address bar in the mobile browser.
*   You will need to test for desktop and mobile separately. In my screenprint of the rules, you will see that I've used !(not) desktop, this is only for development. I'll switch to test for mobile.

![themekey.gif](/sites/default/files/themekey.gif)

You can see from [one of my older posts](/insights/impressions-rejoining-drupalverse), that I have recently returned to Drupal after several years away ... I am not an expert. What do you think about my approach? Would you do anything differently? I'd love your input.

### Related posts

*   [Mobile Website Design Best Practices: The Ugly, The Bad, and The Good](/insights/mobile-website-design-best-practices-ugly-bad-and-good)
*   [Slaying The Mobile Website Dragon: Is Your Website Ready for Mobile?](/insights/slaying-mobile-website-dragon-your-website-ready-mobile)

photo by [ciccioetneo](http://www.flickr.com/photos/cicciofarmaco/)