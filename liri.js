require("dotenv").config();

//packages
var keys = require("./keys.js");
var request = require("request");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var Twitter = require("twitter");


//variables
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var liriRtn = process.argv[2];
var movieName = process.argv[3];

switch (liriRtn){

    case "my-tweets":
    myTweets();
    break;

    case "spotify-this-song":
    spotifyThisSong();
    break;

    case "movie-this":
    movieThis();
    break;

    case "do-what-it-says":
    doWhatItSays();
    break;

     // instructions for first-time user lurking around on the command line
     default: console.log("\n" + "type any command after 'node liri.js': " + "\n" +
     "my-tweets" + "\n" +
     "spotify-this-song 'any song title' " + "\n" +
     "movie-this 'any movie title' " + "\n" +
     "do-what-it-says " + "\n" +
     "Use quotes for multiword titles!");
    
};

//tweets function
function myTweets() {
    var params = { screen_name: 'jayinmarketing' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {

                console.log(tweets[i].text);
            };
        } else {
            console.log("error: " + err);
            return;
        };
    });
};

