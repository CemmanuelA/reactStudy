const express = require('express');
const app = express();

const PORT = process.env.PORT || 9000;

app.use(express.static(__dirname + '/../dist'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})
