const { PORT } = require("./configuration");
const { Console } = require("console");
const path = require('path');
const app = require("express")();
const server = require("http").Server(app);

// Redirect all get requests to index.html for now
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

// Listen on specified port
server.listen(PORT, () => {
  console.log(`Server now listening on ${PORT}!`);
});
