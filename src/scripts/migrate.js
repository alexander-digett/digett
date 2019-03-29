const fs = require('fs');

var TurndownService = require('turndown')

var turndownService = new TurndownService()

var Request = require("request");

var download = require('image-downloader')


var result = '';

Request.get("https://gatsby-digett-d8.pantheonsite.io/api/blog.json", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }

    result = JSON.parse(body)
    // console.dir(JSON.parse(body));

 //    for(var myKey in result) {
 //   console.log("key:"+myKey+", value:"+result[myKey].nid);
 //   console.log()

	// }

	result.forEach(row => {
		const title = row.title;
		const alias = row.alias.split('/insights/')[1];;
		const tags = row.term_node_tid;
		const body = turndownService.turndown(row.body);
		const date = new Date(row.created * 1000);
		const image = row.field_teaser_image;
		const folder = '/../pages/insights/';
  	const path = __dirname + folder + alias;
		fs.mkdir(path, (err) => { });
  		const file = fs.createWriteStream(path + '/index.md', { flags: 'w' });
  // This is here incase any errors occur
		  file.on('open', function () {
		    file.write('---\n');
		    file.write('title: "' + title + '"\n');
		    file.write('date: ' + date.toISOString() + '\n');
				file.write('tags: ' + JSON.stringify(tags) + '\n');
				file.write('alias: "' + alias + '"\n');
		    file.write('---\n\n');
		    if (image) {
					// taken from: https://stackoverflow.com/a/22907134/9055
					options = {
						url: image,
						dest: __dirname + '/../images/blog'       // Save to /path/to/dest/photo.jpg
					}		
		      download(options);
		      // file.write(`![${image.filename}](./${image.filename})\n\n`);
		    }
		    file.write(body);
		    file.end();
		  });
		});
	})

function slugify(string) {
  const a = "àáäâãåèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;"
  const b = "aaaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------"
  const p = new RegExp(a.split("").join("|"), "g")

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, "-and-") // Replace & with ‘and’
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters
    .replace(/\-\-+/g, "-") // Replace multiple — with single -
    .replace(/^-+/, "") // Trim — from start of text .replace(/-+$/, '') // Trim — from end of text
}



// Object.keys(result).map(e => {
//     console.log(`key= ${e} value = ${result[e]}`)
// });

