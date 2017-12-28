const fs = require('fs');
//Works bettern then using require('./data.json' )
let dataTable = fs.readFileSync("./data.json","utf8").toString();
//makes object headers valid because PageClip is shit at making a proper json file
dataTable.replace("itemEid", `'itemEid'`);
dataTable.replace("payload", `'payload'`);
dataTable.replace("code", `'code'`);
dataTable.replace("name", `'name'`);
dataTable.replace("createdAt", `'createdAt'`);
dataTable.replace("archivedAt", `'archivedAt'`);
//Attempt at making data.json actually good, doesn't do anything...
fs.writeFileSync("./data.json", dataTable, "utf8");
//turns dataTable into a proper object
dataTable = eval(dataTable);
//Page generator
dataTable.forEach(function (e) {
  let name = e.payload.name;
  let code = e.payload.code;
  let newPage = fs.open('./docs/user-made/'+ name + '.html', 'w', (err, fd) => {
    if (err) throw err;
    //html page template, could use some work
    let myContent = "<!DOCTYPE html>\n<html>\n<head>\n<title>"+name+"</title>\n</head>\n<body>\n<script>"+code+"</script>\n</body>\n</html>";
    fs.write(fd, myContent, (err, written, string) => {
      if (err) throw err;
      //might just remove the string part as it spams te console
      console.log(string + "\n" + "Cost:" + written);
  })
  })
  
})