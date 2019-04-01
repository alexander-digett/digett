---
title: 'Drupal Developer Apps: Windows Edition'
templateKey: blog-post
date: 2011-08-17T15:47:54.000Z
category: Digett, Drupal, Tools of the Trade
alias: drupal-developer-apps-windows-edition
summary: > 
 JD’s post last week, Tools of the Trade, described the programs and tools he used when developing Drupal websites on Mac. Being the only Windows user in an office full of Mac users, it was left to me to share the tools I use when developing Drupal sites on Microsoft Windows 7.
author: Art Williams
image: /assets/drupal-development-tools-windows-edition.jpg
---

JD’s post last week, [Tools of the Trade](/insights/tools-trade), described the programs and tools he used when developing Drupal websites on Mac. Being the only Windows user in an office full of Mac users, it was left to me to share the tools I use when developing Drupal sites on Microsoft Windows 7.

The Browser
-----------

<!--/\*--><!\[CDATA\[/\* ><!--\*/ <!--/\*--><!\[CDATA\[/\* ><!--\*/ table.list-table, .list-table tbody,.list-table tr,.list-table td{ text-align: left;border-style: none; font: 14px "Lucida Grande", Lucida, Verdana, sans-serif;line-height:1.5em; } .list-table td{ padding-bottom: 10px; } /\*--><!\]\]\]\]><!\[CDATA\[>\*/ /\*--><!\]\]>\*/

[![firefox.png](/sites/default/files/firefox.png)](https://www.mozilla.org/en-US/firefox/new/)

[Firefox](https://www.mozilla.org/en-US/firefox/new/): While I have all of the top browsers installed for testing , the one I use for development is Firefox. It has Firebug (see below) and all of my favorite extensions.  Plus, since the newest versions of Firefox are now so fast, there isn’t much incentive to change to Google Chrome anymore.

[![firebug-64x64.png](/sites/default/files/firebug-64x64.png)](https://addons.mozilla.org/en-US/firefox/addon/firebug/)

[Firebug](https://addons.mozilla.org/en-US/firefox/addon/firebug/): This must have extension for Firefox makes theming a site a breeze. Apply styles right in the browser until you get just the right one, then make the changes to your files.

[![yslow-chrome-developer-extension-e1313066545912.png](/sites/default/files/yslow-chrome-developer-extension-e1313066545912.png)](https://addons.mozilla.org/en-US/firefox/addon/yslow/)

[YSlow](https://addons.mozilla.org/en-US/firefox/addon/yslow/): An addon for Firebug, YSlow analyzes a site to make recommendations as to how the site can be sped up.

[![colorzilla-64x64.png](/sites/default/files/colorzilla-64x64.png)](https://addons.mozilla.org/en-US/firefox/addon/colorzilla/)

[ColorZilla](https://addons.mozilla.org/en-US/firefox/addon/colorzilla/): This gives you a color picker where you can find the hex code for any pixel on the site. Makes color matching easy.

[![539-64_0.png](/sites/default/files/539-64_0.png)](https://addons.mozilla.org/en-US/firefox/addon/measureit/)

[MeasureIt](https://addons.mozilla.org/en-US/firefox/addon/measureit/): I use this to give approximate measurements of any element on the site.

[![lastpass.png](/sites/default/files/lastpass.png)](https://lastpass.com/)

[LastPass](https://lastpass.com/): Here is where JD and I agree. One password to rule them all. Lastpass is the best password manager I’ve found. It is cross browser and cross platform compatible. Password sharing with other users makes it the obvious choice for a team environment. On top of that the security team has responded to every complaint with lightning speed.

Development Environment
-----------------------

[![notepad2.png](/sites/default/files/notepad2.png)](http://code.kliu.org/misc/notepad2/)

[Notepad2](http://code.kliu.org/misc/notepad2/)(modified): I like the small size and speed of this notepad replacement, and it supports code folding, syntax highlighting, and will replace Windows notepad as the default notepad program. A common alternative is [Notepad++](https://notepad-plus-plus.org/) which has more features, but I personally don’t like the tabbed interface. Plus Notepad++ is nearly twice the file size of Notepad2.

[![winscp_0.png](/sites/default/files/winscp_0.png)](http://winscp.net/eng/index.php)

[WinSCP](http://winscp.net/eng/index.php): This is my SFTP client. It is brilliant for a few reasons. First, it can open files directly in Notepad2 and monitor the file so that every time I save (Ctrl+S) it will automatically upload the file back to the server. Second, it integrates with [Putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/) so I have one-click login to a Putty terminal window using the same credentials that are stored in WinSCP. And lastly, I’m the only person in the office who can create symlinks on Rackspace Cloud Sites, because WinSCP somehow creates them even though Cloud Sites has no shell access.  (Anyone know why this works, drop me a comment below)

[![clipboard-2-64.png](/sites/default/files/clipboard-2-64.png)](http://nes.bplaced.net/clipboarder.html)

[Clipboarder Gadget](http://nes.bplaced.net/clipboarder.html): I usually don’t like cluttering my desktop with gadgets, but this one has changed my life. Windows can only store one item in the clipboard when you copy or cut, but often times you probably wish you could look back through previously copied items. There are a number of tools that give you this kind of funtionality, but I’ve never found one as easy to use (Win+c & Win+v to toggle through items right on the desktop).

[![tortoise_med.png](/sites/default/files/tortoise_med.png)](http://tortoisesvn.net/)

[TortoiseSVN](http://tortoisesvn.net/) & [TortoiseGit](https://tortoisegit.org): The tortoise interfaces seamlessly integrate into windows explorer making source control as easy as it can get on Windows. This close integration means there is no need for an additional program interface except when navigating previous commits.

[![dropbox-icon-64x64.png](/sites/default/files/dropbox-icon-64x64.png)](https://www.dropbox.com/)

[DropBox](https://www.dropbox.com/): The biggest reason that Dropbox has made this list is that it single-handedly removed all of my file sharing frustrations. No more fighting with VirtualBox Guest Additions and shared folders. No more SMB configurations so I can find my files on the Mac boxes around here. Dropbox installed on every physical machine, VM, tablet, and smartphone I touch equals piece of mind and stress free sharing.

Wrap Up
-------

There are of course a lot more apps I use on my Microsoft Window 7 machine while developing Drupal site, but this list contains my vital tools.  Mac users be sure and check out JD's post, [Tools of the Trade](/insights/tools-trade). If you have other tools you like to use or a comment about this list, leave us some feedback in the comments section below.

_Image: [JanneM](http://www.flickr.com/photos/jannem/)_