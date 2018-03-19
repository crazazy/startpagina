const jsdom = require('jsdom')
const fs = require('fs')
let page = fs.readFileSync(__dirname+'/docs/index.html')
let DOM = new jsdom(page)
const selector = DOM.window.document.getElementsByClassName("col-sm")
const files = fs.readdirSync(__dirname+"/docs/user-made/", options);
const myLength = files.length<12?files.length:12
for (i in myLength-1) {
	selector[i].innerHTML="<a href='./user-made/"+files[i]+"'>Website!</a>"
}