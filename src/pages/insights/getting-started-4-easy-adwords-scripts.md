---
title: 'Getting Started With 4 Easy AdWords Scripts'
templateKey: blog-post
date: 2013-12-05T15:54:03.000Z
category: 
  -Analytics, Marketing, SEM and SEO, Strategy, Tools of the Trade
alias: getting-started-4-easy-adwords-scripts
summary: > 
 If you aren’t already using scripts in your AdWords account, you’re missing out. The possibilities of what you can do with them are only limited by your creativity (and coding skills, obviously). Even for JavaScript rookies like myself, there are still easy scripts that can make your life easier.
author: Wes Mills
image: /assets/google-adwords-scripts.png
---

If you aren’t already using scripts in your AdWords account, you’re missing out. The possibilities of what you can do with them are only limited by your creativity (and coding skills, obviously). Even for JavaScript rookies like myself, there are still easy scripts that can make your life easier.

What is an AdWords script?
--------------------------

[AdWords scripts](https://developers.google.com/adwords/scripts/) allow a user to programmatically access their AdWords account using JavaScript. Like I said above, what you can do with this is only limited by your creativity.

For example, let’s say you own a sports apparel store that specializes in NBA swag and you’re advertising jerseys using AdWords. During the NBA season, there are multiple games every day. Using JavaScript, you could write code that dynamically adjust bids higher for the teams that won. Brilliant, right?

Inputting the scripts
---------------------

This is where we’ll start. You’ll find the “Create and Manage Scripts” menu option concealed under “Automate” on the campaigns tab.

![](/sites/default/files/scripts_step_1_0.png)

After navigating here, you’ll end up on a page where you can create, schedule, and manage all of your scripts. From here, select the “+ Script” button shown below.

![](/sites/default/files/scripts_step_2_0.png)

Now you’ll be shown the box where you can easily copy and paste any AdWords scripts you have. Remember to delete what shows up in the box by default when pasting a script.

![](/sites/default/files/scripts_step_3_0.png)

And finally, when you’re done adding your script and making the necessary changes, go ahead and save it. After you save, you can navigate back to the scripts menu and schedule your script.

![](/sites/default/files/scripts_step_4_0.png)

Four easy-to-use AdWords scripts
--------------------------------

My NBA example is complicated; the simpler scripts below are just four of my favorites that I use regularly. All of them require little programming knowledge and are essentially “plug and play.” If you’re hungry for more, my favorite [AdWords scripts blog](http://www.freeadwordsscripts.com/) has a plethora of them to choose from. The source code for each script is found underneath setup instructions.

### Daily account summary report

The origins of this script can be found [directly from Google](https://developers.google.com/adwords/scripts/docs/solutions/account-summary). This one is my favorite because I can check it every morning, wherever I am. Since it updates to a Google Spreadsheet, even checking it on your smartphone is nice. It gives a nice snapshot of performance from an account level.

![](/sites/default/files/account_summary_screenshot_0.png)

#### Setup

This one does involve some initial setup. But getting it going is simple.

1.  First, make a copy of [this spreadsheet](https://docs.google.com/spreadsheet/ccc?key=0Agg6qWimbbe4dG5rWUZRalRQUG16Tmx5d2wwb1lkR3c) in your Drive account. (File > Make a copy…)
2.  Following the instructions above, create a new script then copy and paste the source code below.
3.  Be sure to update “SPREADSHEET\_URL” with the URL of your new template.
4.  Lastly, to be sure you have it updating every morning, it has to be scheduled to run every day at a set time. Google recommends scheduling it at 5:00am, because there sometimes can be a delay in the statistics. 

var SPREADSHEET\_URL \= "\[YOUR\_URL\]";

function main() {
  var spreadsheet \= SpreadsheetApp.openByUrl(SPREADSHEET\_URL);
  spreadsheet.getRangeByName("account\_id\_report").setValue(AdWordsApp.currentAccount().getCustomerId());  
  
  var yesterday \= getYesterday();
  var last\_check \= spreadsheet.getRangeByName("last\_check").getValue();
  // Checks every day from last day checked to yesterday inclusive. If there isn't a last date checked,
  // checks yesterday.
  var date;
  if (last\_check.length \== 0) {
    date \= new Date(yesterday);
  } else {
    date \= new Date(last\_check); 
    date.setDate(date.getDate() + 1);
  }
  
  var rows \= \[\];
  
  while (date.getTime() <= yesterday.getTime()) {
    var row \= getReportRowForDate(date);
    rows.push(\[new Date(date), row\['Cost'\], row\['AverageCpc'\], row\['Ctr'\], row\['AveragePosition'\], row\['Impressions'\], row\['Clicks'\]\]);
    date.setDate(date.getDate() + 1);
  }
  
  if (rows.length \> 0) {
    var access \= new SpreadsheetAccess(SPREADSHEET\_URL, "Report");
    var emptyRow \= access.findEmptyRow(6, 2);
    if (emptyRow < 0) {
      access.addRows(rows.length);
      emptyRow \= access.findEmptyRow(6, 2);
    }
    access.writeRows(rows, emptyRow, 2);
    
    var last\_check \= spreadsheet.getRangeByName("last\_check").setValue(yesterday);
    var email \= spreadsheet.getRangeByName("email").getValue();
  
    if (email) {
      sendEmail(email);
    }
  }
}

function sendEmail(email) {
  var day \= getYesterday();
  var yesterdayRow \= getReportRowForDate(day);
  day.setDate(day.getDate() \- 1);
  var twoDaysAgoRow \= getReportRowForDate(day);
  day.setDate(day.getDate() \- 5);
  var weekAgoRow \= getReportRowForDate(day);
  
  var html \= \[\];
  html.push(
    "<html>",
      "<body>", 
        "<table width=800 cellpadding=0 border=0 cellspacing=0>", 
          "<tr>", 
            "<td colspan=2 align=right>", 
              "<div style='font: italic normal 10pt Times New Roman, serif; margin: 0; color: #666; padding-right: 5px;'>Powered by AdWords Scripts</div>", 
            "</td>", 
          "</tr>", 
          "<tr bgcolor='#3c78d8'>", 
            "<td width=500>", 
              "<div style='font: normal 18pt verdana, sans-serif; padding: 3px 10px; color: white'>Account Summary report</div>", 
            "</td>", 
            "<td align=right>", 
              "<div style='font: normal 18pt verdana, sans-serif; padding: 3px 10px; color: white'>", AdWordsApp.currentAccount().getCustomerId(), "</h1>", 
            "</td>", 
            "</tr>", 
          "</table>", 
          "<table width=800 cellpadding=0 border=0 cellspacing=0>", 
            "<tr bgcolor='#ddd'>", 
              "<td></td>", 
              "<td style='font: 12pt verdana, sans-serif; padding: 5px 0px 5px 5px; background-color: #ddd; text-align: left'>Yesterday</td>", 
              "<td style='font: 12pt verdana, sans-serif; padding: 5px 0px 5px 5px; background-color: #ddd; text-align: left'>Two Days Ago</td>", 
              "<td style='font: 12pt verdana, sans-serif; padding: 5px 0px 5x 5px; background-color: #ddd; text-align: left'>A week ago</td>", 
            "</tr>",
            emailRow('Cost', 'Cost', yesterdayRow, twoDaysAgoRow, weekAgoRow),
            emailRow('Average Cpc', 'AverageCpc', yesterdayRow, twoDaysAgoRow, weekAgoRow),
            emailRow('Ctr', 'Ctr', yesterdayRow, twoDaysAgoRow, weekAgoRow),
            emailRow('Average Position', 'AveragePosition', yesterdayRow, twoDaysAgoRow, weekAgoRow),
            emailRow('Impressions', 'Impressions', yesterdayRow, twoDaysAgoRow, weekAgoRow),
            emailRow('Clicks', 'Clicks', yesterdayRow, twoDaysAgoRow, weekAgoRow),
        "</table>",
      "</body>",
    "</html>");
  MailApp.sendEmail(email, "AdWords Account " + AdWordsApp.currentAccount().getCustomerId() + " Summary Report", "", {htmlBody: html.join("\\n")});
}

function emailRow(title, column, yesterdayRow, twoDaysAgoRow, weekAgoRow) {
  return "<tr> \\
 <td style='padding: 5px 10px'>" + title + "</td> \\
 <td style='padding: 0px 10px'>" + yesterdayRow\[column\] + "</td> \\
 <td style='padding: 0px 10px'>" + twoDaysAgoRow\[column\] + formatChangeString(yesterdayRow\[column\], twoDaysAgoRow\[column\]) + "</td> \\
 <td style='padding: 0px 10px'>" + weekAgoRow\[column\] + formatChangeString(yesterdayRow\[column\], weekAgoRow\[column\]) + "</td> \\
 </tr>";
}

// returns noon in the timezone of the account
function getYesterday() {
  var now \= new Date(Utilities.formatDate(new Date(), 
      AdWordsApp.currentAccount().getTimeZone(), "MMM dd,yyyy HH:mm:ss"));
  var yesterday \= new Date(now.getTime() \- 24 \* 3600 \* 1000);
  yesterday.setHours(12);
  return yesterday;
}

function getReportRowForDate(date) {
  var accountDate \= new Date(Utilities.formatDate(date,
      AdWordsApp.currentAccount().getTimeZone(), "MMM dd,yyyy HH:mm:ss"));
  var dateString \= Utilities.formatDate(accountDate, "PST", "yyyyMMdd");
  return getReportRowForDuring(dateString + "," + dateString);
}

function getReportRowForDuring(during) {
  var report \= AdWordsApp.report(
      "SELECT Cost, AverageCpc, Ctr, AveragePosition, Impressions, Clicks " +
      "FROM ACCOUNT\_PERFORMANCE\_REPORT " +
      "DURING " + during);
  return report.rows().next();
}

function formatChangeString(newValue,  oldValue) {
  var x \= newValue.indexOf('%');
  if (x != \-1) {
    newValue \= newValue.substring(0, x);
    var y \= oldValue.indexOf('%');
    oldValue \= oldValue.substring(0, y);
  }
  
  var change \= parseFloat(newValue \- oldValue).toFixed(2);
  var changeString \= change;
  if (x != \-1) {
    changeString \= change + '%';
  }
  
  if (change \>= 0) {
    return "<span style='color: #38761d; font-size: 8pt'> (+" + changeString + ")</span>"; 
  } else {
    return "<span style='color: #cc0000; font-size: 8pt'> (" + changeString +  ")</span>"; 
  }
}

function SpreadsheetAccess(spreadsheetUrl, sheetName) {
  this.spreadsheet \= SpreadsheetApp.openByUrl(spreadsheetUrl);
  this.sheet \= this.spreadsheet.getSheetByName(sheetName);
  
  // what column should we be looking at to check whether the row is empty?
  this.findEmptyRow \= function(minRow, column) {
    var values \= this.sheet.getRange(minRow, column, this.sheet.getMaxRows(), 1).getValues();
    for (var i \= 0; i < values.length; i ++) {
      if (!values\[i\]\[0\]) {
        return i + minRow;
      }
    }
    return \-1;
  }
  this.addRows \= function(howMany) {
    this.sheet.insertRowsAfter(this.sheet.getMaxRows(), howMany);
  }
  this.writeRows \= function(rows, startRow, startColumn) {
    this.sheet.getRange(startRow, startColumn, rows.length, rows\[0\].length).setValues(rows);
  }
}

### Search query performance report

Looking at your search queries at least once a week is something that you should be doing to look for more potential negative and positive keywords. This script pulls search query performance over the last seven days, outputs it in a Google Doc, and emails a user-defined list of email addresses when it’s finished. The author of this script is [Russ Savage](http://www.freeadwordsscripts.com/2013/03/store-search-query-performance-report.html) and you can find all of his awesome scripts on his site.

#### Setup

The setup here is fairly straightforward. Create a new Google Doc, input your Google Doc URL and email(s), then you’re good to go.

//-----------------------------------
// Store Search Query Perf Report in Google Doc
// Created By: Russ Savage
// FreeAdWordsScripts.com
//-----------------------------------
function main() {
  var date\_range \= 'LAST\_7\_DAYS';
  var ignore\_exact \= true;
  var to \= \["email\_1@my\_company.com","email\_2@my\_company.com"\];
  var spreadsheet\_url \= "your spreadsheet url goes here";
   
  var columns \= \['AccountDescriptiveName',
                 'CampaignName',
                 'AdGroupName',
                 'KeywordTextMatchingQuery',
                 'MatchType',
                 'Query',
                 'Device',
                 'Impressions',
                 'Clicks',
                 'Cost',
                 'Conversions',
                 'AverageCpc',
                 'CostPerConversion',
                 'ConversionRate',
                 'Ctr'\];
  var columns\_str \= columns.join(',') + " ";
   
  var sheet \= getSpreadsheet(spreadsheet\_url).getActiveSheet();
  sheet.clear();
  sheet.appendRow(columns);
   
  var report\_iter \= AdWordsApp.report(
    'SELECT ' + columns\_str +
    'FROM SEARCH\_QUERY\_PERFORMANCE\_REPORT ' +
    'DURING ' + date\_range, {
      includeZeroImpressions: false,
      apiVersion: 'v201302'
    }).rows();
   
  while(report\_iter.hasNext()) {
    var row \= report\_iter.next();
    if(ignore\_exact && row\['MatchType'\].indexOf('exact') \>= 0) { continue; }
    var row\_array \= \[\];
    for(var i in columns) {
       row\_array.push(row\[columns\[i\]\]);
    }
    sheet.appendRow(row\_array); 
  }
   
  for(var i in to) {
    MailApp.sendEmail(to\[i\], "Search Query Report Ready", spreadsheet\_url);
  }
} 
 
function getSpreadsheet(spreadsheetUrl) {
  var matches \= new RegExp('key=(\[^&#\]\*)').exec(spreadsheetUrl);
  if (!matches || !matches\[1\]) {
    throw 'Invalid spreadsheet URL: ' + spreadsheetUrl;
  }
  var spreadsheetId \= matches\[1\];
  return SpreadsheetApp.openById(spreadsheetId);
}

### Track account, campaign, and ad group level Quality Scores

If you’re unsure about what exactly Quality Score is, I would recommend reading about [how Quality Score is calculated](/insights/how-google-calculates-adwords-quality-score) and [everything that goes into Quality Score](/insights/how-google-calculates-adwords-quality-score). This script is also from [Russ Savage](http://www.freeadwordsscripts.com/2013/04/store-account-campaign-and-adgroup.html), and it does something that Google doesn’t allow you to do: view Quality Scores over time.

It’s arguable whether there’s actionable insight available in doing this, but it’s always nice to have the data available. This script looks at the top 50,000 keywords in your account. (As a sidenote, re-running the script does not overwrite the previous entries.) 

#### Setup

Create a new Google Spreadsheet and copy the URL in the script. Once you’ve done that, copy the script into AdWords and schedule it to run every 30 days.

/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Store Account, Campaign, and AdGroup Level Quality Score
\* Version 1.2
\* ChangeLog v1.2
\*  - Changed status to ENABLED
\* ChangeLog v1.1
\*  - Added APPEND option
\*  - Added ability to create spreadsheet sheets
\*  - Updated logic for faster spreadsheet insertion
\* Created By: Russ Savage
\* FreeAdWordsScripts.com
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/
var SIG\_FIGS \= 10000; //this will give you 4 decimal places of accuracy
var APPEND \= true; //set this to false to overwrite your data daily
  
function main() {
  var SPREADSHEET\_URL \= "PUT YOUR SPREADSHEET HERE";
  var date\_str \= Utilities.formatDate(new Date(),AdWordsApp.currentAccount().getTimeZone(),'yyyy-MM-dd');
  var account\_id \= AdWordsApp.currentAccount().getCustomerId();
    
  var kw\_iter \= AdWordsApp.keywords()
    .withCondition("Status = ENABLED")
    .forDateRange("LAST\_30\_DAYS")
    .withCondition("Impressions > 0")
    .orderBy("Impressions DESC")
    .withLimit(50000)
    .get();
   
  //This is where i am going to store all my data
  var account\_score\_map \= {};
  var camp\_score\_map \= {};
  var ag\_score\_map \= {};
     
  while(kw\_iter.hasNext()) {
    var kw \= kw\_iter.next();
    var kw\_stats \= kw.getStatsFor("LAST\_30\_DAYS");
    var imps \= kw\_stats.getImpressions();
    var qs \= kw.getQualityScore();
    var camp\_name \= kw.getCampaign().getName();
    var ag\_name \= kw.getAdGroup().getName();
    var imps\_weighted\_qs \= (qs\*imps);
    \_loadEntityMap(account\_score\_map,account\_id,imps\_weighted\_qs,imps);
    \_loadEntityMap(camp\_score\_map,camp\_name,imps\_weighted\_qs,imps);
    \_loadEntityMap(ag\_score\_map,camp\_name + "~~!~~" + ag\_name,imps\_weighted\_qs,imps);
  }
  
  //Make sure the spreadsheet has all the sheets
  \_addSpreadsheetSheets(SPREADSHEET\_URL,\['Account','Campaign','AdGroup'\]);
   
  //Load Account level QS
  var sheet \= SpreadsheetApp.openByUrl(SPREADSHEET\_URL).getSheetByName('Account');
  \_addHeadingsIfNeeded(sheet,\['Date','Account','QS'\]);
  var e \= account\_score\_map\[account\_id\];
  sheet.appendRow(\[date\_str,account\_id,Math.round(e.imps\_weighted\_qs / e.tot\_imps \* SIG\_FIGS)/SIG\_FIGS\]);
    
  //Load Campaign level QS
  sheet \= SpreadsheetApp.openByUrl(SPREADSHEET\_URL).getSheetByName('Campaign');
  \_addHeadingsIfNeeded(sheet,\['Date','Account','Campaign','QS'\]);
  var to\_write \= \[\];
  for(var i in camp\_score\_map) {
    var e \= camp\_score\_map\[i\];
    to\_write.push(\[date\_str,
                   account\_id,
                   i,
                   Math.round(e.imps\_weighted\_qs / e.tot\_imps \* SIG\_FIGS)/SIG\_FIGS\]);
  }
  \_writeDataToSheet(sheet,to\_write);
    
  //Load Campaign + AdGroup level QS
  sheet \= SpreadsheetApp.openByUrl(SPREADSHEET\_URL).getSheetByName('AdGroup');
  \_addHeadingsIfNeeded(sheet,\['Date','Account','Campaign','AdGroup','QS'\]);
  to\_write \= \[\];
  for(var i in ag\_score\_map) {
    var e \= ag\_score\_map\[i\];
    to\_write.push(\[date\_str,
                   account\_id,
                   i.split('~~!~~')\[0\],
                   i.split('~~!~~')\[1\],
                   Math.round(e.imps\_weighted\_qs / e.tot\_imps \* SIG\_FIGS)/SIG\_FIGS\]);
  }
  \_writeDataToSheet(sheet,to\_write);
}
 
// Super fast spreadsheet insertion
function \_writeDataToSheet(sheet,to\_write) {
  var last\_row \= sheet.getLastRow();
  var numRows \= sheet.getMaxRows();
  if((numRows\-last\_row) < to\_write.length) {
    sheet.insertRows(last\_row+1,to\_write.length\-numRows+last\_row); 
  }
  var range \= sheet.getRange(last\_row+1,1,to\_write.length,to\_write\[0\].length);
  range.setValues(to\_write);
}
 
// Helper function to add the sheets  to the spreadsheet if needed
function \_addSpreadsheetSheets(url,sheet\_names) {
  var spreadsheet \= SpreadsheetApp.openByUrl(url);
  var all\_sheets \= spreadsheet.getSheets();
  var all\_sheet\_names \= \[\];
  for(var i in all\_sheets) {
    all\_sheet\_names.push(all\_sheets\[i\].getName());
  }
   
  for(var i in sheet\_names) {
    var name \= sheet\_names\[i\];
    if(all\_sheet\_names.indexOf(name) \== \-1) {
      spreadsheet.insertSheet(name);
    } else {
      if(!APPEND) {
        spreadsheet.getSheetByName(name).clear();
      }
    }
  }
}
 
// Helper function to load the map for storing data
function \_loadEntityMap(map,key,imps\_weighted\_qs,imps) {
  if(!map\[key\]) {
    map\[key\] \= { imps\_weighted\_qs : imps\_weighted\_qs, tot\_imps : imps };
  } else {
    map\[key\].imps\_weighted\_qs += imps\_weighted\_qs;
    map\[key\].tot\_imps += imps;
  }
}
  
//Helper function to add headers to sheet if needed
function \_addHeadingsIfNeeded(sheet,headings) {
  if(sheet.getRange('A1:A1').getValues()\[0\]\[0\] \== "") {
    sheet.clear();
    sheet.appendRow(headings);
  }
}

### Ad, ad group, keyword, or campaign creation date

Yet another script from the [Russ Savage gold mine](http://www.freeadwordsscripts.com/2013/07/figuring-out-when-your-ad-was-created.html). Because Google doesn’t actually store when these entities were created, the script uses the day it first started receiving impressions, which generally is the day it was created.

This is most useful for A/B testing and seeing how long specific ads have been running. When A/B testing, it’s always important to leave enough time to collect data that can become actionable insight. Having a label showing the date created helps to make sure you don’t make changes to your account too soon (or too late). 

#### Setup

As far as setting up goes, this one is by far the easiest. Copy and paste the code in a new script and define which entity you want to track in the “ENTITY” line (if you want to track all of them, make a new script for each one). And you’re done.

Depending on your account size, this script can take some time to complete so be patient!

/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Track Entity Creation Date
\* Version 1.4
\* Changelog v1.4
\*  - Removed apiVersion from reporting call
\* Changelog v1.3
\*  - Updated script to handle all entities
\* Changelog v1.2
\*  - Fixed an issue with comparing dates
\* ChangeLog v1.1
\*  - Updated logic to work with larger accounts
\* Created By: Russ Savage
\* http://www.FreeAdWordsScripts.com
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/
//All my labels will start with this. For example: Created:2013-05-01
var LABEL\_PREFIX \= 'Created:';
var DAYS\_IN\_REPORT \= 30;
var ENTITY \= 'ad'; //or adgroup or keyword or campaign
  
function main() {
  //First we get the impression history of our entity
  var ret\_map \= getImpressionHistory();
  //Then we apply our labels
  applyLabels(ret\_map);
}
  
//Function to apply labels to the ads in an account
function applyLabels(ret\_map) {
  var iter;
  if(ENTITY \=== 'campaign') { iter \= AdWordsApp.campaigns().get(); }
  if(ENTITY \=== 'adgroup') { iter \= AdWordsApp.adGroups().get(); }
  if(ENTITY \=== 'ad') { iter \= AdWordsApp.ads().get(); }
  if(ENTITY \=== 'keyword') { iter \= AdWordsApp.keywords().get(); }
   
  while(iter.hasNext()) {
    var entity \= iter.next();
    var id \= entity.getId();
    if(ret\_map\[id\]) {
      var label\_name \= LABEL\_PREFIX+Utilities.formatDate(ret\_map\[id\], AdWordsApp.currentAccount().getTimeZone(), "yyyy-MM-dd");
      createLabelIfNeeded(label\_name);
      entity.applyLabel(label\_name);
    }
  }
}
  
//This is a helper function to create the label if it does not already exist
function createLabelIfNeeded(name) {
  if(!AdWordsApp.labels().withCondition("Name = '"+name+"'").get().hasNext()) {
    AdWordsApp.createLabel(name);
  }
}
  
//A helper function to find the date days ago
function getDateDaysAgo(days) {
  var the\_past \= new Date();
  the\_past.setDate(the\_past.getDate() \- days);
  return Utilities.formatDate(the\_past,AdWordsApp.currentAccount().getTimeZone(),"yyyyMMdd");
}
  
//A helper function to compare dates.
//Copied from: http://goo.gl/uW48a
function diffDays(firstDate,secondDate) {
  var oneDay \= 24\*60\*60\*1000; // hours\*minutes\*seconds\*milliseconds
  return Math.round(Math.abs((firstDate.getTime() \- secondDate.getTime())/(oneDay))); 
}
  
function getImpressionHistory() {
  var API\_VERSION \= { includeZeroImpressions : false };
  var first\_date \= new Date('10/23/2000');
  var max\_days\_ago \= diffDays(first\_date,new Date());
  var cols \= \['Date','Id','Impressions'\];
  var report \= { 
    'campaign' : 'CAMPAIGN\_PERFORMANCE\_REPORT',
    'adgroup' : 'ADGROUP\_PERFORMANCE\_REPORT',
    'ad' : 'AD\_PERFORMANCE\_REPORT',
    'keyword' : 'KEYWORDS\_PERFORMANCE\_REPORT'}\[ENTITY\];
  var ret\_map \= {};
  var prev\_days\_ago \= 0;
  for(var i \= DAYS\_IN\_REPORT; i < max\_days\_ago; i+=DAYS\_IN\_REPORT) {
    var start\_date \= getDateDaysAgo(i);
    var end\_date \= getDateDaysAgo(prev\_days\_ago);
    var date\_range \= start\_date+','+end\_date;
    Logger.log('Getting data for ' + date\_range);
    var query \= \['select',cols.join(','),'from',report,'during',date\_range\].join(' ');
    var report\_iter \= AdWordsApp.report(query, API\_VERSION).rows();
    if(!report\_iter.hasNext()) { Logger.log('No more impressions found. Breaking.'); break; } // no more entries
    while(report\_iter.hasNext()) { 
      var row \= report\_iter.next();
      if(ret\_map\[row\['Id'\]\]) {
        var \[year,month,day\] \= (row\['Date'\]).split('-');
        var from\_row \= new Date(year, parseFloat(month)\-1, day);
        var from\_map \= ret\_map\[row\['Id'\]\];
          
        if(from\_row < from\_map) {
          ret\_map\[row\['Id'\]\] \= from\_row;
        }
      } else {
        var \[year,month,day\] \= (row\['Date'\]).split('-');
        ret\_map\[row\['Id'\]\] \= new Date(year, parseFloat(month)\-1, day);
      }
    }
    prev\_days\_ago \= i;
  }
  return ret\_map;
}

Reaching success with Google AdWords
------------------------------------

Staying ahead of the curve with pay-per-click advertising can be difficult. But leveraging the latest techniques in the best way can add to the challenge.

If you’re having trouble getting your account to perform like a superstar, Digett is here for you! We have experience helping clients of all sizes get the most for their business out of AdWords. **[Contact us today for a free consultation](/contact) to get started! **