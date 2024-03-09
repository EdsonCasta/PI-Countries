const server = require("./src/server");
const { conn } = require('./src/db.js');
const saveCountries = require("./src/utils/saveCountries.js")
const PORT = 3001;

conn.sync({ force: true })
.then(() => saveCountries())
.then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
