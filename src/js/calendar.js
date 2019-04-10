import 'hello-week/dist/hello.week.min';
import 'hello-week/dist/css/hello.week.min.css';
import 'hello-week/dist/css/hello.week.theme.min.css';

const reservations = require('../../reservations.json');

if (document.getElementById("calendar") !== null) {

    new HelloWeek({
        daysHighlight: [
            {
                days: reservations,
                backgroundColor: '#f08080',
                color: '#fff',
                title: 'Not available'
            }
        ]
    });
}
