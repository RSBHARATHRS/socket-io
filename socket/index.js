const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
  cors: {origin : '*'}
});

const port = process.env.PORT || 4000;

//const httpServer = require('http').createServer(app);

module.exports = (io) => {

    io.on('connection', socket => {

        console.log('new connection4'); 

        // socket.on("connect", () => {
        //     console.log(socket.id); // x8WIv7-mJelg7on_ALbx
        //   });
          socket.emit("message", "worldwewr");
          //socket.emit("message", 1, "2", { 3: '4', 5: Buffer.from([6]) });

        socket.on('message', (message) => {
            console.log(message);
            //io.emit('message', `${socket.id.substr(0, 2)} said ${message}`);
            io.emit('message', `${message}`);
          });
        
		socket.on('disconnect', () => console.log('disconnected1')); 
		
	})
    httpServer.listen(port, () => console.log(`listening on port ${port}`));
}