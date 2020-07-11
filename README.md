# wazzupbot
A Discord bot that replies "WAZZUP" in response to messages that contain any spelling of "wazzup". The bot will create its response with a random number of each letter.
## Instructions
* ### Install dependencies
You need npm and node on your system to install required dependencies and run the program.
To install all required dependencies, run `npm install` from within the same directory as the program. 

* ### Authenticate the bot
The bot needs your Discord bot account's unique identifier token to log in. If you haven't created a bot account yet, you can do so from the [Discord Developer Portal](https://discord.com/developers/applications).
To add your bot token, create a file called __auth.json__ and add an attribute called __"token"__. Enter your token as the value.
You can use the __auth.json.example__ file included in this repository as a template.

* ### Run the program
Run `node wazzupbot.js` to start the bot. It will log into your bot account and appear online as long as the code is running. `CTRL+C` exits the process.
