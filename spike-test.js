import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    stages: [
        {
            // ramp up
            duration: '2m',
            target: 10000
        },
        {
            // ramp down
            duration: '1m',
            target: 0
        }
    ]
}

export default function () {
    http.get('https://test.k6.io');
    sleep(1);
}

// We dont do Spike test every time before deployment
