---
title: 'A Developer&#039;s Perspective on Mobile Websites, part 3'
templateKey: blog-post
date: 2011-09-23T15:11:07.000Z
category: Development, Drupal, Mobile
alias: developer-s-perspective-mobile-websites-part-3
summary: > 
 For the last two weeks, I've talked about A Developer's Perspective on Mobile Websites (part 1 | part 2). This week, I'd like to close out by going through a couple of the decisions I make for each mobile site I make:
author: JD Collier
image: /assets/mobile-web-design2_0_0.png
---

For the last two weeks, I've talked about A Developer's Perspective on Mobile Websites ([part 1](/insights/developer-s-perspective-mobile-websites-part-1) | [part 2](/insights/developer-s-perspective-mobile-websites-part-2)). This week, I'd like to close out by going through a couple of the decisions I make for each mobile site I make:

*   Which device should I target?
*   Should I create a native app or a mobile site?

Which device to target
----------------------

In my opinion, you should always create your application based on your audience. In most cases, this means iOS and Android are required. Should you also target Blackberry or WebOS? To make this decision, I look at their web analytics — do they have a "meaningful" percentage of visitors on Blackberry?

This question usually comes up when a client is using a device that is less common than their audience. If I have a client on Blackberry, but their web analytics data looks like they may be the only one visiting their site from a Blackberry, I try to encourage the client to focus their budget on the target audience (admittedly not always successfully).

With iOS and Android, I haven't had issues with OS versions so far since they are both running Webkit browsers. With Blackberry, it can be tricky because you need to figure out if you will target Blackberry versions earlier than 6. Blackberry didn't adopt Webkit until version 6, so you will need to do more testing for 4 or 5 devices. I find it helpful to refer to [Blackberry Developer documentation on choosing the target OS version](http://developer.blackberry.com/devzone/appworld?).

One minor point about Android. I have encountered a few differences in HTC's Android web browser. They added a few features that can change default zoom of the page, for example. If possible, try to find an HTC device for testing. I mention this because I personally use the HTC Inspire and my web browser will often look a little different than other Android devices.

Native Application or HTML Mobile Web Site
------------------------------------------

Here are the big factors to consider:

*   Native apps are more costly; HTML is much easier and faster to develop for multiple platforms.
*   Mobile Web Sites will not be in an App Store.
*   Native apps can be set up to handle offline access better than a web app. Mobile websites depend more on a constant internet connection. You can set up much smarter offline handlers with a native app.
*   Native apps can have much deeper access and integration with the device.
*   Native apps can often have better performance since you can avoid HTML/JS rendering overhead. As devices become faster, this is becoming less and less important.
*   \[my opinion\] A mobile website is SO much easier to program than a native app. I can't specialize in iOS, Android and Blackberry development differs — but I can easily specialize in how to treat a mobile website across platforms, just like I've handled multiple browsers for years.

What else?
----------

What have I missed in these three blog posts? I would love to hear additional thoughts on this topic. Are there considerations, coding practices, Drupal modules that help you with Mobile Development? Please share.

### Related Articles

*   [Slaying The Mobile Website Dragon: Is Your Website Ready for Mobile?](/insights/slaying-mobile-website-dragon-your-website-ready-mobile)
*   [Drupal Mobile: How to create a Drupal mobile site without using Mobile Tools](/insights/drupal-mobile-how-create-drupal-mobile-site-without-using-mobile-tools)