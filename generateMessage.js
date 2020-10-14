const fetch = require('node-fetch');

const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

const eurRate = async () => {
    try {
        let response = await fetch(url);
        let json = await response.json();
        return json["bpi"]["EUR"]["rate"];
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

module.exports = eurRate;