---
title: 'Cooking up a Homemade Drupal Theme'
templateKey: blog-post
date: 2009-11-30T20:29:31.000Z
category: 
  -Development, Drupal
alias: cooking-homemade-drupal-theme
summary: > 
 Drupal themers are like cooks. We use common components (contributed modules) as a starting point for successful websites. Cooks also use common components—tried and true ingredients (salt, pepper, garlic, onions, etc.)—as the base for delicious recipes. The fruits of our labors are robust and flavorful. But somewhere in this busy world, saving time has taken priority.
author: Kathryn
image: /assets/post-placeholder.png
---

Drupal themers are like cooks. We use common components (contributed modules) as a starting point for successful websites. Cooks also use common components—tried and true ingredients (salt, pepper, garlic, onions, etc.)—as the base for delicious recipes. The fruits of our labors are robust and flavorful. But somewhere in this busy world, _saving time_ has taken priority. We have decided pre-made is better.

Last week I watched an [Aquia webinar on Drupal theming](http://acquia.com/community/resources/webinars/tips-and-tricks-drupal-theming-90-minute-tutorial). After a year of using contributed themes like [Zen](http://drupal.org/project/zen), [Clean](http://drupal.org/project/clean), and [Foundation](http://drupal.org/project/foundation) as cornerstones for each new site launch, I was exposed to the beauty and simplicity of "Homemade Theming"—building a Drupal theme from scratch.

For the Drupal-ers out there, this might sound like a horrible idea. I think the cause for the skepticism comes from the equation of the words _homemade_ and _scratch_ with _long_, _tiresome,_ and _tedious_. I felt those same suspicions. _Homemade_ might translate to _long_, _tiresome_, and _tedious_ for cooks, but not for themers! In fact, it's just the opposite. **When it comes to themes, "homemade" doesn't mean harder.**

Advantages of Building a Drupal Theme from Scratch
--------------------------------------------------

When building a Drupal theme from scratch, you control every aspect of the HTML and CSS. You control the site's regions, its available variables, and how the entire site is assembled. Content defines design. The most important advantage of a homemade Drupal theme is this: **The themer is in control of the theme.** When using a contributed theme, you work _around_ the pre-packaged code and **the theme controls you**.

How to Build a Drupal 6 Theme from Scratch
------------------------------------------

In the spirit of "cooking up a homemade Drupal theme," here's Digett's 5-ingredient, 5-step recipe for a perfectly delicious, homemade Drupal theme:

### Ingredients

*   1 or more finalized Photoshop comp(s)
*   1 index.html file full of static code, void of php
*   (At least) 1 .css file corresponding to the index.html file
*   1 .info file with a specified name, core, and engine
*   1 Drupal installation

### Preparation

1.  **Create your theme directory**  
    For the sake of this tutorial, let's assume the name of your theme is "recipe." In your Drupal installation, create a directory named "recipe" (using all lower-case letters) in the sites/all/themes folder. This is where the files for your theme will reside.
    
2.  **Photoshop comps to HTML/CSS**  
    The first thing a themer needs to begin making a homemade Drupal theme is a set of finalized design comps. Don't even worry about syncing it with Drupal yet. Build your index file in plain old HTML, just the way you would have circa 1998, but with regards to current standards compliancy and XHTML. :) You'll want to include an external CSS stylesheet in this step as well.
    
    Once your HTML/CSS is in place, you're golden. _This_ becomes the basis for your theme, not Zen, Genesis, Blueprint, or any of the other popular contributed themes.
    
3.  **Structure the .INFO file**  
    Inside the same "recipe" directory, create a file called recipe.info. Three keys are required: name, core, and engine. I'm including a very basic example of how this file should be structured:  
    
    name = Recipe Theme Example  
    core = 6.x  
    engine = phptemplate
    
    Be sure to call your stylesheet using
    
    stylesheets\[all\] = style.css
    
    Refer to this additional information regarding [the structure of the .info file](http://drupal.org/node/171205) if you have questions.
    

1.  **Migrate and modify the index.html file and your stylesheet(s)**  
    Move your existing index.html and stylesheet(s) into the "recipe" theme directory. Rename index.html to page.tpl.php.
    
    Inside every Drupal installation, there's a default page.tpl.php template. It's located in the modules/system directory. I recommend plugging in snippets of code from this file to your theme's new page.tpl.php file. Where there's static content, replace it with php tags from the system's default page.tpl.php template.
    
2.  **Enable your theme**  
    Now, when you navigate to your Drupal installation theme page (admin/build/themes) you'll see your new, custom theme available for enabling. Enable it and set it as the default theme. Continue on working with regions, blocks, [panels](http://drupal.org/project/panels), and [views](http://drupal.org/project/views) as though using a contributed theme.

Why the Homemade Approach Works
-------------------------------

If this is your first time building a homemade theme, this may not seem like a time-saver, but believe me, it is. The real time-saver kicks in when you're just swapping out php variables with old, static HTML instead of trying to re-work existing an existing HTML structure to fit your content.

You can also choose to browser test before modifying the index.html file, reducing extraneous time spent testing after site-build.

Helpful Theming Modules
-----------------------

*   [Drupal for Firebug](http://drupal.org/project/drupalforfirebug)
*   [Skinr](http://drupal.org/project/skinr)
*   [Devel](http://drupal.org/project/devel)

I encourage you to make your own homemade theme from scratch. Why be the frozen dinners of the world when you can be foie gras?!

_If you have questions regarding "Homemade Theming" please [contact me directly](/kathryn-cornelius). I'll be happy to discuss this topic further. Good luck! -Kathryn_