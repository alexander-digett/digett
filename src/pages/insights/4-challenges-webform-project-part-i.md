---
title: '4 Challenges with a Webform Project, Part I'
templateKey: blog-post
date: 2014-09-23T13:42:59.000Z
category: 
  -Development, Drupal, UX Design
alias: 4-challenges-webform-project-part-i
summary: > 
 I like Javascript. There, I said it. It’s all out there floating across the internet, and no doubt my kids will mock me for it twenty years from now when they’re busily developing code via direct brain-link. For now, though, I find it to be a remarkably versatile problem solver for things that just aren’t quite handled by the default behavior of your favorite framework or CMS.
author: Travis Flatt
image: /assets/drupal-webforms-javascript_1.png
---

I like Javascript. There, I said it. It’s all out there floating across the internet, and no doubt my kids will mock me for it twenty years from now when they’re busily developing code via direct brain-link. For now, though, I find it to be a remarkably versatile problem solver for things that just aren’t quite handled by the default behavior of your favorite framework or CMS. A recent Drupal project allowed me the opportunity for some Javascript/jQuery troubleshooting, which I usually find to be the fun part of any given day. Even when I’m not technically at work. ![Sleeping Programmer](/assets/programmer_250.jpg) Computering until this point, basically. I was originally thinking this would make for a single quick post, until I started explaining things. I’ve broken it up into four easily-digestible bites, each focusing on a specific problem that needed to be handled and its solution. First, we begin with...

Challenge #1: Hide the form
---------------------------

I was working in Drupal for this particular project, but the jQuery methods I’m going to talk about are pretty platform agnostic. In this case, we wanted the form to not immediately appear on the page. The desired behavior was the appearance of a shiny button, which when clicked would display our glorious webform. This is a pretty common general usage, and easily accomplished with a display: none in CSS.  

.hide-this-element { 
  display: none; 
}

  With the element stealthily hiding on the page, we need to take over the behavior of our button. In this case, I’m going to use jQuery’s slideToggle()method just to give the added functionality to open or close the form with the same button.  

var button = $(‘.button-selector‘);
var form = $(‘.form-selector');

button.click(function(event) {
 form.slideToggle(‘slow');
 if (button.text().trim() === ‘Default Text') {
			button.text(‘Different Text');
		} else {
			button.text(‘Default Text');
		}
 event.preventDefault();
 $('html, body').animate({
	 scrollTop: form.offset().top
	 }, 800);
	 form.addClass('open');
});	

  So, there’s a few extra things going on here. The function itself is living inside a jQuery .click()method that’s telling the browser, “When this thing is clicked, do these things.” An important element of event listeners like this is that event.preventDefaultbit. For most modern browsers, event.preventDefault()will work just fine in keeping the browser from doing the default behavior associated with the element. Usually this is a link. We don’t want the browser to look for an href attribute or redirect the page here, so we block that behavior. (The actual production code is a bit heavier for some things, and preventDefault()is one of them, as it doesn’t work with IE8, but if I start turning this into a discussion of what doesn’t work on IE8 we’ll never get anywhere.) There are a handful of options with slideToggle, but we’re keeping it simple here, only passing it ‘slow’. This refers to the speed of the animation when the element we’re hiding or displaying is revealed or hidden. The conditional isn’t something that made it into production, but I threw it back in for the sake of building a more interactive event handler for this discussion. By using slideToggle(), the button has hide and show functionality. I like the idea of changing the text of the button to refer to whatever its current action will do. The last bit is using the .animate()method, which has enough options to fill a book. Here we’re using it for a bit of user experience consideration. A big form has just opened, so we’re going to assume the user actually wanted to use said form and scroll the screen down to where it begins. Working example [here](http://jsfiddle.net/travtex/u3f50mox/). Next time we’ll talk about problem #2: Hide the form some more — which turned out to be a significantly different problem than the title might imply. We’ll cover some default webform rendering behavior, the problems it can cause, and ways to work around it. \[Images: [Simon Pow](https://www.flickr.com/photos/simonpowca/), [Patrick Gensel](https://www.flickr.com/photos/patrickgensel/6716877299/)\]