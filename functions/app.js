export async function handler(event, context){



// const http = require("http");
// const url = require("url");

// const PORT = process.env.PORT || 3000;

    const params = event.queryStringParameters;
    const name = params.name || 'Name';
    const time = new Date().toLocaleString();

    const message = `
    <body style = "color: blue">
        Hello, ${name}! The current time is ${time}.
    </body>`;

    return {
        statusCode: 200,
        headers: { "Content-Type": "text/html" },
        body: message
    };

}
