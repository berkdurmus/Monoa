
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const openai = require('openai-api');

const OPENAI_API_KEY = 'your-api-key';
const openaiApi = new openai(OPENAI_API_KEY);

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  ws.on('message', async (message) => {
    const msgObj = JSON.parse(message);

    if (msgObj.isAIRequest) {
      const aiResponse = await askOpenAI(msgObj.content);
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ content: aiResponse, isAIResponse: true }));
        }
      });
    } else {
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    }
  });
});

async function askOpenAI(question) {
  try {
    const response = await openaiApi.complete({
      engine: 'davinci',
      prompt: question,
      maxTokens: 150
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error querying OpenAI:', error);
    return 'Sorry, I could not process that.';
  }
}

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
    