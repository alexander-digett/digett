---
title: 'Proper use of HTML5 elements - Semantic Structure'
templateKey: blog-post
date: 2011-10-26T13:24:33.000Z
category: 
  -Development, Drupal, HTML5, SEM and SEO
alias: proper-use-html5-elements-semantic-structure
summary: > 
 When web developers moved from table-based to non-table-based layouts, the syntax change was relatively simple: use a &lt;div&gt; element instead of &lt;table&gt;, &lt;tr&gt;, or &lt;td&gt;. The hard part was learning how to use position, float, and clear in your css to make it all look right.
author: Art Williams
image: /assets/class-header-semantics.jpg
---

When web developers moved from table-based to non-table-based layouts, the syntax change was relatively simple: use a <div> element instead of <table>, <tr>, or <td>. The hard part was learning how to use position, float, and clear in your css to make it all look right. With the transition to HTML5 the problem seems to be reversed. HTML5 doesn’t make any changes to the process of laying out a site — we still use position, float, and clear to align elements. However, there 30+ new elements in HTML5. Some are used for media (such as <audio> and <video>) and others for forms, but most of them are used for document structure. The mistake most developers seem to be making, myself included, is seeing these new elements as either extensions or replacements of the <div> elements. Both of those views are wrong.

Document Outline
----------------

HTML5 elements were created to help us better explain the semantic structure of the content in an HTML document. They will have the greatest influence over what is called the Document Outline. The Document Outline in previous versions of HTML was largely an outline of the heading elements (h1, h2, etc), but HTML5 has given us 20 or so new elements just for defining regions of a document. Some of these new elements are self-explanatory, such as <header>, <footer>, and <nav>, but other can be a little tricky to understand. And since the <div> element has no real impact on the document outline, we have grown accustomed to viewing it as a purely layout-based element. For example, we wrap it around some content so that we can style and place that content where we want. It is a little bit of a struggle to keep the layout aspect of the element as secondary when dealing with these new HTML5 elements. That doesn’t mean that you can’t float a <header>; by all means, go ahead, but that’s not the reason you place a <header> element around the header of the document. Document Outline is the primary concern with HTML5 elements and layout attributes are added to the elements because they are already there. If you have something you need to style that doesn’t belong in the Document Outline, then put a <div> around it and go to town theming it.

Section Element
---------------

The most commonly misused HTML5 element is probably the <section>. It is common to see it replace the outer <div> of various areas on a site. This misuse of <section> can make the Document Outline of your html unintelligible. A <section> is any grouping of content that is different than other groupings of content on that page. W3C uses the example of a chapter in a book as a section. A <section> may declare a group of <articles> (blog posts for example). A section can also declare a side block that contains a list of recent comments on the site that aren’t necessarily related to the article in the main content area. Another great use for the <section> element is when you want to create a site that what would normally be multiple pages of content on one long page using javascript to open and collapse the areas as you navigate. Any place where you are using tabs of content is also likely a great candidate for the <section> element.

SEO Effect
----------

In those last two examples, where you are using some kind of javascript to hide or display content as the user clicks on your navigation, you would usually have to make a trade-off on the SEO side of things in order to build that kind of nice effect. But the <section> element comes to the rescue. After declaring the start of a new section you are free to start over with nearly all of your page elements, h1, h2, header, footer, etc. This is a boon for SEOs who would typically have insisted that each of those “tabs” be their own page for the keyword benefits. With HTML5 you can now target unique and specific keywords in each <section> of the html document. In the end HTML5 will make it easier for the content on a webpage to be more specifically declared. The more we separate the theming layer from the Document Outline the easier it will be for other computers to understand the data. In the short term this means search engines can index content more accurately, and in the long run website data can be integrated into other devices and sites more easily. My recommendation is that we, developers, start developing using HTML5 markup if we haven’t already. It will take a little time to grasp all the nuance, but as with the change away from tables it will be for the best. If you are a Drupal front-end developer, you might want to start with one of the [HTML5 starter themes](/blog/06/29/2011/html5-base-starter-themes-drupal-7). If not, then I’m a fan of the [HTML5 boilerplate](http://html5boilerplate.com/), which one of our developers, Alex, used to build [San Antonio Web Design](/san-antonio-web-design/). Image: [W3C](http://www.w3.org/)

Related Articles
----------------

[HTML5 Base Starter Themes in Drupal 7](/blog/06/29/2011/html5-base-starter-themes-drupal-7) [San Antonio Web Design](/blog/09/29/2011/san-antonio-web-design) [Mobile Website Design Best Practices: The Good](/blog/04/08/2011/mobile-website-design-best-practices-good)