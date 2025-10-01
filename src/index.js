const core = require("@actions/core");
const axios = require("axios");

try {
  const webhookUrl = core.getInput("webhook-url");
  const content = core.getInput("content");
  const timestamp = new Date().toTimeString();
  const body = { content: content };
  const payload = JSON.stringify(body);

  core.setOutput("timestamp", timestamp);
  core.debug(`webhookUrl: ${nameToGreet}`);
  core.debug(`content: ${content}`);
  core.debug(`payload: ${payload}`);

  const response = await axios.post(webhookUrl, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  core.setOutput("response", response.data)
} catch (error) {
  core.setFailed(error.message);
}
