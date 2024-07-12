import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    stages: [
        {
            // ramp up
            duration: '5m',
            target: 1000
        },
        {
            duration: '24h',
            target: 1000
        },
        {
            // ramp down
            duration: '5m',
            target: 0
        }
    ]
}

export default function () {
    http.get('https://test.k6.io');
    sleep(1);
    http.get('https://test.k6.io/contacts.php');
    sleep(2);
    http.get('https://test.k6.io/news.php');
    sleep(2);
}

// Soak test is like load test but with longer time, the load is same between load test and soak test
// Soak test is after load test
// Identify issues like Memory leak
