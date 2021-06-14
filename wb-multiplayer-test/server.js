const io = require('socket.io.js').listen(443);

io.on('connection', function(socket) {
    console.log('client connected');

    // listen for incoming data msg on this newly connected socket
    socket.on('data',function (data) {
        console.log(`data received is '${data}'`)
    });

});