const { WebClient, ErrorCode } = require('@slack/web-api');
const gh_ations_core = require('@actions/core')

const axios = require('axios')
require('dotenv').config()

// Read a token from the environment variables
const token = process.env.SLACK_CLIENT_TOKEN;
const channelId = process.env.CHANNEL_ID;

// Use this to get github variables
const slackClientToken = core.getInput('SLACK_CLIENT_TOKEN')
const slackChannel = core.getInput('SLACK_CHANNEL_ID')


// Initialize
const web = new WebClient(slackClientToken);

axios.get('https://type.fit/api/quotes')
      .then(res => {
            const quotes = res.data;
            const random = Math.floor(Math.random() * quotes.length);
            const quote = quotes[random].text
            const author = quotes[random].author
            console.log(author);
            (async () => {
                try {
                  const result = await web.chat.postMessage({
                      text: `${quote} - *${author}*`,
                      channel: slackChannel,
                    });
                  console.log(`Successfully send message ${result.ts} in conversation ${channel}`);
                } catch (error) {
                  // Check the code property, and when its a PlatformError, log the whole response.
                  if (error.code === ErrorCode.PlatformError) {
                    console.log(error.data);
                  } else {
                    // Some other error, oh no!
                    console.log('Well, that was unexpected.');
                  }
                }
              })()
      })