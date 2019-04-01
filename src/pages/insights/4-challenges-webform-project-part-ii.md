---
title: '4 Challenges with a Webform Project, Part II'
templateKey: blog-post
date: 2014-10-28T15:14:09.000Z
category: Development
alias: 4-challenges-webform-project-part-ii
summary: > 
 Welcome to the second part of my in-depth look at customizing some default behavior from Webforms. In the first, which you can find here, we hid the form and created a toggle button with which to open it.
author: Travis Flatt
image: /assets/jquerylatte.jpg
---

Welcome to the second part of my in-depth look at customizing some default behavior from Webforms. In the first, [which you can find here](/insights/4-challenges-webform-project-part-i), we hid the form and created a toggle button with which to open it.

The second challenge with my fancy webform project involves a little bit of Drupal backend, as well as a helping of jQuery, but not too much. Also, the focus allows us to drift a little bit into some more general discussion of DOM manipulation tricks and tactics.

Challenge #2: Hide the form some more
-------------------------------------

So, out of the box, the webform gives us a default "Submit" button. That’s nice, but since we have a button to open the form, let’s also include a button to close the form. The toggle button works, of course, but people are accustomed to seeing a little "X" in one of the top corners to close things. Let’s give them that.

There are, as with most code, an ever-growing list of ways to solve problems. In this instance, I’m going to turn focus away from jQuery and look to the backend to generate our "close" button.

There doesn’t seem to be an immediately obvious option for adding different buttons. We’re going to add a "Markup Field." Inside it, we can add pretty much anything we care to add:

    
    <div class="closer">
     <a class="close-webform">Close  <i class="fa fa-times"></i></a>
    </div>
    

While we’re at it, we’re going to use the same type of field to add a "Cancel" or "Reset" button in case a user gets halfway through the form and decides to start over from scratch.

Inside another markup field, this time at the bottom:

<input type="reset" value="Start Over" id="reset-button">

That’s simple enough, right? Markup fields are incredibly versatile. You can use them to include just about anything you need to have in your webform, such as input types, custom elements like our close button, or whatever your requirements might dictate.

Now, to enable our close button, we can actually just use the code we already have on the button to open the same form. Remember we used `slideToggle()`, with which we can both hide and reveal elements.

We can also take away the "open" class we added in Part I:

    
    var form = $(’#form-selector’);
    $(’.close-webform’).click(function(event) {
    		form.slideToggle(’slow’);
    		(event.preventDefault) ? event.preventDefault() : event.returnValue = false;
    		$(’html, body’).animate({
    	        scrollTop: $(’html’).offset().top 
    	    }, 800);
    	    if (form.hasClass(’open’)){
    		    form.removeClass(’open’);
    	    }
    	});
    

But the things aren’t where I want them
---------------------------------------

Looking at our "Close" button, it’s actually rendering inside the form; which is to be expected, since we created it as a form field. However, that will put it after the webform title, which isn’t what we want. What if we could pluck that element out of the DOM and make it be a sibling of the webform instead of a child?

Here’s where we can dip a bit into DOM manipulation. Specifically, we’re going to talk about HTML restructuring.

Sometimes your CMS is going to generate some HTML that isn’t quite optimal for how you want to present it. Alternately, it might just be fine for desktop, but you might want some different behavior on iPad.

The bottom line is that you’re at a position where it would be extraordinarily helpful if this particular element wasn’t a sibling of that particular element, or if it actually rendered after this other section of the page.

Here are four jQuery methods to handle all of those HTML woes:

before() and after()
--------------------

These two are pretty self-explanatory. As an example, let’s say we want to take our "Close" button and move it before the webform. This will make it a direct sibling of the webform element and not a child inside of it.

    
    $(’#webform’).before($(’.close-button’));
    

A couple of things are worth mentioning in our syntax here. First, it’s easy to make the mistake of calling the `before()`function on the element you’re trying to move. Instead, what’s being moved is going to be the parameter of the function.

Another common mistake is to leave off that second jQuery object notation. We’re needing to place the entire element, and simply calling a selector will not have the results we want, only placing the text itself in the indicated spot. Making it a jQuery object references the entire thing.

prepend() and append()
----------------------

Only slightly more tricky than before and after, these two functions will place an element inside the targeted element, at the beginning or end, respectively. As an example, we’re going to exactly what we did with the previous example, just in a different way.

So, our close button is rendered inside the webform. The webform itself is rendered inside a div or section. Calling the `before()`function, as above, placed the element immediately before the form. Also, it placed the element as the first child of the parent element. The same thing could be accomplished like so:

    
    $(’.parent-div’).prepend($(’.close-button’));
    

These four methods can take you a long way. As for which to make use of in what situation, there isn’t really an advantage to any over the other, and it’s going to be very case-specific on what it is you want to place where.

    
    <parent>
      parent.prepend
      <child-one>
      </child-one>
      child-one.after
      child-two.before
      <child-two>
      </child-two>
      parent.append
    </parent>
    

Next time we’ll move back away from moving around elements in the DOM and look at reducing the number of unnecessary calls to our server with some client-side form validation.

Working jsfiddle to show positional examples [here](http://jsfiddle.net/travtex/dbaburqn/).

\[Image: [Yuko Honda](https://www.flickr.com/photos/yukop/7130306255/in/photolist-bS5FCK-7XD2S7-mgPbbk/)\]