console.log("Starting services...")

try {
    let service = require("./src/service.js")
    service.run()
} catch(e){

    if (e.stack.startsWith("Error: Cannot find")) {
        console.error("Cannot to start services, \nIt seems the service module is missing. \nMake sure it is named service.js, \nAnd it is located the ./src/ folder, \nIf it still don't work please repport the error !")
    } else if (e.stack.startsWith("TypeError: service.run is not a function")){
        console.error("ConnectHouse file seems to be corrupted...")
        console.error("Please re-download and copy the file back...")
    } else {
        console.log("Error: Unknow error: " + e)
    }
    
}