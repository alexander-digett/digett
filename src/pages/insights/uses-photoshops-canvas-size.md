---
title: 'Uses for Photoshop&#039;s &quot;Canvas Size&quot;'
templateKey: blog-post
date: 2009-10-27T19:52:56.000Z
category: Tools of the Trade
alias: uses-photoshops-canvas-size
summary: > 
 I'm constantly finding better ways to do things, ways to create a smoother and more efficient work flow. Recently, I've had two epiphanies relating to Photoshop's Canvas Size.
author: AMac
image: /assets/post-placeholder.png
---

I'm constantly finding better ways to do things, ways to create a smoother and more efficient work flow. Recently, I've had two epiphanies relating to Photoshop's **Canvas Size**.

Photo Editing
-------------

A few weeks ago, I took some senior portraits for a friend; the results were pretty good, overall. I thought one particular image would look great in black and white, so I dropped the original file into Photoshop and achieved the desired effect after quite a few edits. My last order of business was to give the image an interesting crop, so I grabbed the crop tool and squared the photo to 5x5.

![Image removed.](/core/misc/icons/e32700/error.svg "This image has been removed. For security reasons, only images from the local domain are allowed.")The square, black-and-white image was a hit—so much so that she's considering using the image in her graduation invitations. Awesome! But there is a small problem: it's not so easy (or cheap) to get 25, odd-sized prints at your local photo lab. Wouldn't it make more sense as a standard size, perhaps 5x7?

So, I opened the saved PSD to make the change. As I suspected, I couldn't just add two inches to the width of the image, because there's nothing there—I cut it off. When I cropped, I lost pixels, not to be recovered, never to be seen again.

I could just open the original file again and crop it appropriately, but what about all the work I did on the image? It would take significant time to redo. Bummer.

So, my epiphany today is that, in the future, I need to use **Canvas Size** to crop images, not the crop tool.

Changing the canvas size simply changes the window through which you see the image. It's the same idea as cropping, yet non-destructive. If I had just brought the canvas in two inches to "crop" the image square, I could have just as easily moved the canvas out two inches, restoring all my work in a nice, 5x7 format.

Web Design
----------

![Image removed.](/core/misc/icons/e32700/error.svg "This image has been removed. For security reasons, only images from the local domain are allowed.")Standard page width for any website these days is anywhere from 900 to 960 pixels (px), because the majority of users don't have screens that will show content any wider. I usually design at a width of 960 px. However, for the purposes of a mock-up, I have to design what is shown outside of 960 px for those users who do have larger screens.

In the past, I started with a Photoshop document at 1,400 pixels wide and then would do the math to figure out where to place guides that would outline a content area of 960 px, centered in the document. This would calculate to a vertical guide at 220px and another at 1,180px. This gives me a content area that is 960px wide and a gutter on each side of 220px.

There is a better way, a "mathless" way—the way I do it now.

Open a new document, and set the page width to 960px. Now, set a vertical guide at 0% and another at 100%. Then, use **Canvas Size** to set the new canvas width to 1,400px. And that's that—same result in about half the time. Another reason to use this method is that you can set the canvas width to whatever you like, and your content will always be centered perfectly, no math involved.