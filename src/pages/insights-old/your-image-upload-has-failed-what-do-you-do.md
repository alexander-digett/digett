---
title: 'Your image upload has failed. What do you do?'
templateKey: blog-post
date: 2011-09-01T15:08:50.000Z
category: 
  -Clients, Tools of the Trade
alias: your-image-upload-has-failed-what-do-you-do
summary: > 
 There are few things quite as frustrating as wanting to upload an image to your site and being unable to do so. While Digett is always here to help our clients, sometimes, you just want to fix things yourself.
author: Valarie Geckler
image: /assets/troubleshoot-image-uploads.png
---

There are few things quite as frustrating as wanting to upload an image to your site and being unable to do so. While Digett is always here to help our clients, sometimes, you just want to fix things yourself.

If you’re having difficulty adding an image to your Drupal site, give the tactics below a quick try.

A few things to keep in mind
----------------------------

When troubleshooting like this, it’s important to be consistent. Flashback to high school science; when experimenting, you only want to change any one variable at a time. If your upload first failed when you were working on the About page, keep using the same About page and the same upload field and the same image for your testing.

1\. Test image dimensions
-------------------------

If you’re uploading an image larger in dimension that the site was expecting, that could potentially cause an error. Even the lower-rung digital cameras on the market can take images that are 3000 pixels wide. A photo that large just doesn’t work on the web. (For reference, your website is likely 960 pixels or less.)

What to do? **Crop your image before you upload it.** If you have a professional photo editing program like Photoshop, great, but free software like [Gimp](http://www.gimp.org/) or [Picasa](http://picasa.google.com/) will work just fine for cropping too.

2\. Try renaming the image file
-------------------------------

One of the weirder causes for image trouble I’ve seen has to do with a sort of file caching on the server level. In other words, the server already had a file named sample.jpg. You have just uploaded a new version of sample.jpg but the old image is what shows as though you never changed anything at all.

Normally, the server gets its head straight quickly, but if you can’t wait, try renaming your file. Instead of sample.jpg, name it sample2.jpg and try things again.

3\. Test file size limits
-------------------------

Depending on your site’s configuration, there may be file size restrictions that are field-based, user-based or site-wide. Right click > Properties (for Windows) or Right click > Get Info (for Mac) on your image to see your file size in KB or MB. File size and image dimension typically go hand-in-hand. If you’ve cropped your image to reasonable dimensions, odds are it will also be a reasonable size, but even then, there could be a file size restriction that’s giving you a tough time.

Take note of the elements on the page where you’re working and any “help text” or “fine print” near the upload field. Also take note of any error messages you receive when your upload fails. Does the site tell you what file size restriction you might be running up against?

Try reducing the file size of your image to see if you can get below the restriction that’s holding you back.

What if those things don’t work?
--------------------------------

Sometimes, despite your very best efforts, you’ll still need to contact us for help. If you do, it’s very helpful if you...

*   Note the specific page(s) and field(s) where you’ve experienced the problem
*   Copy and paste or take a screenshot of any errors you received (We love screenshots!)
*   Send us the image or images you’ve been working with
*   Tell us anything else that may be strange. Does this _only_ seem to happen on the About page? Does the text on the page look strange as well?

The more clues and the more information, the better.

We’re always here to help get to the bottom of the issue, but hopefully the tips above can help you feel more confident that you’ve tried everything before you need to pick up the phone.

### Video tutorial: Uploading an image

Image credit: [René Clausen Nielsen](http://www.flickr.com/photos/shevy_dk/)