const rwClient = require("./client");

const tweet = async (text, options, duration) => {
    try {
        const poll = {
            duration_minutes: duration,
            options
        }

        await rwClient.v2.tweet(text, poll);
    } catch (err) {
        console.log(err);
    }
}

const tweetPoll = async (text) => {
    try {
        await rwClient.v2.tweet
    } catch (err) {
        console.log(err);
    }
}

tweetPoll("Test poll" ["1", "2", "3", "4", "5"], 1);