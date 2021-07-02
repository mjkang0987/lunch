require('dotenv').config();
const { WebClient } = require('@slack/web-api');

const token = process.env.CLIENT_TOKEN;
const web = new WebClient(token);

(async _ => {
  const result = await web.chat.postMessage({
    text: 'Hello world!',
    channel: 'default',
  });

  console.log(`Successfully send message ${result.ts} in conversation default`);
})();
