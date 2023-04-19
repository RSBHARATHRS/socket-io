const app = require('express')();
const httpServer = require('http').createServer(app);
const cors = require('cors');
const io = require('socket.io')(httpServer, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"]
  }
});

const port = process.env.PORT || 4000;
app.use(cors({
  origin: '*'
}));

//const httpServer = require('http').createServer(app);
// httpServer.listen(80)
module.exports = (io) => {

  io.on('connection', socket => {
    console.log('new connection');

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

    socket.on('disconnect', () => console.log('disconnected'));

  })

  httpServer.listen(port, () => console.log(`listening on port: ${port}`));
}