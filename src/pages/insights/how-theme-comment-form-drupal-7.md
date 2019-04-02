---
title: 'How to Theme the Comment Form in Drupal 7'
templateKey: blog-post
date: 2011-05-26T13:31:47.000Z
category: 
  -Development, Drupal
alias: how-theme-comment-form-drupal-7
summary: > 
  	Theming the comment form is something that most Drupal themers want to do at some point. Based on the popularity of our previous post, How to Theme the Comment Form in Drupal 6, I have decided to revisit this subject for Drupal 7.
author: Art Williams
image: /assets/post-placeholder.png
---

Theming the comment form is something that most Drupal themers want to do at some point. Based on the popularity of our previous post, [How to Theme the Comment Form in Drupal 6](/blog/06/29/2010/how-theme-comment-form-drupal-6), I have decided to revisit this subject for Drupal 7.

Form Theming Basics
-------------------

The default comment form in D7 is just like D6, contains fields for name, email, homepage, subject, and comment. The email and homepage fields can be turned off in the content type settings. Plus you can add new fields to the comment form and change some of their display options in the content type settings.  But for more advanced theming we have to override the form.

![theme-comment-form-drupal7-original.png](/sites/default/files/theme-comment-form-drupal7-original.png)

In D6 and D7 you can use the [hook\_form\_alter](https://api.drupal.org/api/drupal/modules--system--system.api.php/function/hook_form_alter/7) function to make changes to a form before it is rendered, but the issue with this function is that it is called for every form rendered by Drupal. I’m going to suggest that you use [hook\_form\_FORM\_ID\_alter](https://api.drupal.org/api/drupal/modules--system--system.api.php/function/hook_form_FORM_ID_alter/7) instead, since it is only called for the specific form with the id of FORM\_ID. Plus this function is called last of all the form override functions, so you will know that your changes won’t be undone anywhere else. All you have to do is locate the FORM\_ID for the comment form and begin building your function.

Locating the FORM\_ID
---------------------

To find the FORM\_ID try [firebugging](http://getfirebug.com/) the form and look for the hidden input field with the name=form\_id. It looks like this:

`<input type="hidden" value="comment_node_article_form" name="form_id">`

The part after value= is the FORM\_ID.

Many forms have multiple IDs that will work for theming. The comment form is a good example. Each node type has a specific comment FORM\_ID that only applies to comment forms on that node type.

For example, the node type ‘article’ would have the FORM\_ID of **comment\_node\_article\_form**, as in the code example above. However the more generic FORM\_ID **comment\_form** applies to all comment forms for all content types. (Sorry there isn’t an easy way to find the more generic FORM\_ID other than poking around in the [Drupal API](https://api.drupal.org/api/drupal) or making an educated guess.)

I want to override all of the comment forms on my site so I’m going to use the generic FORM\_ID **comment\_form** for the rest of this post.

Overriding the Form in template.php
-----------------------------------

Now combine the parts we’ve gathered into a function in the template.php file in your theme. The resulting function to override the comment form will be: (replace THEMENAME with the name of your theme)

`function THEMENAME_form_comment_form_alter(&$form, &$form_state) {  
}`

All of the modifications to the comment form will go in this function between the brackets { }.

Finding the $form elements
--------------------------

Now that the function is ready to use, it would be helpful to know what the $form looks like with all of its various elements. The easiest way to do this is to Install and activate the [devel module](https://www.drupal.org/project/devel). One of the best little functions in this module is the dpm() function which will output the structure of an array or object in an easy to navigate manner.

In your hook\_form\_comment\_form\_alter function (above) add the line:

`dpm($form);`

_This code will only work if the [devel module](https://www.drupal.org/project/devel) is installed._

Now when you load a page on your site containing a comment form you will see this at the top of the page:

![theme-comment-form-drupal7-dpm.png](/sites/default/files/theme-comment-form-drupal7-dpm.png)

Click on the gray bar that says “Array, x elements” to expand the $form array. These are all of the elements of the comment form.

Now the fun begins. You can move these elements around, assign values, create new one, etc. Some are nested and open up into more levels of elements. Click around and explore.

_Aside: For the rest of this post I will reference elements that I want to manipulate, all of which can be found in this array It might help to follow along with the array open._

Form Manipulation
-----------------

First I want to **group some of the fieldsin my comment form into a fieldset**. I see that in D7 there is already a grouping called “author” in the array. And it already contains the elements I want to group (name, email, domain), but it isn’t a fieldset. To make it a fieldset you can just give it a #type of fieldset.

`$form['author']['#type'] = 'fieldset';`

But now there is no label for the fieldset. We can fix that by adding the line:

`$form['author']['#title'] = 'Your Information';`

And to set the fieldset to not collapsible, add the line:

`$form['author']['#collapsible'] = FALSE;`

On the other hand, the subject and comment fields are _not grouped_ in the comment form array, so to add a fieldset to them I’m going to need to **create a new fieldset, then assign the existing fields to the new fieldset, and finally unset the existing fields**. Here is how:

    $form['your_comment'] = array(
      '#type' => 'fieldset',
      '#title' => t('Your Comment'),
      '#collapsible' => FALSE,
      '#weight' => 2,
      );
    
      //Subject
      $form['your_comment']['subject'] = $form['subject'];
      unset($form['subject']);
      $form['your_comment']['subject']['#weight'] = -10;
    
      //Comment
      $form['your_comment']['comment_body'] = $form['comment_body'];
      unset($form['comment_body']);

Another manipulation is **removing a field all together**. To accomplish that you set the field equal to NULL. For example to remove the homepage field add the following line to your function:

`$form['author']['homepage'] = NULL;`

**_Updated (6/7/2011): As Dan pointed out in the comments, the above line does NOT work in the case of homepage, due to the validation code in the comments module.  Instead of using the above line to remove the homepage field, use the following line to set access to the field as FALSE. This hides the field and prevents user input._**

`$form['author']['homepage']['#access'] = FALSE;`

The final form manipulation that I’m covering in this article is **making a field required**. In the drupal content type settings you can make all of the contact information required or all of it optional, but there are no options for some of each. We can solve that by making them all optional in the content type settings and adding a line to our override function to make the email address required, like this:

`$form['author']['mail'][‘#required’] = TRUE;`

The Summary and the Code
------------------------

There are many more manipulations that can be done to the fields on a form, but that should get you started. The main difference between Drupal 6 and Drupal 7 is that the default $form array is rearranged a bit, so the devel module becomes very important to investigate those changes.

_**Important Note: Be sure to comment out or delete the "dpm($form);" line once you are finished makeing changes to the comment form.  You should also deactivate the devel module once you are finished development to reduce the overhead.**_

Here is the entire override function containing all of our changes (replace THEMENAME with your own theme’s name) and a screenshot of the resulting comment form.  Copy and paste this into your template.php file and start theming away on that comment form.

    function THEMENAME_form_comment_form_alter(&$form, &$form_state) {
      //dpm($form);  //shows original $form array
      $form['author']['#type'] = 'fieldset';
      $form['author']['#title'] = 'Your Information';
      $form['author']['#collapsible'] = FALSE;
    
      $form['your_comment'] = array(
        '#type' => 'fieldset',
        '#title' => t('Your Comment'),
        '#collapsible' => FALSE,
        '#weight' => 2,
      );
    
      //Subject
      $form['your_comment']['subject'] = $form['subject'];
      unset($form['subject']);
      $form['your_comment']['subject']['#weight'] = -10;
    
      //Comment
      $form['your_comment']['comment_body'] = $form['comment_body'];
      unset($form['comment_body']);
    
      $form['author']['homepage']['#access'] = FALSE;
    
      $form['author']['mail']['#required'] = TRUE;
    
      //dpm($form);  //shows $form array after our changes
    
    }

![theme-comment-form-drupal7-result.png](/sites/default/files/theme-comment-form-drupal7-result.png)