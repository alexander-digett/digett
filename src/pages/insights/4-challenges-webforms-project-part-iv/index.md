---
title: '4 Challenges With a Webforms Project, Part IV'
templateKey: blog-post
date: 2014-12-03T16:27:03.000Z
category: Development, Drupal
alias: 4-challenges-webforms-project-part-iv
summary: > 
 Welcome to the fourth and final part of my in-depth look at customizing some default behavior in Webforms, and in this installment, Drupal’s Bootstrap theme. Today we’ll look specifically at repurposing bootstrap alerts and some more general minor DOM manipulation.
author: Travis Flatt
image: /assets/challenges-webform-drupal.png
---

Welcome to the fourth and final part of my in-depth look at customizing some default behavior in Webforms, and in this installment, Drupal’s Bootstrap theme. Today we’ll look specifically at repurposing bootstrap alerts and some more general minor DOM manipulation.

(Here’s [Part I](/insights/4-challenges-webform-project-part-i), [Part II](/insights/4-challenges-webform-project-part-ii), and [Part III](/insights/4-challenges-webforms-project-part-iii) for easy reference if you’re late to the party.)

Challenge #4: Thank you, come again!
------------------------------------

So, at this point in the project, the form behaves as desired right up until a successful submission.

As we start looking at the form’s confirmation behavior, it’s currently reloading the page and giving us a pretty generic bootstrap alert box with some confirmation text. This is with the basic webform setting of sending a confirmation to the same page as the submission form. We could also redirect to another page, but in this instance we don’t want either of those things.

The desired behavior is for the area with the form to remain open upon submission, and have the form be replaced with a thank you message box that can be closed in much the same way as the form itself (much like the [toggle effect here](http://jsfiddle.net/travtex/u3f50mox/), to refresh your memory).

Before we do anything, we want to be sure we’re on an actual confirmation page. Our bootstrap theme has us set up here by putting an element right there on the page for us, even though we don’t want to look at it. In this instance, I’m just going to add a class to that particular bootstrap alert’s parent, which will already be set up in CSS with display: none.

$('.confirmation-message').parent().addClass('form-confirmation');

Customize that confirmation
---------------------------

At this point our confirmation page is just getting a hidden bootstrap alert div sent to the page. We can use that as our condition for triggering the confirmation behavior, but first we check to see if that particular alert box exists.

if ($(.form-confirmation).length) { // Do things here }

Once we know that we’re working with a completed, validated, and confirmed form entry, we’re going to place our confirmation message right there in the toggle area where our original form once lived.

if ($(.form-confirmation).length) {

$('.form-div').before("<div class='alert alert-info alert-dismissible signup-confirmation' role='alert'><button type='button' class='close confirmation-corner-button'><span class='close-button-text '>Close <span aria-hidden='true'><i class='fa fa-times' ;></i></span></button><h2>Thank You!</h2><p> Your message has been sent. Thank you for your interest.</p><div class=' close-button'><button type='button' class='btn close-confirmation-button'>Close</button></div></div>");

This creates a new alert box more in the area of where we want it. In addition to the “X” in the upper right corner, we’re also adding a more explicit “Close” button in case the purpose of that “X” isn’t immediately obvious to our user.

Also, we’re going to scroll to the thank you message.

$('html, body').animate({ scrollTop: $(".signup-confirmation") .offset().top - 100 }, 500); }

Closing things up
-----------------

Now all that’s left to do is to ensure that our two “Close” function buttons do the same thing. We want them both to close the form/confirmation area and slide back up to the original position on the page.

$('.confirmation-corner-button').click(function(e) { $(this).parent().slideUp ('slow'); $('html, body').animate({ scrollTop: $("html") .offset() .top }, 800); (e.preventDefault) ? e.preventDefault() : e.returnValue = false; });

This should look familiar — it’s pretty similar to the slide code we used back in Part I to open the form in the first place.

Finally, we just force the second button’s click action to trigger that of the first instead of its own.

$('.close-confirmation-button').click(function(e) { $('. confirmation-corner-button').trigger('click'); (e.preventDefault) ? e.preventDefault() : e.returnValue = false; });

JSFiddle with some simple shared click event functions can be [found here](http://jsfiddle.net/travtex/habyvd2u/). 

_\[Image: [EduardoEquis](https://www.flickr.com/photos/eduardox/2533079036/)\]_