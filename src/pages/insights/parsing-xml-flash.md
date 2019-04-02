---
title: 'Parsing XML in Flash'
templateKey: blog-post
date: 2005-06-07T05:00:00.000Z
category: 
  -Development
alias: parsing-xml-flash
summary: > 
 Parsing XML in Flash is no walk apart, as I've come to find out. When I first got here and saw Trevor's XML parsing actionscript, I knew there had to be a better way. Working with the DOM is tedious and complex. You're really just looping through collections of nodes, and dealing with objects that have no relation to the data you're trying to access.
author: Digett
image: /assets/post-placeholder.png
---

Parsing XML in Flash is no walk apart, as I've come to find out. When I first got here and saw Trevor's XML parsing actionscript, I knew there had to be a better way. Working with the DOM is tedious and complex. You're really just looping through collections of nodes, and dealing with objects that have no relation to the data you're trying to access. So, I took a cue from other XML APIs I've used and made a DOM to Flash object converter. I'm not an actionscripter at all, but I know enough javascript to get around. I also know that javascript is incredibly dynamic and flexible, so you can do some powerful things with it. Around this time, we started work on Churchill Downs, which required a considerable amount of XML parsing in actionscript. So, I wrote the XML Deserializer (sorry, I couldn't think of a funky name to use). It takes any XML object, loops through all the elements, and creates a flash object. Before I get to the sample usage code, there is one major flaw that I could not figure out. I could not find any way to retrieve a list of attributes of an element. The only way to access an attribute I saw, was by passing the name by value. I made a little workaround, but I would love it if some actionscript guru could point me in the right direction. Here's some actual code from one of the Churchill Downs flash pieces. I'm manually setting an array of possible attributes to try for each element. I don't like the solution at all, but I already spent too much time trying to figure out a better one. Notice how nodes are access by name (myData.weather\[0\].wind.\_mph). Attribute values are prefixed with an underscore. The content of the node is accessible with \_\_content\_\_. Multiple instances of an element are immediately converted into an array (such as myData.weather below). #include \\"xml\_deserializer.as\\" var myData = {}; parseXml('http://example.com/path/to/weather.xml', parseHomepage); // onload callback of the XML object function parseHomepage(success) { if(!success) return; // pass empty object, root XML node, and an array of attributes. only three attributes are present in this xml file parseNodes(myData, xmlObj.childNodes\[0\], \['mph', 'dir', 'icon'\]); play(); // parses XML like this: // // // 80>/temperature> // 20>/humidity> // //

Partly Cloudy>/summary> //

// // 80>/temperature> // 20>/humidity> // //

Partly Cloudy>/summary> //

// >/root> trace('>> Weather'); for(var i = 0; i I hope someone finds this useful. Not only does it serve us well on Churchill Downs (with a complex XML schema that constantly changed in development), but it's also in use on the Boerne Chamber of Commerce website. I do plan to make some improvements to it as my knowledge of javascript and actionscript grows.