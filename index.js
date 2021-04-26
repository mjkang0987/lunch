const { WebClient } = require('@slack/web-api');
const token = 'xoxb-1983126972055-1998394043189-NNyvvYxR0CZzuGGEZInshY6d';
const web = new WebClient(token);

(async () => {
  const result = await web.chat.postMessage({
    text: 'Hello world!',
    channel: 'default',
  });

  console.log(`Successfully send message ${result.ts} in conversation default`);
})();
