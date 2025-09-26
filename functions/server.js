import messages from "../lang/messages/en/user.js";


class Greet {
  constructor(name) {
    this.name = name || messages.defaultName;
    
  }
  getGreeting() {
    return `<b>${messages.greeting}${this.name}</b> `;
  }

  getCurrentTime() {
    let time = new Date().toLocaleString();

    return `${messages.currentTime} ${time}`;
  }
}

export async function handler(event, context) {
  const params = event.queryStringParameters;
  const greeter = new Greet(params.name);

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: `
      <html>
        <body style="color: blue;">
          <p>
          ${greeter.getGreeting()}
          ${greeter.getCurrentTime()}
          </p>
        </body>
      </html>
    `
  };
}
