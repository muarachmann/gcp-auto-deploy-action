# slack-inspire-action

Sends inspirational quotes to a slack channel

## Prerequisites

- A Slack account and Slack app [Sign up for free](https://api.slack.com/)
- A [SLACK TOKEN](https://api.slack.com/authentication/oauth-v2) The documentation can be viewed here. (https://api.slack.com/#read_the_docs)

## Usage

1. Create a new slack app.

2. Configure it by giving it a name, icon, etc

3. Create/Generate a token see here - https://slack.com/intl/en-cm/help/articles/215770388-Create-and-regenerate-API-tokens

5. Add the following to your workflow

```yml
name: Inspire Slack
on:
  push:
    branches: [ master ]
jobs:
  build:
    name: Inspire
    runs-on: ubuntu-latest
    steps:
      - uses: muarachmann/slack-notify-action@master
        with:
          SLACK_CLIENT_TOKEN: ${{ secrets.SLACK_CLIENT_TOKEN }}
          CHANNEL_ID: ${{ secrets.CHANNEL_ID }}
```

## Inputs

#### `SLACK_CLIENT_TOKEN`

**Required** This token is needed for authentication of your slack bot. Usually starts with    ```xoxb-XXXXXX-XXXXXXX-XXXXXX```

**NB** SLACK_CLIENT_TOKEN needs to have scope to send messages like: chat:write, chat:write.public, groups:write


#### `CHANNEL_ID`

**Required** This is the channel that the bot is going to post to e.g ```general, random etc```.  **NB** This is the same channel the app must be invited to and installed

## Testing

For testing locally, run the following commands `cp .env-example .env` and replace the env varibles then run 

```bash
   $ npm install
   $ npm start
```
with yours else this is primarily to work with github actions

## Contributing

Of course PRs are welcomed at every level.

## License

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)