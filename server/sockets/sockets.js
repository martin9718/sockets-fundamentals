const { io } = require('../server');


io.on('connection', (client) => {

    console.log('Connected user');

    client.emit('sendMessage', {
        user: 'Admin',
        message: 'Welcome to this app'
    });

    client.on('disconnect', () => {
        console.log('User disconnected');
    });

    //Listen to client
    client.on('sendMessage', (data, callback) => {
        console.log(data);

        client.broadcast.emit('sendMessage', data);

        /*  if (message.user) {
              callback({
                  resp: 'All went well'
              });
          } else {
              callback({
                  resp: 'All went wrong'
              });
          }*/

    });
});