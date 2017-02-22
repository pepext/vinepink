// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.
var fs=require('fs');
var jsonfile = require('jsonfile');

//var rel0='0432';

var file = './nodos.json';

function tira(entrada,rel)
{for (var i=0; i<entrada.length;i++)
  	{if(entrada[i].dest==rel)
  		{
  			rel=entrada[i].orig;
  			dreams.push(rel);
  			i=0;
  		}
  	}
 
}

function mete(rel0){
jsonfile.readFile(file, function(err, obj) {
  //console.dir(obj);
  var rela=obj.rel;
  dreams.push('\n\n'+rel0); console.log(dreams);
  var cou=0, rel1=0;
  for (var i=0; i<rela.length;i++)
  	{if(rela[i].dest==rel0)
  		{cou++; 
        rel1= rela[i].orig;
        dreams.push('\n'+rel1);
  			tira(rela,rel1);
  		}
  	}
   	if (cou==0) dreams.push('\nValor no registrado');
});
}
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/dreams", function (request, response) {
  response.send(dreams); 
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  mete(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now
var dreams = [];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
