const fs = require('fs');

var Request = require("request");

var download = require('image-downloader')

var result = '';

Request.get("https://gatsby-digett-d8.pantheonsite.io/api/comments.json", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }

		result = JSON.parse(body)
		
		const folder = '/../pages/comments/';
	  const path = __dirname + folder;
		fs.mkdir(path, (err) => { });
		const yourSite = "http://digett.netlify.com"
		
		const file = fs.createWriteStream(path + 'comments.xml', { flags: 'w' });

		file.write(`<?xml version="1.0" encoding="UTF-8"?>
		<rss version="2.0"
			xmlns:content="http://purl.org/rss/1.0/modules/content/"
			xmlns:dsq="http://www.disqus.com/"
			xmlns:dc="http://purl.org/dc/elements/1.1/"
			xmlns:wp="http://wordpress.org/export/1.0/"
		>
			<channel>`)

	result.forEach(row => {
		const title = row.title
		const alias = row.alias
		const nodecreated = row.created
		const commentcreated = row.created_1
		const comment = row.comment_body
		const id = row.nid
		const name = row.name
		const mail = row.mail
		//   file.on('open', function () {
		    file.write('<item>');
				file.write(`<title>${title}</title>`);
				file.write(`<link>${yourSite}${alias}</link>`);
				file.write(`<content:encoded><![CDATA[${row.body}]]></content:encoded>`);
				file.write(`<dsq:thread_identifier>${id}</dsq:thread_identifier>`);
				file.write(`<wp:post_date_gmt>${nodecreated}</wp:post_date_gmt>`);
				file.write(`<wp:comment_status>open</wp:comment_status>`);
				file.write(`<wp:comment>`);
				file.write(`<wp:comment_id>${row.cid}</wp:comment_id>`);
				file.write(`<wp:comment_author>${row.name}</wp:comment_author>`);
				file.write(`<wp:comment_author_email>${row.mail}</wp:comment_author_email>`);
				file.write(`<wp:comment_date_gmt>${commentcreated}</wp:comment_date_gmt>`);
				file.write(`<wp:comment_content><![CDATA[${
					row.comment_body
				  }]]></wp:comment_content>`);
				file.write(`<wp:comment_approved>1</wp:comment_approved>`);
				file.write(`<wp:comment_parent>${row.pid}</wp:comment_parent>`);
				file.write(`</wp:comment></item>`);

		//   });
		});
		file.write(`</channel></rss>`);
	file.end();
	})
	

	function getDisqusDate(date) {
		return (
			date.toISOString().slice(0, 10) + " " + date.toISOString().slice(11, 19)
		)
	}

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

