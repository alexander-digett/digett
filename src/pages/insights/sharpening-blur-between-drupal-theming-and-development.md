---
title: 'Sharpening the Blur Between Drupal Theming and Development'
templateKey: blog-post
date: 2010-04-14T22:14:10.000Z
category: 
  -Development, Drupal
alias: sharpening-blur-between-drupal-theming-and-development
summary: > 
  	Six months ago I wrote a blog post called Cooking up a Homemade Drupal Theme. A visitor recently submitted a comment to my article that's left me contemplating the target audience for that particular post. "Wait," you think—"shouldn't every writer know for whom they are writing before they publish content to a website?" Technically, I agree with this sentiment, but considering the varied interpretations of the skill sets required of a Drupal themer, defining an appropriate Drupal audience can be a real challenge.
author: Kathryn
image: /assets/drupal_blur_0.jpg
---

Six months ago I wrote a blog post called [Cooking up a Homemade Drupal Theme](/2009/11/30/cooking-homemade-drupal-theme "Cooking up a Homemade Drupal Theme"). A visitor recently submitted [a comment](/2009/11/30/cooking-homemade-drupal-theme#comment-59 "a comment") to my article that's left me contemplating the target audience for that particular post. "Wait," you think—"shouldn't every writer know for whom they are writing before they publish content to a website?" Technically, I agree with this sentiment, but considering the varied interpretations of the skill sets required of a Drupal themer, defining an appropriate Drupal audience can be a real challenge.

Where Do You Belong?
--------------------

Over the past few years, Drupal has made tremendous strides toward making the CMS more accessible, both from a programming and end-user perspective. I would argue, however, that on the open-source front, Drupal can be an intimidating platform to tackle unless you clearly fall within one of two categories: themer or developer. But what happens when the two categories unmistakably overlap? If you're affiliated with Drupal, you're presumed to be one of two types: a CSS/HTML-proficient web designer or a server-side, programming ninja. This is the kind of division that's everywhere among the Drupal community. You'll see it firsthand on Drupal.org in their [documentation section](https://www.drupal.org/documentation "documentation section"). I also witnessed two distinct "tracks"—development and theming—at [Drupal Camp Austin](http://2009.drupalcampaustin.org/ "Drupal Camp Austin") in November. No doubt, Drupal and its community has good intentions. It makes sense to group participants with similar skills. My reservations with the current classification system arise from the unclear, misunderstood, and heightened skill sets required of themers.

More Than Just HTML and CSS
---------------------------

Perhaps your definition's different, but when I hear the word "theming" I think HTML and CSS. Take a white, left-aligned, full-width webpage with black Times New Roman text and make it look like something special. If that's all it took to be a themer, there would be plenty of people doing it and, probably, many more themes contributed to the CMS. Let's consider the juxtaposition of the terms "development" and "theming." In my opinion, development indicates a high-level mastery of advanced technical skills, while theming indicates a basic ability to "skin" an existing website. According to Drupal, however, a "site designer/developer" (a.k.a. a "themer") must know how to "install software, design style and layout (with css and minimal php), build and deploy websites, evaluate contributed modules, and work with LAMP." (Check out the "[Is Drupal right for you?](https://www.drupal.org/node/346217 "Is Drupal right for you?")" section in the Drupal handbook.) Might this be a cause for the difficulty bloggers expereince when trying to define a proper Drupal audience? Expectations of a Drupal themer often do not match the reality of their skills. This is why a blur exists between theming and development.

The Truth About Theming
-----------------------

If you want to "theme" a Drupal website, you'll need the skills of a developer. You'll need at least a small amount of familiarity with PHP and a clear knowledge of how to incorporate core Drupal functionality into a site on a theme level. To justify my assumption, let's imagine a fully-functional Drupal site is handed off to an individual with only HTML and CSS expertise. I'm describing the site I mentioned previously—the one with a plain, white background and black Times New Roman text. Surely, the individual would only need to modify HTML and CSS, correct? What happens when a module doesn't offer the necessary HTML structure or provide CSS selectors granular enough to target? The individual then would have to override module or Drupal HTML output. This would require them to learn how to override theme functions in their theme's template.php file. As an alternative, they might be able to take advantage of contributed modules such as [String Overrides](https://www.drupal.org/project/stringoverrides "String Overrides"), but then again, their initial task of "theming" (in its purest sense) would sustain additional requirements outside the scope of their original assignment.

Final Thoughts
--------------

There's certainly plenty of discussion about the [barriers to entry for a Drupal themer](http://www.mattfarina.com/2009/10/barriers-entry-contributing-themes "barriers to entry for a Drupal themer"), and most of the heat seems to go toward the [exclusivity and technicality of Drupal's CVS](http://morten.dk/blog/cvs-haiku "exclusivity and technicality of Drupal's CVS"). There's also a good deal of complaints about building a theme that complies with the [General Public License](http://www.gnu.org/licenses/gpl.html "General Public License"). I wouldn't credit either of those technicalities as the source of the problem. The truth is, Drupal theming, in and of itself, is tough stuff. The term "theming" doesn't accurately depict the complexity of the job. So in response to [the comment posted on my "how-to" blog post](/2009/11/30/cooking-homemade-drupal-theme#comment-59 "the comment posted on my "how-to" blog post"): Drupal themers must learn the basics of PHP. Only then will they be equipped with the minimal skill set required of a Drupal themer.