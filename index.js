const request = require("request");
const URL = require("./config.json");
let options = {
    url: URL["url"],
    method: "POST",
    form: {"username": "TES_API", "content": "AsumiKana"}
};

request(options, function(error, response, body) {
    console.log(body);
})
