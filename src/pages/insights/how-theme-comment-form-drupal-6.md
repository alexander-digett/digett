---
title: 'How to Theme the Comment Form in Drupal 6'
templateKey: blog-post
date: 2010-06-29T17:16:15.000Z
category: 
  -Drupal
alias: how-theme-comment-form-drupal-6
summary: > 
 Ed. Note: Learn how to theme the comment form in Drupal 7. I’ve grown to have an affinity for Drupal’s hook_form_alter function. Truly, modifying a form doesn’t have to be as complicated as it may seem. One of the most generic Drupal forms (in my opinion) is the pesky comment form. Out of the box, it comes complete with name, email, homepage, subject, and comment fields.
author: Kathryn
image: /assets/post-placeholder.png
---

Ed. Note: [Learn how to theme the comment form in Drupal 7](/blog/05/26/2011/how-theme-comment-form-drupal-7). I’ve grown to have an affinity for Drupal’s [hook\_form\_alter](https://api.drupal.org/api/function/hook_form_alter) function. Truly, modifying a form doesn’t have to be as complicated as it may seem. One of the most generic Drupal forms (in my opinion) is the pesky comment form. Out of the box, it comes complete with name, email, homepage, subject, and comment fields.

Original Comment Form
---------------------

![Image removed.](/core/misc/icons/e32700/error.svg "This image has been removed. For security reasons, only images from the local domain are allowed.") While these settings can be slighty adjusted on a content type level, the configurations available through the administrative interface are limited. Even if you’re not a PHP guru, you should still be able to refashion the comment form to your liking through your theme’s template.php file. The first time I attempted a form\_alter, I followed an excellent tutorial called [Modifying Forms in Drupal 5 and 6](https://www.lullabot.com/blog/article/modifying-forms-drupal-5-and-6) by [Lullabot](https://www.lullabot.com/) and still refer back to this article on a case-by-case basis.

Register the Theme Function
---------------------------

<?php function themename\_theme() {   return array(     'comment\_form' => array(       'arguments' => array('form' => NULL),     ),   ); } ?> Before we can actually change the components of the comment form, we have to ensure Drupal’s theme layer knows to look for our new function. The code snippet above tells Drupal to look for a function called themename\_theme and what arguments are available to it. Include this code in your theme’s template.php file and double check that you’ve updated the function’s themename so that it matches your own. You'll also want to be sure you've cleared your site's cache at Administer > Performance.

Create the Override Function
----------------------------

<?php function themename\_comment\_form($form) { $output = ''; //print "<pre>"; //return print\_r($form); //print "</pre>"; $output .= drupal\_render($form); return $output; } ?> The code above represents the "wrapper" where all our overrides will occur. Add this to your template.php file, and temporarily uncomment the three lines of preformatted output. Now, when you visit your form, you should see a long list of data. These variables will assist you in writing your overrides.

### Adding Fieldsets to Drupal's Comment Form

//Create new fieldsets $form\['information'\] = array(    '#type' => 'fieldset',    '#title' => t('Your Information'),    '#collapsible' => FALSE,    '#weight' => 1, ); $form\['your\_comment'\] = array(    '#type' => 'fieldset',    '#title' => t('Your Comment'),    '#collapible' => FALSE,    '#weight' => 2, ); In order to organize existing fields into manageable sections, we'll have to define fieldsets in our new function. To create the two new fieldsets, "Your Information" and "Your Comment," I included the code snippet above (immediately following the preformatted code inside the "wrapper" function). Next we'll need to assign fields to our new fieldsets and unset their current structure. We can do this using the following method: //Unset & Move Name field into "Your Information" fieldset $form\['information'\]\['name'\] = $form\['name'\]; unset($form\['name'\]); When it comes time for you to define these on your own, remember, print\_r($form) is your friend!

### Removing the Homepage Field

//Remove the Homepage field $form\['homepage'\] = NULL; Anytime you want something to be entirely removed from a form, this method above is much stronger than using a CSS display:none hack. You can apply this same principle to any of the form elements. In our case, I also applied this technique to the email's description. I'd also suggest using the [Better Formats](https://www.drupal.org/project/better_formats) module to remove the Input Field that appears for anonymous users. It's safer to grant this permission only to site administrators or authenticated users due to the risk of spammers entering malicious code.

Modified Comment Form
---------------------

![Image removed.](/core/misc/icons/e32700/error.svg "This image has been removed. For security reasons, only images from the local domain are allowed.") You can see that I've added two fieldsets to the form, removed the homepage field altogether, changed the label for email, removed its description, and changed the "Save" button's value. All of these changes happened in the theme's template.php file. This new form will be much nicer to theme and no longer screams that it's a cookie-cutter Drupal form. Once the Garland look is changed up a bit, there's a lot to go off of here. The following code is the complete code for the finalized form above.

/\*\*
\* Implementation of hook\_theme.
\*
\* Register custom theme functions.
\*/

function themename\_theme() {

  return array(
    'comment\_form' => array(
      'arguments' => array('form' => NULL),
    ),
  );
}

/\*\*
 \* Customizations to the Comment form.
 \*
 \*/

function themename\_comment\_form($form) {

  $output = '';
  //print "<pre>";
  //return print\_r($form);
  //print "</pre>";  

  //Create new fieldsets
  $form\['information'\] = array(
    '#type' => 'fieldset',
    '#title' => t('Your Information'),
    '#collapsible' => FALSE,
    '#weight' => 1,
  );

  $form\['your\_comment'\] =array(
    '#type' => 'fieldset',
    '#title' => t('Your Comment'),
    '#collapsible' => FALSE,
    '#weight' => 2,
  );

  //Your Name
  $form\['information'\]\['name'\] = $form\['name'\];
  unset($form\['name'\]);
  $form\['information'\]\['name'\]\['#required'\] = 1;

  //Email Address
  $form\['information'\]\['mail'\] = $form\['mail'\];
  unset($form\['mail'\]);
  $form\['information'\]\['mail'\]\['#title'\] = t('Email Address');

  $form\['information'\]\['mail'\]\['#description'\] = NULL;

  $form\['information'\]\['mail'\]\['#required'\] = 1;

  //Homepage
  $form\['homepage'\] = NULL;

  //Subject
  $form\['your\_comment'\]\['subject'\] = $form\['subject'\];
  unset($form\['subject'\]);
  $form\['your\_comment'\]\['subject'\]\['#weight'\] = -10;

  //Comment
  $form\['your\_comment'\]\['comment\_filter'\]\['comment'\] = $form\['comment\_filter'\]\['comment'\];
  unset($form\['comment\_filter'\]\['comment'\]);

  //Submit
  $form\['submit'\]\['#value'\] = t('Submit Comment');

  $output .= drupal\_render($form);

  return $output;
}

And there you have it! Hope you find this useful.