var http = require('http');
var url = require('url');

const dataStore = {
    "x": () => 1,
    "y": () => { return new Date().toUTCString() }
};
http.createServer(
    /* now  you can type in your browser
    localhost:8080/?data=x
    localhost:8080/?data=y
    */
    function (req, res) {
        var query = url.parse(req.url, true).query;
        console.log(query.data);
        var d = '';
        if (String(query.data) in dataStore) { // must be checked because of the favicon request ( google it, try it )
            d = dataStore[query.data]();
            console.log(d);
        }
        res.write('Hello World! ' + d); //write a response to the client
        res.end(); //end the response
    }
).listen(8080); //the server object listens on port 8080