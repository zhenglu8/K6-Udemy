import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    stages: [
        {
            duration: '2h',
            target: 10000
        }
    ]
}

export default function () {
    http.get('https://test.k6.io');
    sleep(1);
}

// Within the 2h, we need to manually monitor and then manually stop the running, then tell the breakpoint
// Load test, then Stress test, and then consider about spike test and breakpoint test
// Avoid to run breakpoint test in Elastic cloud environment (Pay as your usage) -> it will determine your cloud billing rather than application's real limits
