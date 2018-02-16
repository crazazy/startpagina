const Pageclip = require('pageclip');
const pageClipAPIkey = process.env.PAGECLIPKEY;
const pageclip = new Pageclip(pageClipAPIkey);
let myData = pageclip.fetch().then((response) => {
  console.log(response.data); 
});
