let io = require('socket.io.js')
let socket = io.connect("https://tollt.github.io/wb-multiplayer-test", {
    reconnection: false
});

socket.on('connect', function() {
    console.log('Connected to server');
    socket.emit('data', 'data is emitted !')
});