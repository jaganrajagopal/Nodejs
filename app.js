const express = require('express');
const app = express();
const port = 3200;

app.get('/', (req, res) => {
  res.send('Hello Ansible session ! This is a sample Node.js app. Integration has been done by Jagan');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
