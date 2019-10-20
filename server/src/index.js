var http = require('http');
var url = require('url');
var querystring = require('querystring');

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
        if (req.method == "GET") {
            var query = url.parse(req.url, true).query;
            //console.log(query);
            var d = '';

            if (String(query.data) in dataStore) { // must be checked because of the favicon request ( google it, try it )
                d = dataStore[query.data]();
                console.log(d);
                res.write('Hello World! ' + d); //write a response to the client
                res.end(); //end the response
            }

            if (req.url === '/Clients') {
                // Here comes the list of active Clients...

                console.log('Active Users Requested!');
                res.write('List of active users: ....');
                res.end();
            }

            if (req.url === '/stats') {
                // Here comes the stats page...

                console.log('Statistics Requested!');
                res.write('Statistics: ....');
                res.end();
            }
            if (req.url === '/') {
                res.write('<!DOCTYPE html><html><head><title>Welcome to the Chatroom!</title></head><body><form action="/" method="POST"><input type="text" name="username" placeholder="Type in your username"><button>LOG IN!</button></form></body></html>');
            }
        }
        else if (req.method == "POST") {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString(); 
            });
            req.on('end', () => {
                var post = querystring.parse(body);
                console.log(post.username);
                res.writeHead(302, {
                    'Location': '/'
                });
                res.end();
            });
        }
    }
).listen(8080); //the server object listens on port 8080
