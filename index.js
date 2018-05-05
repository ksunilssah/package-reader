(function () {
    const fs = require('fs');

    fs.readFile('../package.json', 'utf8', function (err, pack) {
        if (err) {
            return console.log(err);
        }
        let packageObj = JSON.parse(pack);
        console.log(packageObj);
    });
})();