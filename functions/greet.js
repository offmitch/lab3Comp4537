export async function handler(event, context) {
  const params = event.queryStringParameters;
  const name = params.name || "Guest";
  const currentTime = new Date().toLocaleString();

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: `
      <html>
        <body style="color: blue;">
          <h2>Hello, ${name}!</h2>
          <p>The current server time is: ${currentTime}</p>
        </body>
      </html>
    `
  };
}
