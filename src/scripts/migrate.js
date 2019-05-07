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
		const title = row.title
		const alias = row.alias.split('/insights/')[1]
		const category = row.term_node_tid;
		var bodyreplace = row.body.replace(/sites\/default\/files\/inline-images/g, "assets")
		var bodyreplace = bodyreplace.replace(/sites\/default\/files/g, "assets")
		const body = turndownService.turndown(bodyreplace);
		const date = new Date(row.created * 1000);
	  var summary = row.body_1.replace(/\r?\n|\r/g, ' ').replace('“', '"').replace('”', '"');
		const author = row.uid;
		var image = row.field_teaser_image;
		var n = image.lastIndexOf('/');
		var imagefilename  = image.substring(n + 1);
		var imagefilename = imagefilename.replace('%20', '-');
		const folder = '/../pages/insights/';
  	const path = __dirname + folder;
		fs.mkdir(path, (err) => { });
  		const file = fs.createWriteStream(path + alias + '.md', { flags: 'w' });
  // This is here incase any errors occur
		  file.on('open', function () {
		    file.write('---\n');
				file.write("title: '" + title + "'\n");
				file.write('templateKey: blog-post\n');
		    file.write('date: ' + date.toISOString() + '\n');
				file.write('category: \n  -' + category + '\n');
				file.write('alias: ' + alias + '\n');
				file.write("summary: > \n " + summary + "\n");
				file.write('author: ' + author + '\n');
		    if (image) {
					// taken from: https://stackoverflow.com/a/22907134/9055
					options = {
						url: image,
						dest: __dirname + '/../../static/assets/' + imagefilename       // Save to /path/to/dest/photo.jpg
					}		
					// download.image(options)
					// .then(({ filename, image }) => {
					// 	console.log('File saved to', imagefilename)
						
					// })
					// .catch((err) => {
					// 	console.error(err)
					// })
					file.write('image: /assets/' + imagefilename + '\n');	
		      // file.write(`![${image.filename}](./${image.filename})\n\n`);
				}
				file.write('---\n\n');
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

