const Twit = require('twit');
const fs = require('fs');
require('dotenv').config();

const order = 4; // length of each n-gram
let nGrams = {};

const Bot = new Twit({
    consumer_key: '05zwMFR30L2eh6q9bxu6oU5Xs',
    consumer_secret: 'AM5dQk2Awg6RluTuo4fdg200BALJ7RgDq3HMPt2NzfwpfFOWdE',
    access_token: '1539323375654404096-A5S9dUpc3PLkdvV11dkIuBvSYrfYKl',
    access_token_secret: 'bm7HHuSgOgt8RB8RqTf6cK50D3wZ3wGi2CqMZV6NufLfi',
});




function tweet() {
    fs.readFile('lyrics.txt', 'utf8', function(error, lyrics) {  
        if (error) {
            console.log(error.message);
        } else {
             
            const words = lyrics.split("X")
            random_num = Math.floor(Math.random() * words.length);
            tweet = words[random_num]
            console.log(tweet)
           
            Bot.post('statuses/update', {status: tweet}, function(error, tweet, response) {
                if (error) {
                    console.log("Error making post. ", error.message);
                };
            });
        }
    });
}
 
tweet();