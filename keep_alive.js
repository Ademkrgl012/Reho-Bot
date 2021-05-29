var http = require('http');

http.createServer(function (req, res) {
  res.write("7/24 Aktif Etme Başarılı :)");
  res.end();
}).listen(8080);