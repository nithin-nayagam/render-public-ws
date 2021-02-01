const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ apps: ['whatsapp', 'instagram', 'salesforce'] }));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
