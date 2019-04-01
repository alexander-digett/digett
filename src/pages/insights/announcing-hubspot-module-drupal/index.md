---
title: 'Announcing the HubSpot Module for Drupal'
templateKey: blog-post
date: 2011-06-20T19:38:06.000Z
category: Drupal, HubSpot
alias: announcing-hubspot-module-drupal
summary: > 
  	HubSpot provides great lead generation systems for sites using any content management system, but integrating HubSpot forms with Drupal can be a challenge. With our new HubSpot module for Drupal, we’re making it faster and easier than ever to gather leads from your Drupal sites.
author: Alex R
image: /assets/hubspot-module-drupal.png
---

HubSpot provides great lead generation systems for sites using any content management system, but [integrating HubSpot forms with Drupal can be a challenge](/blog/03/02/2011/integrating-hubspot-forms-drupal). With our new [HubSpot module for Drupal](https://www.drupal.org/project/hubspot), we’re making it faster and easier than ever to gather leads from your Drupal sites.

The module uses the popular Webform module, already used by many sites to power user surveys and contact forms, and makes it easy to have any form’s results sent directly to HubSpot’s lead management systems. Best of all, it’s compatible with Drupal 6 and 7, so you can use it on a pre-existing site.

Connecting Drupal with HubSpot
------------------------------

Placing HubSpot forms in Drupal-powered sites now takes only a few steps:

1.  Install the [HubSpot module](https://www.drupal.org/project/hubspot) for Drupal and the [Webform](https://www.drupal.org/project/webform) module, if you don’t have it already. Create your new HubSpot form in HubSpot’s Settings, under “HubSpot Lead API.” Once you’ve created the form, HubSpot will give you an API POST URL to use with Drupal.
2.  Build your complete form using the Webform module, using as many fields as you’d like. No, you don’t have to build your form through HubSpot’s form generator — just build it in Drupal exactly how you want it. The module’s help page provides a list of form fields which are automatically recognized by HubSpot, such as name and company information, but you can send any kind of data.
3.  Add a final field to the form using the type “HubSpot POST URL” and paste in the POST URL that HubSpot gave you in step 2. Without this field, the module won’t know where to submit the data, and will be treated as an ordinary Webform.
4.  You’re done! Publish your form and watch the leads roll in.

Of course, you also want to be able to use HubSpot’s lead tracking features on your Drupal site, so you can see which leads return and which pages they view. Just visit your HubSpot settings and find the “External Site Traffic Logging” section, which provides some JavaScript code to insert into your Drupal site. HubSpot tells you to paste it before your </body> tag, but the HubSpot module for Drupal can handle the hard work for you. Just visit the “HubSpot integration settings” page in your Drupal configuration and paste the logging code in. It will automatically be included on every page on your site.

Styling your Drupal Forms
-------------------------

The default Webform layout is a little bland, but that can be easily fixed. Unlike the copied-and-pasted HubSpot forms we previously had to use, Webforms can be styled in just about any way you want.

Webform comes with a Drupal template, “webform-form.tpl.php”, which controls the display of every Webform on your site. You can copy this out of the templates directory in the Webform module and into your site’s custom theme, then modify it as much as you wish. If you need a particular form to be styled differently from the others, just make a template file named “webform-form-\[nodeid\].tpl.php”, where you replace \[nodeid\] with the node ID of the webform you want to style.

There’s no more fiddling with HubSpot’s funky tables. Your HubSpot-integrated forms can look exactly how you want them to.

Bugs and Support
----------------

Once a form is submitted, it should only take a few minutes for the new lead to appear in HubSpot. If it doesn’t show up at all, however, it’s possible that something has gone wrong and the data never made it to HubSpot. Check your Drupal logs (under Reports) or use the built-in debugging system in the module’s configuration: supply an email address and the module will email you with full details of any error as soon as it occurs.

The module also comes with a complete Drupal help page — just check the Help section of your Drupal administration panel and find the “HubSpot Drupal integration” section. If you need more detailed documentation, check out our [handbook pages on Drupal.org](https://www.drupal.org/node/1195370), which cover features like automatic receipt emails and using HubSpot's Salesforce integration.

If you have any other issues with this module, file a support request in our [Drupal issue queue](https://www.drupal.org/project/issues/hubspot?categories=All) or leave a comment here. We’ll try to get back to you as soon as possible to resolve the issue.