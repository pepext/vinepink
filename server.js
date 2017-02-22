// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

var jsonfile = require('jsonfile');


var file = './nodos.json';

function tira(entrada,rel)
{for (var i=0; i<entrada.length;i++)
  	{if(entrada[i].dest==rel)
  		{
  			rel=entrada[i].orig;
  			console.log(rel); dreams.push('\n'+rel);
  			i=0;
  		}
  	}

}

function rel0(cto){
  jsonfile.readFile(file, function(err, obj) {
  //console.dir(obj);
  var rela=obj.rel;
  var cou=0, rel1=0;
    dreams.push('\n\n'+cto);
  for (var i=0; i<rela.length;i++)
  	{if(rela[i].dest==cto)
  		{cou++; 
        rel1= rela[i].orig;
        console.log('\n'+rel1); dreams.push('\n'+rel1);
  			tira(rela,rel1);
  		}
  	}
  	if (cou==0) console.log('\nValor no registrado');
    dreams.push('\nValor no registrado');
});
}
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/dreams", function (request, response) {
  response.send(dreams);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  rel0(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now
var dreams = [];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
