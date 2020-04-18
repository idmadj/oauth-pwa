const express = require('express');
const app = express();
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.use(express.static('public'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));