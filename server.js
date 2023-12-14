// Node.js
const express = require('express');
const { exec } = require('child_process');
const app = express();

app.get('/path/to/server/script', (req, res) => {
    exec('bash main.sh', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        res.send(stdout);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
