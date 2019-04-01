---
title: 'Isolating a Logo Using Layer Masks'
templateKey: blog-post
date: 2010-01-04T05:56:51.000Z
category: Design, Tools of the Trade
alias: isolating-logo-using-layer-masks
summary: > 
 Not all site designs are easy; some, you have to work for. And by some, I mean all of them. Recently, I had to work out a problem with a site showcasing logos on a black background. The problem was the logo files I had were JPEGs of each on a white background. Laying out these white rectangle logos on the black background just wasn't working for me—not a good look. So I came up with a Photoshop method to cut the logos away from their white backgrounds, thus making them usable on any color background. I assure you this method works better and more often than other traditional isolation techniques, magic wand included.
author: AMac
image: /assets/post-placeholder.png
---

Not all site designs are easy; some, you have to work for. And by some, I mean all of them.

Recently, I had to work out a problem with a site showcasing logos on a black background. The problem was the logo files I had were JPEGs of each on a white background. Laying out these white rectangle logos on the black background just wasn't working for me—not a good look. So I came up with a Photoshop method to cut the logos away from their white backgrounds, thus making them usable on any color background. I assure you this method works better and more often than other traditional isolation techniques, magic wand included.

Here's how I do it
------------------

1) Open the logo file in Photoshop and create a **Duplicate Layer**.

![Image removed.](/core/misc/icons/e32700/error.svg "This image has been removed. For security reasons, only images from the local domain are allowed.")

2) **Desaturate** the duplicate layer.

![Image removed.](/core/misc/icons/e32700/error.svg "This image has been removed. For security reasons, only images from the local domain are allowed.")

3) **'Select all'** of the duplicate layer and **Copy** it to your clipboard. Make sure to then **Deselect**, this is important.

![Image removed.](/core/misc/icons/e32700/error.svg "This image has been removed. For security reasons, only images from the local domain are allowed.")

4) Next, add a **Layer Mask** to the duplicate layer. Choose **'Reveal All.'**

![Image removed.](/core/misc/icons/e32700/error.svg "This image has been removed. For security reasons, only images from the local domain are allowed.")

5) **Option-click** (PC: Alt-click) on the **Layer Mask Thumbnail**. This will allow you paste right into the layer mask itself. **Paste** from your clipboard. Deselect.

![Image removed.](/core/misc/icons/e32700/error.svg "This image has been removed. For security reasons, only images from the local domain are allowed.")

6) **Command-click** (PC: Ctrl-click) on the **Layer Mask Thumbnail**, which will select all white pixels. **Invert** your _selection_ so that you've got just the logo pixels selected.

![Image removed.](/core/misc/icons/e32700/error.svg "This image has been removed. For security reasons, only images from the local domain are allowed.")

7) Next, drop down to your original layer by clicking on the layer's thumbnail, making it your active layer.

![Image removed.](/core/misc/icons/e32700/error.svg "This image has been removed. For security reasons, only images from the local domain are allowed.")

8) Make a new **Layer via Copy** and you've isolated the logo.

![Image removed.](/core/misc/icons/e32700/error.svg "This image has been removed. For security reasons, only images from the local domain are allowed.")

9) This method may produce some logos with unwanted transparency, in which case you should duplicate the isolated logo 2 or 3 times, until it appears opaque. Then, merge these duplicate layers into one, solid, isolated logo.

In the End
----------

That should do the trick. Using layer masks is an effective and efficient method to isolate logos from white backgrounds for use on any other background color. Here are some examples of logos created using this method, the [the Boerne Wild West Day site](http://www.boernewildwestday.com/sponsors).