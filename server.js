require('dotenv').config();
const app = require('./app');
const port = process.env.PORT || 3030;

app.listen(port, (error) => {
    if (!error) {
        console.log(`Server started at http://localhost:${port}`);
    }
    else {
        console.log(`Error starting server... ---> ${error}`);
    }
});