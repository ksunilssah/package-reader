const fs = require('fs'),
    path = require('path'),
    http = require('http');


const packageReader = function () {
    let location = path.join(process.cwd(), 'package.json');
    fs.readFile(location, 'utf8', function (err, pack) {
        if (err) {
            return console.log(err);
        }
        let packageObj = JSON.parse(pack);
        this.sendDetails(packageObj);
    });
}


packageReader.sendDetails = function (dataObj) {

    // An object of options to indicate where to post to
    var config = {
        host: 'http://localhost',
        port: '5050',
        method: 'POST',
    };

    // Set up the request
    var postReq = http.request(config, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (status) {
            console.log('Response: ' + status);
        });
    });

    // post the data
    postReq.write(JSON.stringify(dataObj));
    postReq.end();
}

module.exports = packageReader;