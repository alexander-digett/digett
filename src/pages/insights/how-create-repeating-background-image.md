---
title: 'How to Create a Repeating Background Image'
templateKey: blog-post
date: 2011-07-19T15:07:30.000Z
category: 
  -Design, Development, Tools of the Trade
alias: how-create-repeating-background-image
summary: > 
 Often times in web design we have the need to create a repeating background image. This can be simple or fairly complex depending on the type of background that needs repeating. I've developed a method for creating such images with ease.
author: AMac
image: /assets/repeating-background-image.png
---

Often times in web design we have the need to create a repeating background image. This can be simple or fairly complex depending on the type of background that needs repeating. I've developed a method for creating such images with ease.

**1)** Choose the type of background you want to use. In my experience, subtle textures work best, like concrete, paper or fabric. A great online resource for textures is [cgtextures.com](http://www.textures.com), where some images have already been made to repeat.

**2)** In Photoshop, take a square selection of the part of the image you want to repeat. I usually keep my selection between 200 and 300 pixels square. If you go much larger, you've got to begin considering file size and load time. If you go smaller, it makes it more difficult to repeat seamlessly.

![square-selection.jpg](/sites/default/files/square-selection.jpg)

**3)** Copy and paste your selection into a new document of the same size. If your selection is 300 pixels square, so should be your document. Make sure you paste on a new layer above the background layer.

**4)** From the Filter menu, choose Distort --> Shear. A window should pop up with settings for shearing the image.

![distort-shear.jpg](/sites/default/files/distort-shear.jpg)

**5)** Click and drag both the top and bottom handles all the way to the right of the white area window. Make sure your undefined areas are set to Wrap Around. Apply the shear by clicking OK.

![shear-settings.jpg](/sites/default/files/shear-settings.jpg)

**6)** Rotate the layer 90 degrees clockwise, by choosing to do so from the Image menu.

![rotate-ninety-degrees.jpg](/sites/default/files/rotate-ninety-degrees.jpg)

**7)** Apply the same exact shear again, from the Filter menu. Photoshop will store your last used filter at the top of the drop-down, for easy access. Command + F will also do the trick.

**8)** This is the most important step. Take your time to carefully clone stamp out the horizontal and vertical lines created by the shear. Depending on the chosen texture, the lines maybe be very apparent, or very subtle. Either way, when you're finished, they shouldn't exist. The better job you do with your clone stamp, the better the image will repeat.

![clone-stamp.jpg](/sites/default/files/clone-stamp.jpg)

**9)** You're done! At this point you may want to resize the image, play with color, levels, contrast, etc. Ultimately you'll want to save this to use online.

![repeating-image.jpg](/sites/default/files/repeating-image.jpg)

This method will work for most of your repeating image needs, as it has for me over the years. There can be some tricky applications, but taking your time to select the right area, and precise use of the clone stamp can tackle just about any image.

### Related Articles

*   [Photoshop Tutorial: 3D Text in Web Design \[Video\]](/insights/photoshop-tutorial-3d-text-web-design-video)
*   [How to Make a Cinemagraph: Tutorial](/insights/how-make-cinemagraph-tutorial)
*   [Isolating a Logo Using Layer Masks](/insights/isolating-logo-using-layer-masks)