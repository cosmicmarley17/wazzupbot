/*
 * Description:
 * 	A Discord bot that replies to any "wazzup" messages with its own "wazzup"
 * 	Trigger messages can contain any number of w's, a's, z's, etc.
 * 	Response messages will contain a randomly-generated number of w's, a's, z's, etc.
 *
 * Title: Wazzup Bot
 * Author: Owen Sullivan
 * Version: 1.0.1, Jul 31 2020
 */

const Discord = require('discord.js');
 const client = new Discord.Client();

const wazzupRegEx = new RegExp('[Ww]+[Aa]+[ZzSs]+[Uu]+[Pp]+');	//Regular expression to identify all spellings of "wazzup". 
									//"Wassup" is also accepted.

/*
 * Log in bot using unique bot token from Discord.
 */
const {token} = require('./auth.json');	//Retrieve bot token from json file
client.login(token);	//log in

/*
 * Print login confirmation to console
 */
client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

/*
 * Every time a message is sent, check if it is some form of "wazzup".
 * If the message is a "wazzup", reply with a "wazzup"
 */
client.on('message', msg => 
{
	//If the message matches wazzupRegEx and wasn't sent by a bot
	if (wazzupRegEx.test(msg.content) === true && !msg.author.bot) 
	{	
		msg.reply(replyGenerator());	//Reply to any messages meeting the wazzupRegEx
	}
});

/*
 * Generates a wazzup reply generated of a random number of letters.
 */
function replyGenerator()
{
	var numW = Math.floor((Math.random()*10)+1);	// returns a random integer from 1 to 10 
	var numA = Math.floor((Math.random()*10)+1);	// returns a random integer from 1 to 10 
	var numZ = Math.floor((Math.random()*9)+2);	// returns a random integer from 2 to 10 
	var numU = Math.floor((Math.random()*10)+1);	// returns a random integer from 1 to 10 
	var numP = Math.floor((Math.random()*10)+1);	// returns a random integer from 1 to 10 
	
	var botReply = "";	//declares botReply string variable

	/*
	 * These for loops concatenate the letters of "wazzup" to botReply
	 * according to the results of the numW, numA, ...
	 */
	for(var i = 0; i < numW; i++)
	{
		botReply = botReply + "W";
	}
	for(var i = 0; i < numA; i++)
	{
		botReply = botReply + "A";
	}
	for(var i = 0; i < numZ; i++)
	{
		botReply = botReply + "Z";
	}
	for(var i = 0; i < numU; i++)
	{
		botReply = botReply + "U";
	}
	for(var i = 0; i < numP; i++)
	{
		botReply = botReply + "P";
	}
	return botReply;
}

