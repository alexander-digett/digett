---
title: 'Font sizing using rem on Drupal 7 themes'
templateKey: blog-post
date: 2012-03-07T18:39:16.000Z
category: Development, Drupal
alias: font-sizing-using-rem-drupal-7-themes
summary: > 
 When it comes to font sizing on a website, the debate between accessibility and control rages on. The control camp prefers px font-sizes to maintain the look of the site, and the accessibility crowd prefers em to allow font scaling in the browser. Most Drupal 7 base themes are built using ems but since the em unit is based on the parent elements font-size, dealing with the compounding of ems in nested elements can be a real pain for front-end developers. When building a list it’s likely that you’ll have an &lt;li&gt; nested in another &lt;li&gt;. If you’ve declared the &lt;li&gt; font-size of 1.2em then the inner &lt;li&gt; will be 1.2emX1.2em, and so on an so on. The math can get complicated and frustrating.
author: Art Williams
image: /assets/font-size.jpg
---

When it comes to font sizing on a website, the debate between accessibility and control rages on. The control camp prefers px font-sizes to maintain the look of the site, and the accessibility crowd prefers em to allow font scaling in the browser.

Most Drupal 7 base themes are built using ems but since the em unit is based on the parent elements font-size, dealing with the compounding of ems in nested elements can be a real pain for front-end developers. When building a list it’s likely that you’ll have an <li> nested in another <li>. If you’ve declared the <li> font-size of 1.2em then the inner <li> will be 1.2emX1.2em, and so on an so on. The math can get complicated and frustrating.

A new player in the game is the rem (and I'm not talking about the band). It functions very similarly to em, except its unit is always based on the root font-size declaration on the html element. This means that the math is simplified dramatically. I was first introduced to the rem a couple of months ago in [an article by Jonathan Snook](http://snook.ca/archives/html_and_css/font-size-with-rem) and it intrigued me enough that I used it on the most recent site we built here.

My Take on Rems
---------------

After using rems on a site build I’m a big fan. The reduced complexity makes the development of the site substantially improved. The only real downside is that font-size declarations need to be made twice due to browser incompatibility with IE8 and below.

As Snook mentions in his article, you need to declare the font-size in px first, and again in rem to accommodate IE. This allows IE9 and other browsers to use font scaling while older IE version just resort to page zooming. To me this double declaration isn’t a big deal because I would typically want to comment the em declaration with the font size in pxs anyway.  Although in Drupal 7 themes you may need to go through all the css files and the r in front of em where the theme has already used em.

Implementation Tips
-------------------

Here are a few tips for anyone wanting to try using rem in your font-size declarations:

*   Define your html element with font-size as 62.5% which is 10px. The advantage of this setup is that the math is even simpler since 1 rem unit equals 10px.
*   Define your body font-size as the base font size for your site. For example 1.4rem = 14px. This declaration reduces the number of overrides you need to make to only the exceptions. Plus you can adjust the base font-size without effecting the heading sizes.
*   If you chose to define your base font-size on the <html> element instead of the body, [PXtoEM.com](http://pxtoem.com) is very helpful when making the computations necessary.
*   I continued to use em for line-heights and other spacings in order to maintain the proper spread between elements even if the font-size later changed.

The Decision
------------

If you get frustrated by the complexity of nested ems and want to maintain the accessibility to scale fonts in the browser then I highly recommend trying rems. If you just want a pixel perfect site and force users to zoom the page instead of just the font, use pxs for your font-size declarations.

Any other Drupaler who tries or has already tried rems, let me know about your experience in the comments below.

_Image:_ [jeltovski](http://www.morguefile.com/creative/jeltovski)