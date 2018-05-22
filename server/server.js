const express = require('express'),
      app = express();


app.use(express.static(__dirname + '../dist'));



const server = app.listen(process.env.PORT, () =>{
  const port = server.address().port;
  console.log("app running now in ", port);
})
