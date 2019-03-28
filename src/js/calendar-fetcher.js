const {google} = require('googleapis');
const fs = require('fs');
let privatekey = require("../../auth.json");


// configure a JWT auth client
let jwtClient = new google.auth.JWT(
    privatekey.client_email,
    null,
    privatekey.private_key,
    ['https://www.googleapis.com/auth/calendar']);

const calendar = google.calendar({
    version: 'v3',
    auth: jwtClient
});
const CALENDAR_ID = 'f4up6cc6efjknhmjmklpbnp8jg@group.calendar.google.com';

function dateTime2Date(any) {
    if (any) {
        return any.substr(0, any.indexOf('T'));
    }
    return any;
}

calendar.events.list({
    auth: jwtClient,
    calendarId: CALENDAR_ID,
    timeMin: "2019-03-10T00:00:00.000Z",
    timeMax: "2019-04-11T23:59:59.000Z"
}, function (err, response) {
    if (err) {
        console.log('The API returned an error: ' + err);
        return;
    }
    var output = [];
    var events = response.data.items;
    events.forEach(function (event) {
        var start = dateTime2Date(event.start.dateTime) || event.start.date;
        var end = dateTime2Date(event.end.dateTime) || event.end.date;
        console.log('%s %s %s', start, end, event.summary);
        output.push([start, end]);
    });

    const path = './reservations.json';
    fs.writeFile(path, JSON.stringify(output), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The calendar dump was saved to '%s'!", path);
    });

});
