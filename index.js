const request = require("requestify");


exports.fetchStats = function(platform, region, battletag) {
    var returnValue = retrieveJSON(`https://ow-api.com/v1/stats/${platform}/${region}/${battletag}/profile`);
    return returnValue;
}

function retrieveJSON(value) {
    return new Promise(resolve => {
        
        request.get(value).then(function(response) {
            resolve(JSON.stringify(response.getBody()));
        })
        .fail(function(err) {
            resolve(err);
        });
    })
}
