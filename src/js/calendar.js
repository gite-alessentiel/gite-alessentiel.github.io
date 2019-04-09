import 'hello-week/dist/hello.week.min';
import 'hello-week/dist/css/hello.week.min.css';
import 'hello-week/dist/css/hello.week.theme.min.css';

const reservations = {}; //require('../../reservations.json');

if (document.getElementById("calendar") !== null) {

    new HelloWeek({
        daysHighlight: [
            {
                days: [
                    "2019-04-08",
                    "2019-04-09",
                    "2019-04-10",
                    "2019-04-11",
                    "2019-04-12",
                    "2019-04-13",
                    "2019-04-14",
                    "2019-04-15",
                    "2019-04-16",
                    "2019-04-17",
                    "2019-04-18",
                    "2019-04-19",
                    "2019-04-20",
                    "2019-04-21",
                ],
                backgroundColor: '#f08080',
                color: '#fff',
                title: 'Not available'
            }
        ]
    });
}
