const { readFile, readdirSync, readFileSync } = require("fs")
let http = require("http")

module.exports = {
    run: (req = http.IncomingMessage, res = http.OutgoingMessage) => {
        
        let filePath = req.url.slice(5)

        if (filePath == "") {
            filePath = "index.html"
        }

        let file;

        try {
            file = readFileSync(`./src/webPage/${filePath}` )
        } catch(e) {
            res.writeHead(200)
            res.write("<h1>File not found</h1>")
            res.end()
            return;
        }
        if (filePath.endsWith(".png")) {
            res.writeHead(200, {'Content-Type': 'image/png'})
        } else {
            res.writeHead(200)
        }

        res.write(file)
        res.end()
        
    }
}