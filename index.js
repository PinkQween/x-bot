const rwClient = require("./client");

const tweet = async (text) => {
    try {
        await rwClient.v2.tweet(text);
    } catch (err) {
        console.log(err);
    }
}

// tweet("Test");