---
title: '4 Challenges With a Webforms Project, Part III'
templateKey: blog-post
date: 2014-11-18T17:33:19.000Z
category: 
  -
alias: 4-challenges-webforms-project-part-iii
summary: > 
 Welcome to the third part of my in-depth look at customizing some default behavior from Webforms. Part I can be found here and Part II here, and today we'll be talking about some challenges and solutions to client-side validation.
author: Travis Flatt
image: /assets/validate.jpg
---

Welcome to the third part of my in-depth look at customizing some default behavior from Webforms. [Part I can be found here](/insights/4-challenges-webform-project-part-i) and [Part II here](/insights/4-challenges-webform-project-part-ii), and today we'll be talking about some challenges and solutions to client-side validation.

Challenge #3: Client-side validation
------------------------------------

So, with the way my webform was set up so far, the default behavior was closing the form upon submission and sending it to the server for validation. The page would return to the top of the screen, and then provide whatever confirmation or error messages were relevant in bootstrap alert boxes. If there was an error in the form, the user would have to go back to the button, reopen the form, find the problem...and without going into more detail, we’re already dealing with a bad user experience. Ideally, I wanted the form to first validate on the client side before pestering the server with validation tasks doomed to failure. Also, I wanted the form to remain open until we were satisfied that it was filled out properly. First, I wanted to make sure that we’re getting an actual email address in the email field. For this, I built a quick function to compare the input against a regular expression. Your regular expression can be as bare-bones or as complicated as you want.

function validateEmail(email) {
  		var emailReg = /^((\[^<>()\[\\\]\\\\.,;:\\s@\\"\]+(\\.\[^<>()\[\\\]\\\\.,;:\\s@\\"\]+)\*)|(\\".+\\"))@((\\\[\[0-9\]{1,3}\\.\[0-9\]{1,3}\\.\[0-9\]{1,3}\\.\[0-9\]{1,3}\\\])|((\[a-zA-Z\\-0-9\]+\\.)+\[a-zA-Z\]{2,}))$/;
  		if( !emailReg.test( email ) ) {
    		  return false;
  		} else {
    		  return true;
  		}
}

If you squint just right and manage to ignore the regex syntax, it’s a pretty simple function. Take in the input, compare it to our regular expression, and return true or false. We’re going to make use of jQuery’s appropriately-named submit() method in order to tell the form what to do when the webform’s submit button is clicked.

$('form').submit(function(e) {
	var emailInput = $(‘#email-address'),
	    nameInput = $(‘#your-name'),
          messageInput = $(‘#your-message'),
          myForm = $(this);

As with many jQuery methods, the argument is a function. In this case, our validation conditionals are going to live here. With our jQuery object variables set, we can move right into validating the fields.

if( emailInput.val() === "" || $.trim(emailInput.val()) === "" || !     	validateEmail(emailInput.val()) ) {
		emailInput.next('.signup-error').remove();
		emailInput.after('<p class="signup-error">Please enter a valid email.</p>').css('border', '1px solid red');
} else {
		emailInput.next('.signup-error').remove();
		emailInput.css('border', '1px solid #ccc');
}

We’re checking multiple conditions for our email field: First, we look to see if the field is empty. Second, we’re checking to make sure that the field doesn’t simply have a few spaces in it. Third, we’re calling our previous email validation function to make sure what has been entered into the field resembles an email address. There’s a bit of housecleaning going on here, as well. If the field fails validation, we’re going to create an element that provides directions for correcting the error and a border around it to draw attention to the issue. If the field passes validation, we want to remove these elements if they already exist.

if ( nameInput.val() === "" || $.trim(nameInput.val()) === "" ) {
	nameInput.next('.signup-error').remove();
	nameInput.after('

Please enter your name. ').css('border', '1px solid red'); } else { nameInput.next('.signup-error').remove(); nameInput.css('border', '1px solid #ccc'); } The remaining two fields are being validated in the same way, minus the call to check for a valid email address. Next, we need to make sure our form stays open and provide some help for the user in correcting errors prior to submission.

if (myForm.has('p.signup-error').length === 1) {
	myForm.find('button').next('.form-error').remove();
	myForm.find('button').after('<p class="form-error">There are errors in your form. Please see above.</p>');
	(e.preventDefault) ? event.preventDefault() : e.returnValue = false;  // No submit if errors.
	$('html, body').animate({
	      scrollTop: $("p.signup-error:first").parent().offset().top
		    }, 800);
} else {
	myForm.find('button').next('.form-error').remove();
}

return true;  // Submit form

Here, the elements we’re creating and removing in the validation conditionals pull their own weight. Essentially, we’re saying, “If this form has any errors, do not submit and scroll back to the first error.” Additionally, we’re providing a more general message to the user to inform them that their webform submission contains errors. Finally, once the various conditionals have been met and hoops been jumped through, we return a true value and submit the form. [Working example of a validation field here](http://jsfiddle.net/travtex/9o9vk0eL/). \[Image: [ursonate](https://www.flickr.com/photos/ursonate/3309307159/)\]