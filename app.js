const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const IP = process.env.IP || '127.0.0.1';

app.get('/', (req, res) => {
    let responseObject = {};
    responseObject.ipaddress = req.headers.host;
    responseObject.language = req.headers["accept-language"].split(',')[0];
    // Software name in ()
    let softwareBracks = req.headers["user-agent"].match(/\(.*?\)/)[0];
    // remove ()
    let software = softwareBracks.split("").splice(1, softwareBracks.length - 2).join("");
    responseObject.software = software;
    res.send(JSON.stringify(responseObject));
});

app.listen(PORT, IP, () => {
    console.log(`The server is running on http://${IP}:${PORT}`);
});