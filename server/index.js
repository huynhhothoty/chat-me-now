require('dotenv').config();

const { app, server } = require('./src/server');

const port = process.env.PORT || 3001;

// app.listen(port, () => {
//     console.log(`App listening at http://localhost:${port}`);
// });
server.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
