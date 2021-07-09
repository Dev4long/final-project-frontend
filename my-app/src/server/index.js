const app = require('express')();
const http = require('http').createServer(app);


app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
    console.log('a user connected');
});

http.listen(3005, () => {
  console.log('listening on *:3005');
});