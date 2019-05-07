---
title: 'BillBoards Progress'
templateKey: blog-post
date: 2005-07-20T05:00:00.000Z
category: 
  -Development
alias: billboards-progress
summary: > 
 We have been bootstrapping our new BillBoards product for the Boerne Chamber of Commerce website for about the last week and a half. BillBoards is a hosted text ad solution that I've written using the Ruby on Rails framework. But, why does the internet need another ad service? It differs in two main aspects.
author: Digett
image: /assets/post-placeholder.png
---

We have been bootstrapping our new BillBoards product for the Boerne Chamber of Commerce website for about the last week and a half. BillBoards is a hosted text ad solution that I've written using the Ruby on Rails framework. But, why does the internet need another ad service? It differs in two main aspects. One, it allows the Boerne Chamber website to display focused ads from businesses that are members of the chamber, rather than some random advertiser that happened to have purchased the right keywords. Secondly, we've implemented a basic auctioning system so that all the members have a fair chance to get the ad spots they desire.

Building this product has been a challenging departure from our normal projects. I finally got to try out some ideas I picked up from Jason Fried's Making Big Things Happen With Small Teams presentation at SXSW 2005. When it came time to actually build the application, we went straight for the layout. A line was drawn marking what functionality we needed for the initial launch and we went with that. About 150 tests and 2000 lines of code later, the first iteration of BillBoards was ready for launch.

It has been an exciting period for me personally. It was the first project I've had to really apply my Ruby on Rails knowledge, and I learned a lot from it. I had the opportunity to put ActiveRecord in some awkward positions with the amount of temporal data in BillBoards. It has a fairly complex schema with a lot of rules governing how the auctions work. I've also started on the path to test driven enlightenment. It takes discipline and dedication, but ultimately makes for a more stable application.

As progress is made, I'll be posting more about my experiences with Rails. I'm also working on extracting some of the common functionality out into extensions that anyone can use. Stay tuned.