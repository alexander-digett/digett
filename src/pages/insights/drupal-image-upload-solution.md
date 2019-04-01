---
title: 'Drupal Image Upload Solution'
templateKey: blog-post
date: 2008-01-24T06:00:00.000Z
category: Drupal
alias: drupal-image-upload-solution
summary: > 
 You’re uploading an image to an IMCE field in Drupal. The upload fails over and over again. Having already ensured the image is within the size and type constraints set in IMCE, you set out to double check your access control when you think, "Wait a minute, I know I already have the right permissions because this was working yesterday....wasn’t it?"
author: Luke
image: /assets/post-placeholder.png
---

You’re uploading an image to an IMCE field in Drupal. The upload fails over and over again.

Having already ensured the image is within the size and type constraints set in IMCE, you set out to double check your access control when you think, “Wait a minute, I know I already have the right permissions because this was working yesterday....wasn’t it?”

If you’ve tried everything, and your image still won’t upload, it is possible that something with the image itself is causing the upload to fail.

For example, let’s say the page in question is like the one below. After providing a title and browsing to your image, you click “upload.”

[![Image removed.](/core/misc/icons/e32700/error.svg "This image has been removed. For security reasons, only images from the local domain are allowed.")](/imce/browse "Add image to imceimage")

Nothing happens. Instead of seeing the image appear, the image field has just gone blank and the system seems to be ignoring you. No error messages appear.

[![Image removed.](/core/misc/icons/e32700/error.svg "This image has been removed. For security reasons, only images from the local domain are allowed.")](/imce/browse "Add image to imceimage")

Frustrating, isn’t it?

This happened to us recently when a folder containing about 400 images was being used to create content and none of the images would upload.

We learned through a process of elimination that the images were themselves at fault.

Here’s how we worked around the obstacle.

Adobe Photoshop CS2 and CS3 have a feature called “Image Processor.”

Step 1: Select the folder which contains your images that are giving you trouble.

Step 2: Create and/or select new folder to save the processed images in.

Step 3: Provide file type settings.

Step 4: Run the process.

When it’s done, you should see your images in the new folder you specified in step 2.

They may look the same. Try uploading your images again and you may find that this solved your problem.