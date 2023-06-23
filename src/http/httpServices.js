let http = require("http");
const webService = require("./webService");

module.exports = {
    run: () => {
        console.log("Web services starting...")

        http.createServer((req, res) =>{
            if (req.url === '/') {
              res.writeHead(302, { 'Location': '/web/' });
              res.end();
            } else if (req.url.startsWith('/web/')) {
              webService.run(req, res)
            } else {
              res.writeHead(404, { 'Content-Type': 'text/plain' });
              res.write('Page non trouvée');
              res.end();
            }
            
        }).listen(80)
    }
}