const axios = require("axios");
const URL = require("./config.json");

const config = {
    "headers": {
        "Accept": "application/json",
        "Content-type": "application/json",
    }
};

const postData = {
    username: "TEST_API",
    content: "AsumiKana"
};

const main = async () => {
    const res = await axios.post(URL["url"], postData, config);
    console.log(res);
}

main();
