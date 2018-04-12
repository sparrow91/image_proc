const express = require('express');

const server = express();

server.use(express.static('public'));
server.listen('9000', (port) => {
    console.log(`Listening on  ${port}`)
});
