var socket = io();

socket.on('connect', function() {

    console.log('connected to server');
});

//listen
socket.on('disconnect', function() {
    console.log('we lost connection with the server');
});

//Send information
socket.emit('sendMessage', {
        user: 'Martín',
        message: 'Hello world'
    },
    function(resp) {
        console.log('server response', resp);
    });

//listen information
socket.on('sendMessage', function(resp) {
    console.log('Server', resp);
});