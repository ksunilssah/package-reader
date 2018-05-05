const fs = require('fs'),
    path = require('path');

const packageReader = function () {
    let location = path.join(process.cwd(), 'package.json');
    fs.readFile(location, 'utf8', function (err, pack) {
        if (err) {
            return console.log(err);
        }
        let packageObj = JSON.parse(pack);
        console.log(packageObj);
    });
}


packageReader.sendDetails = function () {

}

module.exports = packageReader;