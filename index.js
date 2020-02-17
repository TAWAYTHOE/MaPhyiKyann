const express = require('express')
const app = express()
const port = process.env.PORT || 3000  ;

const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events
const TextMessage = require('viber-bot').Message.Text;
const UrlMessage = require('viber-bot').Message.Url;
const ContactMessage = require('viber-bot').Message.Contact;
const PictureMessage = require('viber-bot').Message.Picture;
const VideoMessage = require('viber-bot').Message.Video;
const LocationMessage = require('viber-bot').Message.Location;
const StickerMessage = require('viber-bot').Message.Sticker;
const RichMediaMessage = require('viber-bot').Message.RichMedia;
const KeyboardMessage = require('viber-bot').Message.Keyboard;

app.get('/', (req, res) => {res.send('Hello World!')} )

//start_here
const bot = new ViberBot({
	authToken: '4b066d234267dd8f-8c4488c87a546514-2f2d5d9dc4e94444',
	name: "EchoBot",
	avatar: "http://viber.com/avatar.jpg" // It is recommended to be 720x720, and no more than 100kb.
});

app.use("/viber", bot.middleware())
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// Perfect! Now here's the key part:
bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
	// Echo's back the message to the client. Your bot logic should sit here.
	response.send(message);
});

