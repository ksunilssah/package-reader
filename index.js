const fs = require('fs'),
    path = require('path'),
    http = require('http');


const packageReader = function (host, port) {
    let location = path.join(process.cwd(), 'package.json');
    fs.readFile(location, 'utf8', (err, pack) => {
        if (err) {
            return console.log(err);
        }
        let packageObj = JSON.parse(pack);
        packageReader.sendDetails(packageObj, host, port);
    });
}


packageReader.sendDetails = function (dataObj, host, port) {

    var config = {
        hostname: host || 'localhost',
        port: port,
        path: '/fire-photon',
        method: 'POST',
        headers: {
	        'Content-type': 'application/json'
        }
    };

    // Set up the request
    var postReq = http.request(config, function (res) {
        res.setEncoding('utf8');
        res.on('data', status => {});
    });

    // post the data
    postReq.write(JSON.stringify(dataObj));
    postReq.end();
}

module.exports = packageReader;