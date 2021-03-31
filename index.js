var fs = require('fs');
var http = require('http');
var url = require('url');
var glob = require( 'glob' );
var language_dict = {};   // dictionary to keep all the languages available on the system

glob.sync( './language/*.json' ).forEach( function( file ) {

  let dash = file.split("/");
           
  if(dash.length == 3) {
      let dot = dash[2].split(".");
      
    if(dot.length == 2) {
      let lang = dot[0]; //available languages
      
      fs.readFile(file, function(err, data) {
        language_dict[lang] = JSON.parse(data.toString()); //Lea todo el archivo de idioma determinado
      });
    }
  }
});

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var lang = 'en';
  let dash = q.pathname.split("/");
  if(dash.length >= 2) {
    let code = dash[1];
    if(code !== '' && language_dict.hasOwnProperty(code)) {
      lang = code;
    }
  }

  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    let data_string = data.toString()
    for (var key of Object.keys(language_dict[lang])) {
      let pattern = new RegExp("{{" + key + "}}", "g");  // Regex to replace all instances with the corresponding value based on the key/identifiers available.
      data_string = data_string.replace(pattern, language_dict[lang][key]);
    }
    res.write(data_string);
    return res.end();
  });
}).listen(8081);