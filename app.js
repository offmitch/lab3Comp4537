const http = require("http");
const url = require("url");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    const name = queryObject.name || 'Name';
    const time = new Date().toLocaleTimeString();

    const message = `
    <body style = "color: blue">
        Hello, ${name}! The current time is ${time}.
    </body>`;

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(message);
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
