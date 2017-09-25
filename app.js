const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const IP = process.env.IP || '127.0.0.1';

app.get('/', (req, res) => {
    res.send('Success is sweet');
});

app.listen(PORT, IP, () => {
    console.log(`The server is running on http://${IP}:${PORT}`);
})